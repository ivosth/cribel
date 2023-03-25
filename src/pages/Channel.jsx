import {
    Flex, useColorModeValue, Box, Link, Icon, Hide, Text, Spacer, CircularProgress, Button
} from "@chakra-ui/react";
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink, Outlet} from "react-router-dom";
import { MdOutlineArrowUpward, MdOutlineUpdate, MdOutlineTrendingUp, } from "react-icons/md";
import { RiChatFollowUpLine, RiChatDeleteLine } from "react-icons/ri";
import { createSubscriptionsSubscribers, deleteSubscriptionsSubscribers, createUserNotification } from "../graphql/mutations";

const NavLink = ({ icon, link, children }) => (
    <Link
        fontSize={{ base: '170%', sm: '170%', md: '170%', lg: '150%', xl: '140%' }}
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
                const subscriptionID = props.subscriptions.find(sub => sub.channelSubscribersId === id).id;
                await API.graphql({ query: deleteSubscriptionsSubscribers, variables: { input: { id: subscriptionID } } });
                newSubscriptions.items = newSubscriptions.items.filter(sub => sub.channelSubscribersId !== id);

            } else {
                const res = await API.graphql({ query: createSubscriptionsSubscribers, variables: { input: { channelSubscribersId: id, userSubscriptionsId: props.userID } } });
                const channelInfo = { name: channel.name, image: channel.image };
                newSubscriptions.items.push({ channel: channelInfo, id: res.data.createSubscriptionsSubscribers.id, userSubscriptionsId: props.userID, channelSubscribersId: id });
                
            }
            setSubscribed(!subscribed);
            props.updateChannelsNavbar({ subscriptions: newSubscriptions })

            await API.graphql({ 
                query: createUserNotification, 
                variables: { 
                  input: {
                    message: subscribed ? `You have unsubscribed from ${channel.name} channel` : `You have subscribed to ${channel.name} channel`,
                    type: subscribed ? "Unsubscribe" : "Subscribe", 
                    userNotificationsId: props.userID,
                    channelID: id,
                    channelName: channel.name,
                    typeUserNotificationsByDate: "UserNotificationsByDate"
                  } } });
        }
        catch(err) {
            console.error("Error subscribing to channel: ", err)
        }
    }


    useEffect(() => {
        const obtainChannel = async () => {
            try {
                setLoading(true);
                const channel = await API.graphql({ query: `query GetChannel($id: ID!) { getChannel(id: $id) { id name image topics } }`, variables: { id: id } });
                setLoading(false);
                //console.log(channel.data.getChannel)
                setChannel(channel.data.getChannel);
            }
            catch (err) {
                console.error("Error getting channel: ", err)
            }
        };
        function isSubscribed() {
            //console.log("props.subscriptions: ", props.subscriptions)
        if (props.subscriptions != null && props.subscriptions.length > 0)
            return props.subscriptions.some(sub => sub.channelSubscribersId === id)
        }

        obtainChannel();
        setSubscribed(isSubscribed());
        
        //eslint-disable-next-line react-hooks/exhaustive-deps
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
                <Button ml="0.5rem" size={["md", "md", "lg", "lg"]} onClick={handlSubscription}
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
