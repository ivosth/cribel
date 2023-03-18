import {
    Flex, Box, CircularProgress, Text, Badge, Wrap, Spacer, Center, Link
} from "@chakra-ui/react";
import { channelNotificationsByDate, userNotificationsByDate } from "../graphql/queries";
import { createUserNotification } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";


function formatDate(awsDate) {
    const dateobj = new Date(awsDate);
    const date = dateobj.toLocaleDateString(navigator.language);
    const time = dateobj.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
  
    return (date + ' ' + time);
  }
  

function Notifications(props) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [userNotifications, setUserNotifications] = useState([]);

    useEffect(() => {

        async function newNotifications(allUserNotifications, allChannelNotifications) {
            // loop throught channelNotifications and check if the date is greater than lastDate
            // if it is, then add it to the list of new notifications
            // if not, then break the loop
            let newNotifications = [];
            // lastDate is the date of the last notification the user has seen minus 30 minutes
            let lastDate = props.userCreatedAt;
            
            //console.log(lastDate)
            //console.log("allUserNotifications", allUserNotifications)
            //console.log("allChannelNotifications", allChannelNotifications)

            if (allUserNotifications.items.length > 0) {
                //console.log("lastDate", allUserNotifications.items[0].createdAt)
                lastDate = allUserNotifications.items[0].createdAt;
            }

            if (allChannelNotifications.items.length > 0) {
                for (let i = 0; i < allChannelNotifications.items.length; i++) {
                    if (allChannelNotifications.items[i].createdAt > lastDate) {                        
                        const res = await API.graphql({
                            query: createUserNotification,
                            variables: {
                                input: {
                                    message: allChannelNotifications.items[i].message,
                                    type: allChannelNotifications.items[i].type,
                                    userNotificationsId: props.userID,
                                    channel: allChannelNotifications.items[i].id,
                                    typeUserNotificationsByDate: "UserNotificationsByDate",
                                    viewed: false
                                }
                            }
                        });
                        // push new notification to the list of new notifications adding channel= allChannelNotifications.items[i].id,
                        newNotifications.push(res.data.createUserNotification);

                    } else {
                        break;
                    }
                }
            }


            setUserNotifications(newNotifications);
            if (newNotifications.length > 0) {
                props.updateIconNotifications(true);
            }
            console.log("newNotifications", newNotifications)
        }

        const obtainNotifications = async () => {
            try {
                if (props.subscriptions.length !== 0) {
                    
                    const allUserNotifications = await API.graphql({
                        query: userNotificationsByDate,
                        variables: {
                            typeUserNotificationsByDate: "UserNotificationsByDate", sortDirection: "DESC", limit: 25,
                            filter: { userNotificationsId: { eq: props.userID } }
                        }
                    });
                    //console.log("allUserNotifications", allUserNotifications.data.userNotificationsByDate)

                    // list of channels id that the user is subscribed to
                    const filterSubscriptions = { or: [] };
                    props.subscriptions.forEach(subscription => {
                        filterSubscriptions.or.push({ channelNotificationsId: { eq: subscription.channelID } });
                    });

                    //console.log("filterSubscriptions", filterSubscriptions)
                    console.log("props.subscriptions", props.subscriptions)

                    // filter channel notifications by channels subscribed
                    const allChannelNotifications = await API.graphql({
                        query: channelNotificationsByDate,
                        variables: { typeChannelNotificationsByDate: "ChannelNotificationsByDate", sortDirection: "DESC", limit: 200, filter: filterSubscriptions }
                    });


                    newNotifications(allUserNotifications.data.userNotificationsByDate, allChannelNotifications.data.channelNotificationsByDate);
                    //console.log("channelNotifications", channelNotifications.data.channelNotificationsByDate)


                }
            } catch (error) {
                console.error("Error obtaining notifications: ", error);
            }
            
        };

        setLoading(true);
        obtainNotifications();
        setLoading(false);

    }, [props.userID, props.subscriptions, props.userCreatedAt]);

    if (loading) {
        return (
            <div className="centerLoading">
                <CircularProgress isIndeterminate size="25rem" />
            </div>
        )
    }

    return (
        <Center>
            <Box minw="2xl" maxW="4xl" m="2rem">
                <Flex direction="column" align="center">
                    <Text fontSize="3xl" fontWeight="bold" mb="1rem">Notifications</Text>
                    {userNotifications.length === 0 ?
                        <Text>There are no new notifications</Text> :

                        userNotifications.map(notification => {
                            return (
                                <Box
                                    mx="auto"
                                    px={8}
                                    py={4}
                                    rounded="lg"
                                    shadow="lg"
                                    bg="white"
                                    maxW="2xl"
                                    minW="100%" //Tocar aquí si se quiere hacer la tarjeta más grande en pantallas grandes
                                    _dark={{
                                        bg: "gray.800"
                                    }}
                                    key={notification.id}
                                    m="0.5rem"
                                >
                                    <Box mb="0.5rem">
                                        <Flex alignItems="center">
                                        <Link
                                            px="0.50rem"
                                            py={1}
                                            onClick={() => navigate(`/channel/Channel/new`)}
                                            bg="blue.600"
                                            color="blue.100"
                                            fontSize="0.90rem" //Más pequeño con xs
                                            fontWeight="700"
                                            textAlign={"center"}
                                            rounded="md"
                                            _hover={{
                                                bg: "blue.500"
                                            }}
                                        >
                                            Channel
                                        </Link>
                                        <Text ml="0.5rem" fontSize="sm" color="gray.500">
                                            {formatDate(notification.createdAt)}
                                        </Text>

                                        <Spacer />
                                        <Badge colorScheme='green' fontSize='1rem'>{notification.type}</Badge>
                                        </Flex>

                                    </Box>
                                    <Wrap>
                                        <Center>
                                            <Text mt="0.25rem" fontSize="md" mx="1rem">
                                                {notification.message}
                                            </Text>
                                        </Center>



                                    </Wrap>



                                </Box>
                            )
                        })
                    }
                </Flex>


            </Box>
        </Center>
    );
}

export default Notifications;
