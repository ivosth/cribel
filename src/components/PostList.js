import { listPosts } from '../graphql/queries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Box, Card, CardHeader, CardBody, Text, CircularProgress } from "@chakra-ui/react";


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
        <CircularProgress isIndeterminate size="25rem" />
      </div>
    )
  }
  

  return (
      <>
        {posts.map(post => (
          <div className="center" key={post.id}>
            <Box p={6}>
              <Card boxShadow="lg" border="1px" borderColor="gray.200" maxW='3xl' minW='3xl'>
                <CardHeader>
                  <Text pt="2" fontSize="lg">
                    <b>Post ID:</b> {post.id} <br/>
                    <b>Name/Title:</b> {post.name} <b>&emsp;&emsp;Author:</b> {post.owner.email}
                  </Text>
                </CardHeader>

                <CardBody>
                    <Box>
                      <Text pt="2" fontSize="lg">
                      <b>content normal:</b> {post.content} <br/>
                      <b>content formated:</b> <div className="htmlFormatted" dangerouslySetInnerHTML={{__html: post.content}}></div>
                      {/*<b>topics:</b> {post.topics.map(topic => <li key={topic}> {topic} </li>)}*/}
                      <b>channel:</b> {post.channel.name} <br/>
                      <b>createdAt:</b> {formatDate(post.createdAt)} <b>updatedAt:</b> {formatDate(post.updatedAt)}
                      </Text>
                    </Box>
                </CardBody>
              </Card>
            </Box>
          </div>
        ))}
      </>
  );
}

export default PostList;
