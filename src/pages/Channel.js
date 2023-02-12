import {
    Tabs, Tab, TabList, TabPanels, TabPanel,
    Flex, Button, useColorModeValue, Box, Link, Icon, Hide, Text, Spacer, CircularProgress, HStack
} from "@chakra-ui/react";
import { getChannel } from '../graphql/queries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from "react-router-dom";
import { MdOutlineArrowUpward, MdOutlineUpdate, MdOutlineTrendingUp } from "react-icons/md";
import PostCard from "../components/PostCard";

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
    }, []);

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
                bg: "gray.50",
            }}
            _dark={{
                bg: "gray.500",
            }}
        >
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
            <Flex mx="2%">
                <Hide below='md'>
                    <Box w='32%' />
                </Hide>
                <Box maxW="2xl"
                    minW="50%">
                    {channel.posts.items.map(post => (
                        <div key={post.id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </Box>
                <Box w='5%' />
                <Spacer />
                <Hide below='md'>
                    <Box p='4' bg='gray.100' maxW="25%">
                        <b>id: </b> {channel.id}<br />
                        <b>name: </b> {channel.name}<br />
                        <b>createdAt: </b> {channel.createdAt}<br />
                        <b>updatedAt: </b> {channel.updatedAt}<br />
                        <b>description: </b> {channel.description}<br />
                        <b>subscribers:</b> {channel.subscribers.items.map(subscriber => <li key={subscriber.userID}> {subscriber.userID} </li>)}<br />
                        <b>participants:</b> {channel.participants.items.map(participant => <li key={participant.userID}> {participant.userID} </li>)}<br />
                        <b>topics:</b> {channel.topics.map(topic => <li key={topic}> {topic} </li>)}<br />
                    </Box>
                </Hide>
            </Flex>
        </Box>
    );
}

export default Channel;
