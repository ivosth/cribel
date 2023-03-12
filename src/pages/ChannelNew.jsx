import {
    Flex, Box, Hide, Spacer, CircularProgress, Show
} from "@chakra-ui/react";
import { postsByDate, getChannel } from '../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from "react-router-dom";
import PostCard from "../components/PostCard";
import ChannelInfo from "../components/ChannelInfo";


function ChannelNew(props) {

    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [channel, setChannel] = useState([]);


    useEffect(() => {
        const obtainPostsChannel = async () => {
            try {
                setLoading(true);

                const postsChannel = await API.graphql({ query: postsByDate, 
                    variables: { typePostsByDate: "PostsByDate", sortDirection: "DESC", filter: { channelPostsId: { eq: id } } } });
                const channelInfo  = await API.graphql({ query: getChannel, variables: { id: id } });
                setChannel(channelInfo.data.getChannel);
                setPosts(postsChannel.data.postsByDate);

                //console.log(channelInfo.data.getChannel)
                //console.log(postsChannel.data.postsByDate)
                
                setLoading(false);
            } catch (err) {
                console.log('error: ', err)
            }
        };

        const obtainChannel = async () => {
            setLoading(true);
            const channelInfo  = await API.graphql({ query: getChannel, variables: { id: id } });
            //console.log(channelInfo.data.getChannel)
            setChannel(channelInfo.data.getChannel);
            setLoading(false);
        };

        
        obtainPostsChannel();        
    }, [id]);

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

export default ChannelNew;
