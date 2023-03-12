import { listPosts } from '../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { CircularProgress, Flex, Box, Spacer } from "@chakra-ui/react";
import PostCard from './PostCard';


function PostList(props) {
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
        <CircularProgress isIndeterminate size="20rem" />
      </div>
    )
  }

  return (
    <>
      <Flex justify="center" align="center" >
        <Spacer />
        <Box>
        {posts.map(post => (
          <div key={post.id}>
            <PostCard post={post} userID={props.userID} />
          </div>
        ))}
        </Box>
        <Spacer />
      </Flex> 
    </>
  );

}

export default PostList;
