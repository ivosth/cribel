import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { channelNotificationsByDate, userNotificationsByDate } from "../../graphql/customQueries";
import { useNavigate } from "react-router-dom";
import { API } from "aws-amplify";
import { useEffect } from "react";
import { VscBell, VscBellDot } from 'react-icons/vsc';


function NotificationsButton(props) {
    const navigate = useNavigate();

    useEffect(() => {
        async function newNotifications(allUserNotifications, allChannelNotifications) {
            let lastDate = props.userCreatedAt;

            if (allUserNotifications.items.length > 0) {
                lastDate = allUserNotifications.items[0].createdAt;
            }

            if (allChannelNotifications.items.length > 0) {
                for (let i = 0; i < allChannelNotifications.items.length; i++) {
                    if (allChannelNotifications.items[i].createdAt > lastDate) {
                        props.updateIconNotifications(true);
                        break;
                    }
                }
            }
        }

        const obtainNotifications = async () => {
            try {
                if (props.subscriptions !== null && props.subscriptions?.length !== 0) {

                    const allUserNotifications = await API.graphql({
                        query: userNotificationsByDate,
                        variables: {
                            typeUserNotificationsByDate: "UserNotificationsByDate", sortDirection: "DESC", limit: 25,
                            filter: { userNotificationsId: { eq: props.userID } }
                        }
                    });

                    // list of channels id that the user is subscribed to
                    const filterSubscriptions = { or: [] };
                    props.subscriptions.forEach(subscription => {
                        filterSubscriptions.or.push({ channelNotificationsId: { eq: subscription.channelSubscribersId } });
                    });

                    // filter channel notifications by channels subscribed
                    const allChannelNotifications = await API.graphql({
                        query: channelNotificationsByDate,
                        variables: { typeChannelNotificationsByDate: "ChannelNotificationsByDate", sortDirection: "DESC", limit: 200, filter: filterSubscriptions }
                    });


                    newNotifications(allUserNotifications.data.userNotificationsByDate, allChannelNotifications.data.channelNotificationsByDate);
                }
            } catch (error) {
                console.error("Error obtaining notifications: ", error);
            }

        };

        obtainNotifications();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.userID, props.subscriptions, props.userCreatedAt]);

    return (
        <>
            <IconButton
                size="lg"
                variant="ghost"
                color={useColorModeValue("gray.600", "gray.200")}
                aria-label="open menu"
                icon={props.notifications ? <VscBellDot /> : <VscBell />}
                onClick={() => navigate("/notifications")}
            />
        </>
    );
}

export default NotificationsButton;
