import {
    Flex, Box, Hide, Spacer, CircularProgress, Show
} from "@chakra-ui/react";
import { postsByDate, postsByRating, getChannel } from '../../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import PostCard from "../posts/PostCard";
import ChannelInfo from "./ChannelInfo";



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

        const totalWeight = weightForHowNewThePostIs + weightForAverageRating;
        return { ...post, totalWeight };

    });

    const sortedPosts = postsWithWeight.sort((a, b) => (a.totalWeight > b.totalWeight) ? -1 : 1);
    return { ...posts, items: sortedPosts };

}



function ChannelPostsSorted(props) {

    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [channel, setChannel] = useState([]);


    useEffect(() => {
        const obtainPostsChannel = async () => {
            try {
                setLoading(true);
                let postsChannel;
                switch (props.sort) {
                    case "new":
                        postsChannel = await API.graphql({
                            query: postsByDate,
                            variables: { typePostsByDate: "PostsByDate", sortDirection: "DESC", filter: { channelPostsId: { eq: id } } }
                        });
                        setPosts(postsChannel.data.postsByDate);
                        break;
                    case "trending":
                        postsChannel = await API.graphql({
                            query: postsByDate,
                            variables: { typePostsByDate: "PostsByDate", sortDirection: "DESC", filter: { channelPostsId: { eq: id } } }
                        });
                        const trendingPosts = sortByTrendingPosts(postsChannel.data.postsByDate);
                        setPosts(trendingPosts);
                        break;
                    case "top":
                        postsChannel = await API.graphql({
                            query: postsByRating,
                            variables: { typePostsByRating: "PostsByRating", sortDirection: "DESC", filter: { channelPostsId: { eq: id } } }
                        });
                        setPosts(postsChannel.data.postsByRating);
                        break;
                    default:
                        postsChannel = await API.graphql({
                            query: postsByDate,
                            variables: { typePostsByDate: "PostsByDate", sortDirection: "DESC", filter: { channelPostsId: { eq: id } } }
                        });
                        setPosts(postsChannel.data.postsByDate);
                        break;
                }


                const channelInfo = await API.graphql({ query: getChannel, variables: { id: id } });
                setChannel(channelInfo.data.getChannel);

                setLoading(false);
            } catch (err) {
                console.error("Error obtaining posts and channel info: ", err);
            }
        };

        obtainPostsChannel();
    }, [id, props.sort]);

    if (loading) {
        return (
            <div className="centerLoading">
                <CircularProgress isIndeterminate size="25rem" />
            </div>
        )
    }

    return (
        <>
            {/****** POSTS CARDS AND INFO CHANNEL *************/}
            <Flex mx="2%">
                <Hide below='xl'> <Box w='100%' /> </Hide>
                <Show below='lg'> <Spacer /> </Show>

                <Box maxW="2xl" minW="50%">

                    {/****** INFO CHANNEL FOR SMALL SCREENS *************/}
                    <Box p='4' maxW="2xl" minW="50%" display={{ lg: 'none' }}>
                        <ChannelInfo channel={channel} posts={posts.items} />
                    </Box>

                    {/*************** POSTS CARDS  ***************/}
                    {posts.items.map(post => (
                        <div key={post.id}>
                            <PostCard post={post} userID={props.userID} />
                        </div>
                    ))}
                </Box>

                <Hide below='xl'> <Box w='5%' /> </Hide>
                <Spacer />

                {/****** INFO CHANNEL FOR BIGGER SCREENS *************/}
                <Hide below='lg'>
                    <Box p='4' w="30%" minW="25%">
                        <ChannelInfo channel={channel} posts={posts.items} />
                    </Box>
                </Hide >

            </Flex >
        </>
    );
}

export default ChannelPostsSorted;
