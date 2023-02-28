import {
    Flex, useColorModeValue, Box, Link, Icon, Hide, Text, Spacer, CircularProgress, Show
} from "@chakra-ui/react";
import { getChannel } from '../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from "react-router-dom";
import { MdOutlineArrowUpward, MdOutlineUpdate, MdOutlineTrendingUp, } from "react-icons/md";
import PostCard from "../components/PostCard";
import ChannelInfo from "../components/ChannelInfo";



const NavLink = ({ icon, link, children }) => (
    <Link
        fontSize={{ base: '220%', sm: '220%', md: '200%', lg: '150%', xl: '140%' }}
        as={RouterLink}
        to={link}
        px={2}
        py={1}
        rounded={"md"}
        mx="1rem"
        //color= {useColorModeValue("blue.900", "blue.100")}
        bgColor={useColorModeValue("blue.50", "blue.500")}
        _hover={{
            bg: useColorModeValue("blue.100", "blue.600"),
        }}

    >
        <Flex align="center" >
            <Icon as={icon} />
            <Hide below='md'>
                <Text marginLeft="0.5rem">
                    {children.charAt(0).toUpperCase() + children.slice(1)}
                </Text>
            </Hide>
        </Flex>
    </Link>
);

function Channel() {

    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [channel, setChannel] = useState([]);


    const obtainChannel = async () => {
        setLoading(true);
        const channel = await API.graphql({ query: getChannel, variables: { id: id } });
        setLoading(false);
        console.log(channel.data.getChannel)
        setChannel(channel.data.getChannel);
    };

    useEffect(() => {
        obtainChannel();
    }, [id]);

    if (loading) {
        return (
            <div className="centerLoading">
                <CircularProgress isIndeterminate size="25rem" />
            </div>
        )
    }

    return (
        <Box
            py="2rem"
            fontFamily="monospace"
            borderWidth="1px"
            boxShadow="md"
            justifyContent="center"
            _light={{
                bg: "gray.100",
            }}
            _dark={{
                bg: "gray.600",
            }}
        >
            {/****** HEADER WITH FILTERS *************/}
            <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb="1rem">
                {channel.name}
            </Text>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Spacer />
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <NavLink icon={MdOutlineUpdate} link={"posts"}>{"new"}</NavLink>
                    <NavLink icon={MdOutlineTrendingUp} link={"posts"}>{"trending"}</NavLink>
                    <NavLink icon={MdOutlineArrowUpward} link={"posts"}>{"top"}</NavLink>
                </Flex>
                <Spacer />
            </Flex>

            {/****** POSTS CARDS AND INFO CHANNEL *************/}
            <Flex mx="2%">
                <Hide below='xl'> <Box w='100%' /> </Hide>
                <Show below='lg'> <Spacer /> </Show>

                <Box maxW="2xl" minW="50%">

                    {/****** INFO CHANNEL FOR SMALL SCREENS *************/}
                    <Box p='4' maxW="2xl" minW="50%" display={{ lg: 'none' }}>
                        <ChannelInfo channel={channel} />
                    </Box>

                    {/*************** POSTS CARDS  ***************/}
                    {channel.posts.items.map(post => (
                        <div key={post.id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </Box>

                <Hide below='xl'> <Box w='5%' /> </Hide>
                <Spacer />

                {/****** INFO CHANNEL FOR BIGGER SCREENS *************/}
                <Hide below='lg'>
                    <Box p='4' w="30%" minW="25%">
                        <ChannelInfo channel={channel} />
                    </Box>
                </Hide >

            </Flex >
        </Box >
    );
}

export default Channel;
