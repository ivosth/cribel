import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { createContext, useState, useEffect, useRef } from "react";
import { API, Auth, Hub } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
//import PostList from './components/PostList';
import ChannelList from './components/ChannelList';
import { createUser } from "./graphql/mutations";

const UserContext = createContext(null);

function App() {
  const [userAttributes, setUserAttributes] = useState(null);
  const userAttributesRef = useRef(null);

  const onSignOutHandler = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.error("Error signing out user", err);
    }
  };


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

  return !userAttributes ? (
    <Authenticator />
  ) : (
    <UserContext.Provider value={{ userAttributes }}>
      <div className="user">
        <h2>{userAttributes.email}</h2>
        <button onClick={onSignOutHandler}>Sign Out</button>
      </div>
      <div className="content">
        {/*<PostList />*/}
        <ChannelList />
      </div>
    </UserContext.Provider>
  )
};




export default App;
