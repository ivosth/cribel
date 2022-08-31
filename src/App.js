import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <Authenticator> 
      {({ signOut, user }) => (
        <> 
        <div className="user"> 
          <h2>{user.attributes.email}</h2>
          <button onClick={signOut}>Sign Out</button> 
        </div> 
        <div className="content">
          <ArticleList/>
        </div> 
        </>
      )} 
    
    </Authenticator>
  );
}




export default App;
