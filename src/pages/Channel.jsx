import {
    Flex, useColorModeValue, Box, Link, Icon, Hide, Text, Spacer, CircularProgress, Show, Button
} from "@chakra-ui/react";
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, Outlet} from "react-router-dom";
import { MdOutlineArrowUpward, MdOutlineUpdate, MdOutlineTrendingUp, } from "react-icons/md";
import { RiChatFollowUpLine, RiChatDeleteLine } from "react-icons/ri";
import { createSubscriptionsSubscribers, deleteSubscriptionsSubscribers } from "../graphql/mutations";

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

function Channel(props) {

    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [channel, setChannel] = useState([]);
    const [subscribed, setSubscribed] = useState(null);

    async function handlSubscription() {
        try {
            let newSubscriptions = {};
            newSubscriptions.items = props.subscriptions;
            if (subscribed) {
                const subscriptionID = props.subscriptions.find(sub => sub.channelID === id).id;
                await API.graphql({ query: deleteSubscriptionsSubscribers, variables: { input: { id: subscriptionID } } });
                newSubscriptions.items = newSubscriptions.items.filter(sub => sub.channelID !== id);

            } else {
                const res = await API.graphql({ query: createSubscriptionsSubscribers, variables: { input: { channelID: id, userID: props.userID } } });
                const channelInfo = { name: channel.name, image: channel.image };
                newSubscriptions.items.push({ channel: channelInfo, id: res.data.createSubscriptionsSubscribers.id, userID: props.userID, channelID: id });
                
            }
            setSubscribed(!subscribed);
            props.updateChannelsNavbar({ subscriptions: newSubscriptions })
        }
        catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        const obtainChannel = async () => {
            setLoading(true);
            const channel = await API.graphql({ query: `query GetChannel($id: ID!) { getChannel(id: $id) { id name image topics } }`, variables: { id: id } });
            setLoading(false);
            //console.log(channel.data.getChannel)
            setChannel(channel.data.getChannel);
        };
        function isSubscribed() {
            //console.log("props.subscriptions: ", props.subscriptions)
            return props.subscriptions.some(sub => sub.channelID === id)
        }

        obtainChannel();
        setSubscribed(isSubscribed());
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
            justifyContent="center"
        >
            {/****** HEADER WITH FILTERS *************/}
            <Flex alignItems={"center"} justifyContent={"center"} mx="2%">
                <Spacer />
                <Box w="10%" display={{ base: 'none', lg: 'block' }}/>
                <Box>
                    <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb="1rem">
                        {channel.name}
                    </Text>
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <Spacer />
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <NavLink icon={MdOutlineUpdate} link={"new"}>{"new"}</NavLink>
                            <NavLink icon={MdOutlineTrendingUp} link={"trending"}>{"trending"}</NavLink>
                            <NavLink icon={MdOutlineArrowUpward} link={"top"}>{"top"}</NavLink>
                        </Flex>
                        <Spacer />
                    </Flex>
                </Box>
                <Box w="3%" display={{ base: 'none', lg: 'block' }}/>
                <Button size="lg" onClick={handlSubscription}
                    leftIcon={subscribed ? <RiChatDeleteLine size="2rem"/> : <RiChatFollowUpLine size="2rem"/>}
                >
                    <Text display={{ base: 'none', lg: 'block' }}> {subscribed ? "Unsubscribe" : "Subscribe"}</Text>
                </Button>
                <Spacer />
            </Flex>

            <Outlet />
        </Box >
    );
}

export default Channel;
