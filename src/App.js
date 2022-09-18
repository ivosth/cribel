import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { createContext, useState, useEffect, useRef } from "react";
import { API, Auth, Hub } from "aws-amplify";
import { Authenticator } from '@aws-amplify/ui-react';
import ArticleList from './components/ArticleList';
import { createUser } from "./graphql/mutations";

const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
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
          emailVerified: currentUser.attributes.email_verified
        }
        setUser(currentUser);
        setUserAttributes(currentUserAttributes);
  
      } catch (err) {
        setUser(null);
        setUserAttributes(null);
        console.log(err);    
      }    
    };
  
    const registerUser = async () => {
      try {
        const CreateUserInput = {
          ...userAttributesRef.current,
          emailVerified: true,
        };
        //setUserAttributes(userAttributes => ({ ...CreateUserInput}));
        //console.log("CreateUserInput: ", CreateUserInput);
        const newUser = await API.graphql({
          query: createUser,
          variables: {input: CreateUserInput},
          authMode: 'AWS_IAM'
        });
        console.log({ newUser });
        setUserAttributes(CreateUserInput);
      } catch (err) {
        console.error("Error registering new user: ", err);
      }
    };
  
    const onAuthEventListener = () => {
      Hub.listen('auth', (data) => {
        const authEvent = data.payload.event;
        const authData = data.payload.data;
  
        switch (authEvent) {
          case "signIn":
            //Adding console.log slows down the signIn a lot.
            //console.log("signed in");  
            obtainUser();
            break;
  
          case "signUp":
            const registerUserData = {
              id: authData.userSub,
              email: authData.user.username,
              emailVerified: authData.userConfirmed,
              rol: "estudiante"
            };
            //setUserAttributes(userAttributes => ({...userAttributes, ...registerUserData}));
            userAttributesRef.current = registerUserData;
            //console.log("userAttributes: ", userAttributesRef.current);
            break;
  
          case "signOut":
            //Adding console.log slows down the signOut a lot.
            //console.log("signed out");
            setUser(null);
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
  },[]);

  return !user ? (
    <Authenticator />
  ) : (
    <UserContext.Provider value={{ user, userAttributes }}>
      <div className="user">
        <h2>{userAttributes.email}</h2>
        <button onClick={onSignOutHandler}>Sign Out</button>
      </div>
      <div className="content">
        <ArticleList />
      </div>
    </UserContext.Provider>
  )
};




export default App;
