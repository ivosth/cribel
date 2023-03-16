import {
  Box,
  Flex,
  Avatar,
  VStack,
  Button,
  Text,
  Hide,
  Spacer,
  Wrap
} from "@chakra-ui/react";
import { MdPeopleOutline, MdOutlinePersonAddAlt, MdStar} from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { RiChatDeleteLine, RiChatFollowUpLine} from "react-icons/ri";
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { createSubscriptionsSubscribers, deleteSubscriptionsSubscribers } from "../graphql/mutations";
import DOMPurify from 'dompurify';

function ChannelCard(props) {
  const navigate = useNavigate();
  const [subscribed, setSubscribed] = useState(null);


  async function handlSubscription() {
    try {
        let newSubscriptions = {};
        newSubscriptions.items = props.subscriptions;
        if (subscribed) {
            const subscriptionID = props.subscriptions.find(sub => sub.channelID === props.channel.id).id;
            await API.graphql({ query: deleteSubscriptionsSubscribers, variables: { input: { id: subscriptionID } } });
            newSubscriptions.items = newSubscriptions.items.filter(sub => sub.channelID !== props.channel.id);

        } else {
            const res = await API.graphql({ query: createSubscriptionsSubscribers, variables: { input: { channelID: props.channel.id, userID: props.userID } } });
            const channelInfo = { name: props.channel.name, image: props.channel.image };
            newSubscriptions.items.push({ channel: channelInfo, id: res.data.createSubscriptionsSubscribers.id, userID: props.userID, channelID: props.channel.id });
            
        }
        setSubscribed(!subscribed);
        props.updateChannelsNavbar({ subscriptions: newSubscriptions })
    }
    catch(err) {
        console.log(err);
    }
  }

  useEffect(() => {
    function isSubscribed() {
      //console.log("props.subscriptions: ", props.subscriptions)
      return props.subscriptions.some(sub => sub.channelID === props.channel.id)
    }
    
    setSubscribed(isSubscribed());
  }, [props.subscriptions, props.channel.id]);

  return (
    <Box
      width={{ base: '100%', sm: '100%', md: '70%', lg: '40%', xl: '40%' }}
      mx="auto"
      px={8}
      py={4}
      my="2rem"
      rounded="lg"
      shadow="lg"
      bg="white"
      _dark={{
        bg: "gray.800"
      }}
    >
      <Flex alignItems={'center'}>
        <VStack
          spacing="1px"
          ml="2"
          display={{ md: 'flex' }}
        >
          {/*<Text onClick={() => navigate(`/channel/${props.channel.id}/new`)} 
              as="b" fontSize={[16, 20, 20, 25]} align="center"> {props.channel.name} </Text>*/}
          <Button colorScheme='facebook' mb="0.3rem"
            onClick={() => navigate(`/channel/${props.channel.id}/new`)}
            fontSize={[13, 18, 18, 23]}
          >
            {props.channel.name}
          </Button>

          <Flex>
            <Hide below="sm">
              <Avatar size={'sm'} bg="teal.500" mr="0.5rem" src={props.channel.owner.image} />
            </Hide>
            <RouterLink to={`/profile/${props.channel.owner.id}`}>
              <Text mt="0.25rem" fontSize={[10, 18, 18, 18]}> {`${props.channel.owner.givenName} ${props.channel.owner.familyName}` || "Nombre Apellido"} </Text>
            </RouterLink>
          </Flex>
        </VStack>
        <Spacer />
        <Button onClick={handlSubscription} size={["md", "md", "md", "md"]}
            leftIcon={subscribed ? <RiChatDeleteLine size="2rem"/> : <RiChatFollowUpLine size="2rem"/>}
        >
            <Text display={{ base: 'none', lg: 'block' }}> {subscribed ? "Unsubscribe" : "Subscribe"}</Text>
        </Button>
      </Flex>
      <Flex alignItems="center" fontSize={["0.85rem", "0.9rem", "1rem", "1rem"]}>
        <Spacer />
        <MdPeopleOutline size="1.5rem" />
        <Text ml="0.3rem" mr="1.1rem"> {props.channel.subscribers.items.length} </Text>

        <MdOutlinePersonAddAlt size="1.5rem" />
        <Text ml="0.3rem" mr="1.1rem"> {props.channel.participants.items.length} </Text>

        <MdStar color="#fae20a" size="1.5rem" />
        <Text ml="0.1rem" mr="1.1rem"> {props.channel.avgRating} </Text>

      </Flex>
      <Prose my="0.6rem" >
          <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.channel.description)}}></div>
      </Prose>
      <Flex alignItems="center">
        <Spacer />
          <Wrap>
          {props.channel.topics.map(topic =>
            <Box
              key={topic}
              px="0.50rem"
              py={1}
              marginRight="0.5rem"
              bg="gray.600"
              color="gray.100"
              //fontSize="0.8rem" //Más pequeño con xs
              fontWeight="700"
              textAlign={"center"}
              rounded="md"
            >
              <Text fontSize={[10, 11, 13, 13]}> {topic} </Text>
            </Box>
          )}
        </Wrap>
      </Flex>
    </Box>
  );
}

export default ChannelCard;
