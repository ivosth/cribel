import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator> 
      {({ signOut, user }) => ( 
        <div className="App"> 
          <h1>Hello world</h1> 
          <h2>{user.attributes.email}</h2>
          <button onClick={signOut}>Sign Out</button> 
          
        </div> 
      )} 

    </Authenticator>
  );
}

export default App;
