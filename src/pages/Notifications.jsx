import {
    Flex, Box, CircularProgress, Text, Center,
    Tabs, Tab, TabList, TabPanels, TabPanel,
} from "@chakra-ui/react";
import { channelNotificationsByDate, userNotificationsByDate } from "../graphql/customQueries";
import { createUserNotification } from "../graphql/mutations";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import NotificationCard from "../components/notifications/NotificationCard";



function Notifications(props) {

    const [loading, setLoading] = useState(true);
    const [userNotificationsNew, setUserNotificationsNew] = useState([]);
    const [userNotificationsOld, setUserNotificationsOld] = useState([]);

    useEffect(() => {

        async function newNotifications(allUserNotifications, allChannelNotifications) {
            let newNotifications = [];
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
                                    channelID: allChannelNotifications.items[i].channelNotificationsId,
                                    channelName: allChannelNotifications.items[i].channel.name,
                                    typeUserNotificationsByDate: "UserNotificationsByDate"
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


            setUserNotificationsNew(newNotifications);
            props.updateIconNotifications(false);
            //console.log("newNotifications", newNotifications)
        }

        const obtainNotifications = async () => {
            try {

                if (props.subscriptions !== null && props.subscriptions?.length !== 0) {
                    setLoading(true);
                    const allUserNotifications = await API.graphql({
                        query: userNotificationsByDate,
                        variables: {
                            typeUserNotificationsByDate: "UserNotificationsByDate", sortDirection: "DESC", limit: 25,
                            filter: { userNotificationsId: { eq: props.userID } }
                        }
                    });
                    //console.log("allUserNotifications", allUserNotifications.data.userNotificationsByDate)
                    setUserNotificationsOld(allUserNotifications.data.userNotificationsByDate.items);

                    // list of channels id that the user is subscribed to
                    const filterSubscriptions = { or: [] };
                    props.subscriptions.forEach(subscription => {
                        filterSubscriptions.or.push({ channelNotificationsId: { eq: subscription.channelSubscribersId } });
                    });

                    //console.log("filterSubscriptions", filterSubscriptions)
                    //console.log("props.subscriptions", props.subscriptions)

                    // filter channel notifications by channels subscribed
                    const allChannelNotifications = await API.graphql({
                        query: channelNotificationsByDate,
                        variables: { typeChannelNotificationsByDate: "ChannelNotificationsByDate", sortDirection: "DESC", limit: 200, filter: filterSubscriptions }
                    });


                    //console.log("channelNotifications", allChannelNotifications.data.channelNotificationsByDate)

                    await newNotifications(allUserNotifications.data.userNotificationsByDate, allChannelNotifications.data.channelNotificationsByDate);



                }
            } catch (error) {
                console.error("Error obtaining notifications: ", error);
            }
            setLoading(false);
        };


        obtainNotifications();

        // eslint-disable-next-line react-hooks/exhaustive-deps
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

                    <Tabs variant='solid-rounded' colorScheme='blue' align="center">
                        <TabList>
                            <Tab> New</Tab>
                            <Tab> Old </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                {userNotificationsNew.length === 0 ?
                                    <Text>There are no new notifications</Text> :
                                    userNotificationsNew.map(notification => {
                                        return (
                                            <Center key={notification.id}>
                                                <NotificationCard notification={notification} />
                                            </Center>
                                        )
                                    })
                                }
                            </TabPanel>
                            <TabPanel>
                                {userNotificationsOld === null || userNotificationsOld.length === 0 ?
                                    <Text>There are no old notifications</Text> :
                                    userNotificationsOld.map(notification => {
                                        return (
                                            <Center key={notification.id}>
                                                <NotificationCard notification={notification} />
                                            </Center>
                                        )
                                    })
                                }
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </Flex>


            </Box>
        </Center>
    );
}

export default Notifications;
