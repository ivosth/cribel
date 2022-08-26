import React from "react";
import * as queries from '../graphql/queries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';


function ArticleList() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const getArticles = async() => {
    setLoading(true);
    const allArticles = await API.graphql({ query: queries.listArticles });
    setLoading(false);
    console.log(allArticles.data.listArticles.items)
    setArticles(allArticles.data.listArticles.items);
  };

  useEffect(() => {
    getArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      {articles.map(article => (
          <div key={article.id}>
          <h1>Article: {article.id} </h1>
          <b>author: </b> {article.author} <br/>
          <b>createdAt: </b> {article.createdAt} <br/>
          <b>hmtl normal: </b> {article.html} <br/>
          <b>hmtl formated: </b> <div className="content" dangerouslySetInnerHTML={{__html: article.html}}></div> <br/>
          <b>name: </b> {article.name} <br/>
          <b>topics: </b> 
          {article.topics.map(topic => <li>{topic}</li>)}  
          <b>updatedAt: </b> {article.updatedAt} <br/> <br/>
          </div>
        ))
      }
    </div>
  );
}

export default ArticleList;
