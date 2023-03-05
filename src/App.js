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
import { createUser } from "./graphql/mutations";
import { Routes, Route, useNavigate } from "react-router-dom";

//const UserContext = createContext(null);

function App() {
  const [userAttributes, setUserAttributes] = useState(null);
  const userAttributesRef = useRef(null);

  useEffect(() => {
    const obtainUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const currentUserAttributes = {
          id: currentUser.attributes.sub,
          email: currentUser.attributes.email,
          emailVerified: currentUser.attributes.email_verified,
          group: currentUser.signInUserSession.accessToken.payload["cognito:groups"][0]
        }
        setUserAttributes(currentUserAttributes);
        
      } catch (err) {
        setUserAttributes(null);
        console.log(err);
      }
    };

    const registerUser = async () => {
      try {
        const createUserInput = {
          ...userAttributesRef.current,
          emailVerified: true,
        };

        const newUser = await API.graphql({
          query: createUser,
          variables: { input: createUserInput },
          authMode: 'AWS_IAM'
        });
        console.log({ newUser });
        setUserAttributes(createUserInput);

      } catch (err) {
        console.error("Error registering new user: ", err);
      }
    };

    const onAuthEventListener = () => {
      Hub.listen('auth', (data) => {
        const authEvent = data.payload.event;
        const authData = data.payload.data;

        //Adding console.log inside cases slows down the app a lot
        switch (authEvent) {
          case "signIn":
            obtainUser();
            break;

          case "signUp":
            userAttributesRef.current = {
              id: authData.userSub,
              email: authData.user.username,
              emailVerified: authData.userConfirmed,
              //role: "student" default case in graphql schema
            };
            break;

          case "signOut":
            setUserAttributes(null);
            break;

          case "confirmSignUp":
            if (authData === "SUCCESS")
              registerUser();
            break;

          default:
            return;
        }
      })

    };

    obtainUser();
    onAuthEventListener();
  }, []);

  let navigate = useNavigate();

  return !userAttributes ? (
    <Authenticator />
  ) : (
    <> {/*<UserContext.Provider value={{ userAttributes }}>*/}
      <Navbar email={userAttributes.email} />
        <Routes>
          <Route path="/" element={<div>MainPage</div>}/>
          <Route path="/explore" element={<Explore/>}>
            <Route path="channels" element={<ChannelList />}/>
            <Route path="posts" element={<PostList />}/>
          </Route>
          <Route path="/channel/:id" element={<Channel />}/>
          <Route path="/posts" element={<PostList />}/>
          <Route path="/about" element={<div><p>Navigation Test Page</p> <button onClick={()=> {navigate("/channels");}}>Change to Channels</button></div>}/>
          <Route path = "*" element = {<div>Page not found</div>}/>
        </Routes>
    {/*</UserContext.Provider>*/} </> 
  )
};




export default App;
