import { postsByDate, postsByRating } from '../../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { CircularProgress, Flex, Box, Spacer } from "@chakra-ui/react";
import PostCard from './PostCard';


function sortByTrendingPosts(posts) {
    // post is a object with the following structure:
    // {
    //    items: [
    //        {
    //            id: ID,
    //            avgRating: Float,
    //            name: String,....
    //        },
    //        ...
    //    ]
    // }
    // The items array is sorted by date in descending order
    // The array is gonna be sorted given a weight for how new the post is and the average rating it has
    // The weight for how new the post (according to the actual date) is is 0.5
    // The weight for the average rating is 0.5

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const today = new Date();
    const postsWithWeight = posts.items.map(post => {
        const postDate = new Date(post.createdAt);
        
        const diffDays = Math.round(Math.abs((today - postDate) / oneDay));
        const weightForHowNewThePostIs = 0.5 * (1 - (diffDays / 365)); // normalize the weight using (1 - (diffDays / 365))
        const weightForAverageRating = 0.5 * (post.avgRating / 5); // normalize the weight using (post.avgRating / 5) 
        //console.log({ weightForHowNewThePostIs, weightForAverageRating });
        
        const totalWeight = weightForHowNewThePostIs + weightForAverageRating;
        return { ...post, totalWeight };

    });

    const sortedPosts = postsWithWeight.sort((a, b) => (a.totalWeight > b.totalWeight) ? -1 : 1);
    return { ...posts, items: sortedPosts };

}


function PostList(props) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    const obtainListPosts = async() => {
      try {
        setLoading(true);
        let allPosts;
        switch (props.sort) {
          case "new":
            allPosts = await API.graphql({ query: postsByDate, 
                  variables: { typePostsByDate: "PostsByDate", sortDirection: "DESC" } });
              setPosts(allPosts.data.postsByDate);
          break;
          case "trending":
              allPosts = await API.graphql({ query: postsByDate, 
                  variables: { typePostsByDate: "PostsByDate", sortDirection: "DESC" } });
              const trendingPosts = sortByTrendingPosts(allPosts.data.postsByDate);
              setPosts(trendingPosts);
          break;
          case "top":
              allPosts = await API.graphql({ query: postsByRating, 
                  variables: { typePostsByRating: "PostsByRating", sortDirection: "DESC" } });
              setPosts(allPosts.data.postsByRating);
          break;
          default:
              allPosts = await API.graphql({ query: postsByDate,
                  variables: { typePostsByDate: "PostsByDate", sortDirection: "DESC" } });
              setPosts(allPosts.data.postsByDate);
          break;
        }
        setLoading(false);
      } catch (err) {
        console.error('Error obtaining list of posts sorted: ', err)
      }
    };
    
    obtainListPosts();
  }, [props.sort]);

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
        {posts.items.map(post => (
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
