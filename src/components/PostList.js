import { listPosts } from '../graphql/queries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { CircularProgress } from "@chakra-ui/react";
import CardPost from './CardPost';


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
  
/*
  return (
      <>
        {posts.map(post => (
          <div className="center" key={post.id}>
            <Box p="1.5rem" minW="40%" maxW="sm">
              <Card boxShadow="lg" border="1px" borderColor="gray.200">
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
*/

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <CardPost post={post} />
        </div>
      ))}
    </>
  );

}

export default PostList;
