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
  
  
  const cardStyle = {
    width: '50rem',
    margin: '1rem',
  };

  return (
      <div>
      <Card sx={{...cardStyle, borderBottom: '0.01rem solid grey'}}>
        <Typography sx={{ fontSize: 26, margin: '0.5rem', fontWeight: 'bold' }}>Word of the Day</Typography>
        <Typography sx={{ margin: '-0.5rem -0.30rem 0.25rem 0.75rem' }}>Word of the Day</Typography>
      </Card>


      <Card sx={cardStyle}>
        <CardContent sx={{ margin: '-0.25rem -0.30rem -0.5rem 0.25rem' }}>
          <Typography component="div" variant="h5"> This is the Title </Typography>
          <Typography component="div" variant="subtitle1" color="text.secondary">
            This is the content
          </Typography>
        </CardContent>
      </Card>
    


      
    

    </div>
  );
}

export default ArticleList;
