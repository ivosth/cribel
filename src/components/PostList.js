import { listPosts } from '../graphql/queries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress} from "@mui/material";

function formatDate(awsDate){
  const dateobj = new Date(awsDate);
  const date = dateobj.toLocaleDateString(navigator.language);
  const time = dateobj.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

  return (date + ' ' + time);
}

function PostList() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  

  const obtainListPosts = async() => {
    setLoading(true);
    const allPosts = await API.graphql({ query: listPosts });
    setLoading(false);
    console.log(allPosts.data.listPosts.items)
    setPosts(allPosts.data.listPosts.items);
  };

  useEffect(() => {
    obtainListPosts();
  }, []);

  if (loading) {
    return (
      <div className="centerLoading">
        <CircularProgress size="25rem" />
      </div>
    )
  }
  

  return (
      <div>
        {posts.map(post => (
          <div className="center" key={post.id}>

            <Card sx={{ boxShadow: 3, width: '50rem', margin: '1rem'}}>
              <CardContent sx={{ margin: '-0.25rem -0.30rem -0.5rem 0.25rem' }}>
                <Typography component="div" variant="h5"> 
                  <b>Post ID:</b> {post.id} <br/>
                  <b>Name/Title:</b> {post.name} <b>Author:</b> {post.owner.email}
                </Typography>
                <Typography component="div" variant="subtitle1" color="text.secondary">
                  <b>content normal:</b> {post.content} <br/>
                  <b>content formated:</b> <div className="htmlFormatted" dangerouslySetInnerHTML={{__html: post.content}}></div>
                  {/*<b>topics:</b> {post.topics.map(topic => <li key={topic}> {topic} </li>)}*/}
                  <b>channel:</b> {post.channel.name} <br/>
                  <b>createdAt:</b> {formatDate(post.createdAt)} <b>updatedAt:</b> {formatDate(post.updatedAt)}
                </Typography>
              </CardContent>
            </Card>

          </div>
        ))
      }
      </div>
  );
}

export default PostList;
