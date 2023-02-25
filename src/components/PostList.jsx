import { listPosts } from '../graphql/queries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { CircularProgress } from "@chakra-ui/react";
import PostCard from './PostCard';


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
        <CircularProgress isIndeterminate size="20rem" />
      </div>
    )
  }

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </>
  );

}

export default PostList;