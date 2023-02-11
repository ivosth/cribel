import {
    Tabs, Tab, TabList, TabPanels, TabPanel,
    Flex, Button, useColorModeValue, Box, Link, Icon, Hide, Text, Spacer, CircularProgress
} from "@chakra-ui/react";
import { getChannel } from '../graphql/queries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from "react-router-dom";
import { MdOutlineArrowUpward, MdOutlineUpdate, MdOutlineTrendingUp } from "react-icons/md";


const NavLink = ({ icon, link, children }) => (
    <Link
        fontSize={{ base: '220%', sm: '220%', md: '200%', lg: '150%', xl: '140%'}}
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
    
  
    const obtainChannel = async() => {
      setLoading(true);
      const channel = await API.graphql({query: getChannel, variables: {id: id}});
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

        <div style={{marginLeft: '8rem'}}>
            <b>id: </b> {channel.id}<br/>
            <b>name: </b> {channel.name}<br/>
            <b>createdAt: </b> {channel.createdAt}<br/>
            <b>updatedAt: </b> {channel.updatedAt}<br/>
            <b>description: </b> {channel.description}<br/>
            <b>subscribers:</b> {channel.subscribers.items.map(subscriber => <li key={subscriber.userID}> {subscriber.userID} </li>)}<br/>
            <b>participants:</b> {channel.participants.items.map(participant => <li key={participant.userID}> {participant.userID} </li>)}<br/>
            <b>topics:</b> {channel.topics.map(topic => <li key={topic}> {topic} </li>)}<br/>
        </div>
    );
}

export default Channel;
