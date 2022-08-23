import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import { useState, useEffect } from 'react';

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
    {RenderArticle()}
    </Authenticator>
  );
}

function RenderArticle() {
  const [article, setArticle] = useState({});
  const [html, setHtml] = useState('');
  useEffect(() => {
    // React advises to declare the async function directly inside useEffect
    async function api() {
      const allArticles = await API.graphql({ query: queries.listArticles });
      console.log(allArticles.data.listArticles.items[0]);
      setArticle(allArticles.data.listArticles.items[0]);
      setHtml(allArticles.data.listArticles.items[0].html)
    }

    api();
  }, []);
  
  return (
    <div className="App">
      <b>author: </b> {article.author} <br></br>
      <b>createdAt: </b> {article.createdAt} <br></br>
      <b>hmtl normal: </b> {article.html} <br></br>
      <b>hmtl formated: </b> <div className="content" dangerouslySetInnerHTML={{__html: html}}></div> <br></br>
      <b>id: </b> {article.id} <br></br>
      <b>name: </b> {article.name} <br></br>
      <b>topics: </b> {article.topics} <br></br>
      <b>updatedAt: </b> {article.updatedAt}
    </div>
  );
}



export default App;
