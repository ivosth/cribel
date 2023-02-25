import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { /*createContext,*/ useState, useEffect, useRef } from "react";
import { API, Auth, Hub } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
//import PostList from './components/PostList';
import ChannelList from './components/ChannelList';
import PostList from './components/PostList';
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import Channel from './pages/Channel';
import Home from './pages/Home';
import { createUser } from "./graphql/mutations";
import { getUser } from "./graphql/customQueries";
import { Routes, Route } from "react-router-dom";
import Settings from './pages/Settings';
import SettingsProfile from './pages/SettingsProfile';
import SettingsChannel from './pages/SettingsChannel';
import SettingsAdvanced from './pages/SettingsAdvanced';
import About from './pages/About';
import Error from './pages/Error';
//const UserContext = createContext(null);

function App() {
  const [userAttributes, setUserAttributes] = useState(null);

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
        }

        console.log({ currentUserAttributes });

        {/* Check if user exists in database */}
        {/* If not, create user in database */}
        const user = await API.graphql({ query: getUser, variables: { id: currentUserAttributes.id } });
        console.log({ user });
        if (!user.data.getUser) {
          try {
            const newUser = await API.graphql({
              query: createUser,
              variables: { input: currentUserAttributes }
            });
            console.log({ newUser });
            setUserAttributes(currentUserAttributes);
    
          } catch (err) {
            console.error("Error registering new user: ", err);
          }

        } else {
          {/* If user exists, update currentUserAttributes with user information from database */}
          const newCurrentUserAttribute = {
            ...currentUserAttributes,
            group: user.data.getUser.group || null,
            photo: user.data.getUser.photo || null,
            rol: user.data.getUser.rol || null,
            posts: user.data.getUser.posts || null,
            ownedChannels: user.data.getUser.ownedChannels || null,
            subscriptions: user.data.getUser.subscriptions || null,
            participantChannels: user.data.getUser.participantChannels || null,
            /// Delete this
            givenName: user.data.getUser.givenName,
            familyName: user.data.getUser.familyName,
            /////
          };
          setUserAttributes(newCurrentUserAttribute);
          console.log(newCurrentUserAttribute);
        }

      } catch (err) {
        setUserAttributes(null);
        console.log(err);
      }
    };


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

    obtainUser();
    onAuthEventListener();
  }, userAttributes);



  return !userAttributes ? (
    <Authenticator signUpAttributes={[
      'given_name',
      'family_name',
    ]}/>
  ) : (
    <> {/*<UserContext.Provider value={{ userAttributes }}>*/}
      <Navbar user={userAttributes} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />}>
          <Route path="channels" element={<ChannelList />} />
          <Route path="posts" element={<PostList />} />
        </Route>
        <Route path="/settings" element={<Settings />}>
          <Route path="profile" element={<SettingsProfile user={userAttributes}/>} />
          <Route path="channels" element={<SettingsChannel user={userAttributes}/>} />
          <Route path="advanced" element={<SettingsAdvanced />} />
        </Route>
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/*</UserContext.Provider>*/} </>
  )
};




export default App;
