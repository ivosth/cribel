import { listArticles } from '../graphql/queries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function ArticleList() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  

  const getArticles = async() => {
    setLoading(true);
    const allArticles = await API.graphql({ query: listArticles });
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
          <div className="center" key={article.id}>

            <Card sx={{ width: '50rem', margin: '1rem'}}>
              <CardContent sx={{ margin: '-0.25rem -0.30rem -0.5rem 0.25rem' }}>
                <Typography component="div" variant="h5"> 
                  Article ID: {article.id} <br/>
                  Name/Title: {article.name} Author: {article.author}
                </Typography>
                <Typography component="div" variant="subtitle1" color="text.secondary">
                  <b>hmtl normal:</b> {article.html} <br/>
                  <b>hmtl formated:</b> <div className="content" dangerouslySetInnerHTML={{__html: article.html}}></div>
                  <b>topics:</b> {article.topics.map(topic => <li key={topic}> {topic} </li>)}
                  <b>createdAt:</b> {article.createdAt} <b>updatedAt:</b> {article.updatedAt}
                </Typography>
              </CardContent>
            </Card>

          </div>
        ))
      }
      </div>
  );
}

export default ArticleList;
