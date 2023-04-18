import {
    Flex, Box, Text, Badge, Wrap, Spacer, Center, Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


function formatDate(awsDate) {
    const dateobj = new Date(awsDate);
    const date = dateobj.toLocaleDateString(navigator.language);
    const time = dateobj.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

    return (date + ' ' + time);
}


function NotificationCard(props) {

    const navigate = useNavigate();
    const colors = {
        "New Post": "green",
        "Subscribe": "orange",
        "Unsubscribe": "red"
    }

    return (

        <Box
            mx="auto"
            px={8}
            py={4}
            rounded="lg"
            shadow="lg"
            bg="white"
            maxW="2xl"
            minW="100%" //Check here if you want to make the card bigger on large screens
            _dark={{
                bg: "gray.800"
            }}
            m="1rem"
        >
            <Box mb="0.5rem">
                <Flex alignItems="center">
                    <Link
                        px="0.50rem"
                        py={1}
                        onClick={() => navigate(`/channel/${props.notification.channelID}/new`)}
                        bg="blue.600"
                        color="blue.100"
                        fontSize="0.90rem" //Smaller with xs
                        fontWeight="700"
                        textAlign={"center"}
                        rounded="md"
                        _hover={{
                            bg: "blue.500"
                        }}
                    >
                        {props.notification.channelName}
                    </Link>
                    <Text ml="0.5rem" fontSize="sm" color="gray.500">
                        {formatDate(props.notification.createdAt)}
                    </Text>

                    <Spacer />
                    <Badge colorScheme={colors[props.notification.type]} fontSize='1rem' >{props.notification.type}</Badge>
                </Flex>

            </Box>
            <Wrap>
                <Center>
                    <Text mt="0.25rem" fontSize="md" mx="1rem">
                        {props.notification.message}
                    </Text>
                </Center>
            </Wrap>

        </Box>
    );
}

export default NotificationCard;
