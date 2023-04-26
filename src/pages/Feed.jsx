import { postsByDate } from '../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { CircularProgress, Flex, Box, Spacer, Text } from "@chakra-ui/react";
import PostCard from '../components/posts/PostCard';

function Feed(props) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {

    const obtainListPosts = async() => {
      if (props.subscriptions != null && props.subscriptions.length > 0 ) {
        try{
          setLoading(true);
  
          const filterSubscriptions = {or: []};
          props.subscriptions.forEach(subscription => {
              filterSubscriptions.or.push({channelPostsId: {eq: subscription.channelSubscribersId}});
          });
  
          const allPosts = await API.graphql({ query: postsByDate, variables: {
              typePostsByDate: "PostsByDate", 
              sortDirection: "DESC", 
              filter: filterSubscriptions
          }});
  
          setPosts(allPosts.data.postsByDate.items);
        } catch (error) {
          console.error("Error obtaining posts: ", error);
        }
  
      }
      setLoading(false);
      
    };
    
    obtainListPosts();
  }, [props.subscriptions]);

  if (loading) {
    return (
      <div className="centerLoading">
        <CircularProgress isIndeterminate size="20rem" />
      </div>
    )
  }


  return (
    <>
      <Flex justify="center" align="center" fontFamily="monospace">
        <Spacer />
        <Box px={3}>
        {posts.length !== 0 ?
            posts.map(post => (
            <div key={post.id}>
                <PostCard post={post} userID={props.userID} />
            </div>
            ))
        : 
            <Text fontSize="xl" textAlign="center" m="4rem" fontFamily="monospace">
                To see the posts of the channels you are subscribed to, you must subscribe to at least one channel.
            </Text>
        }
        </Box>
        <Spacer />
      </Flex> 
    </>
  );

}

export default Feed;
