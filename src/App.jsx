import './App.css';
import '@aws-amplify/ui-react/styles.css';
import React, { useState, useEffect, Suspense } from "react";
import { API, Auth, Hub } from "aws-amplify";

import { createUser } from "./graphql/mutations";
import { getUser } from "./graphql/customQueries";
import { Routes, Route, Outlet } from "react-router-dom";

import Loading from './components/common/Loading';

const Authenticator = React.lazy(() => {
  return import('@aws-amplify/ui-react').then(module => {
    return { default: module.Authenticator };
  });
});

const ChannelList = React.lazy(() => import('./components/channels/ChannelList'));
const PostList = React.lazy(() => import('./components/posts/PostList'));
const Navbar = React.lazy(() => import('./components/common/Navbar'));
const Explore = React.lazy(() => import('./pages/Explore'));
const Channel = React.lazy(() => import('./pages/Channel'));
const Home = React.lazy(() => import('./pages/Home'));
const Settings = React.lazy(() => import('./pages/Settings'));
const SettingsProfile = React.lazy(() => import('./components/settings/SettingsProfile'));
const SettingsChannel = React.lazy(() => import('./components/settings/SettingsChannel'));
const SettingsAdvanced = React.lazy(() => import('./components/settings/SettingsAdvanced'));
const About = React.lazy(() => import('./pages/About'));
const Error = React.lazy(() => import('./pages/Error'));
const Profile = React.lazy(() => import('./pages/Profile'));
const ChannelPostsSorted = React.lazy(() => import('./components/channels/ChannelPostsSorted'));
const Feed = React.lazy(() => import('./pages/Feed'));
const Notifications = React.lazy(() => import('./pages/Notifications'));

function App() {
  const [userAttributes, setUserAttributes] = useState(null);
  const [notifications, setNotifications] = useState(false);

  const updateUserAttributes = (newAttributes) => {
    setUserAttributes({ ...userAttributes, ...newAttributes });
  };

  const updateIconNotifications = (state) => {
    setNotifications(state);
  };


  useEffect(() => {
    const obtainUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const currentUserAttributes = {
          id: currentUser.attributes.sub,
          email: currentUser.attributes.email,
          emailVerified: currentUser.attributes.email_verified,
          givenName: currentUser.attributes.given_name,
          familyName: currentUser.attributes.family_name,
          role: "student",
          group: "viewer",
        }


        /* Check if user exists in database */
        /* If not, create user in database */
        const user = await API.graphql({ query: getUser, variables: { id: currentUserAttributes.id } });
        if (!user.data.getUser) {
          try {
            currentUserAttributes.disabled = false;
            await API.graphql({
              query: createUser,
              variables: { input: currentUserAttributes }
            });
            setUserAttributes(currentUserAttributes);

          } catch (err) {
            console.error("Error registering new user: ", err);
          }

        } else {
          /* If user exists, update currentUserAttributes with user information from database */
          const newCurrentUserAttribute = {
            ...currentUserAttributes,
            group: user.data.getUser.group || null,
            image: user.data.getUser.image || null,
            role: user.data.getUser.role || null,
            currentPosition: user.data.getUser.currentPosition || null,
            description: user.data.getUser.description || null,
            ownedChannels: user.data.getUser.ownedChannels || null,
            subscriptions: user.data.getUser.subscriptions || null,
            participantChannels: user.data.getUser.participantChannels || null,
            createdAt: user.data.getUser.createdAt || null,
          };
          setUserAttributes(newCurrentUserAttribute);
        }
      } catch (err) {
        setUserAttributes(null);
        console.error("Error obtaining User data: ", err);
      }
    };
    obtainUser();

    const onAuthEventListener = () => {
      Hub.listen('auth', (data) => {
        const authEvent = data.payload.event;

        //Adding console.log inside cases slows down the app a lot
        switch (authEvent) {
          case "signIn":
            obtainUser();
            break;

          case "signOut":
            setUserAttributes(null);
            break;

          default:
            return;
        }
      })

    };


    onAuthEventListener();
  }, []);



  return !userAttributes ? (
    <Suspense fallback={<Loading />}>
      <Authenticator signUpAttributes={[
        'given_name',
        'family_name',
      ]} />
    </Suspense>
  ) : (
    <>
      <Navbar user={userAttributes} notifications={notifications} updateIconNotifications={updateIconNotifications} />
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loading />}><Home/></Suspense>} />
        <Route path="/explore" element={<Suspense fallback={<Loading />}><Explore /></Suspense>} >
          <Route path="channels" element={<Outlet />} >
            <Route path="new" element={
              <Suspense fallback={<Loading/>}>
                <ChannelList sort="new" userID={userAttributes.id} subscriptions={userAttributes.subscriptions?.items || null} updateChannelsNavbar={updateUserAttributes} />
              </Suspense> 
            }/>
            <Route path="trending" element={
              <Suspense fallback={<Loading/>}>
                <ChannelList sort="trending" userID={userAttributes.id} subscriptions={userAttributes.subscriptions?.items || null} updateChannelsNavbar={updateUserAttributes} />
              </Suspense>
            }/>
            <Route path="top" element={
              <Suspense fallback={<Loading/>}>
                <ChannelList sort="top" userID={userAttributes.id} subscriptions={userAttributes.subscriptions?.items || null} updateChannelsNavbar={updateUserAttributes} />
              </Suspense>
            }/>
          </Route>
          <Route path="posts" element={<Outlet />} >
            <Route path="new" element={
              <Suspense fallback={<Loading/>}>
                <PostList userID={userAttributes.id} sort="new" />
              </Suspense>
            }/>
            <Route path="trending" element={
              <Suspense fallback={<Loading/>}>
                <PostList userID={userAttributes.id} sort="trending" />
              </Suspense>
            }/>
            <Route path="top" element={
              <Suspense fallback={<Loading/>}>
                <PostList userID={userAttributes.id} sort="top" />
              </Suspense>
            }/>
          </Route>
        </Route>
        <Route path="/settings" element={
          <Suspense fallback={<Loading />}>
            <Settings userGroup={userAttributes.group} />
          </Suspense>
        } >
          <Route path="profile" element={
            <Suspense fallback={<Loading />}>
              <SettingsProfile user={userAttributes} updateUserNavbar={updateUserAttributes} />
            </Suspense>
          } />
          <Route path="channels" element={
            <Suspense fallback={<Loading />}>
              { userAttributes.group !== "creator" || userAttributes.group !== "admin" ? <SettingsChannel userID={userAttributes.id} /> : <Error /> }
            </Suspense>
          } />
          <Route path="advanced" element={
            <Suspense fallback={<Loading />}>
              { userAttributes.group === "admin" ? <SettingsAdvanced /> : <Error /> }
            </Suspense>
          } />
        </Route>
        <Route path="/channel/:id" element={
          <Suspense fallback={<Loading />}>
            <Channel userID={userAttributes.id} subscriptions={userAttributes.subscriptions?.items || null} updateChannelsNavbar={updateUserAttributes} />
          </Suspense>
        } >
          <Route path="new" element={
            <Suspense fallback={<Loading />}>
              <ChannelPostsSorted userID={userAttributes.id} sort="new" />
            </Suspense>
          } />
          <Route path="trending" element={
            <Suspense fallback={<Loading />}>
              <ChannelPostsSorted userID={userAttributes.id} sort="trending" />
            </Suspense>
          } />
          <Route path="top" element={
            <Suspense fallback={<Loading />}>
              <ChannelPostsSorted userID={userAttributes.id} sort="top" />
            </Suspense>
          } />
        </Route>
        <Route path="/profile/:id" element={ <Suspense fallback={<Loading />}> <Profile /> </Suspense>} />
        <Route path="/feed" element={
          <Suspense fallback={<Loading />}>
            <Feed userID={userAttributes.id} subscriptions={userAttributes.subscriptions?.items || null} />
          </Suspense>
        } />
        <Route path="/notifications" element={
          <Suspense fallback={<Loading />}>
            <Notifications userID={userAttributes.id} userCreatedAt={userAttributes.createdAt} subscriptions={userAttributes.subscriptions?.items || null} updateIconNotifications={updateIconNotifications} />
          </Suspense>
        } />
        <Route path="/about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<Loading />}><Error /></Suspense>} />
      </Routes>
    </>
  )
};




export default App;
