import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';

function App() {
  return (
    <Authenticator> 
      {({ signOut, user }) => ( 
        <div className="App"> 
          <h1>Hello world</h1> 
          <h2>{user.attributes.email}</h2>

          {/*api()*/}

          <button onClick={signOut}>Sign Out</button> 

        </div> 
      )} 

    </Authenticator>
  );
}

async function api() {
  const allArticles = await API.graphql({ query: queries.listArticles });
  console.log(allArticles);
}

export default App;
