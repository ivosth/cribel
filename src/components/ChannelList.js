import { listChannels } from '../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Box, Card, CardHeader, CardBody, Text, CircularProgress } from "@chakra-ui/react";
import ChannelCard from './ChannelCard';

function formatDate(awsDate){
  const dateobj = new Date(awsDate);
  const date = dateobj.toLocaleDateString(navigator.language);
  const time = dateobj.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

  return (date + ' ' + time);
}

function ChannelList() {
  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);
  

  const obtainListChannels = async() => {
    setLoading(true);
    const allChannels = await API.graphql({query: listChannels});
    setLoading(false);
    console.log(allChannels.data.listChannels.items)
    setChannels(allChannels.data.listChannels.items);
  };

  useEffect(() => {
    obtainListChannels();
  }, []);

  if (loading) {
    return (
      <div className="centerLoading">
        <CircularProgress isIndeterminate size="25rem" />
      </div>
    )
  }
  

  return (
      /*<>
        {channels.map(channel => (
          <div className="center" key={channel.id}>
            <Box p="1.5rem" minW="40%" maxW="sm">
              <Card boxShadow="lg" border="1px" borderColor="gray.200" >
                <CardHeader>
                  <Text pt="2" fontSize="lg">
                    <b>Channel ID:</b> {channel.id} <br/>
                    <b>Name/Title:</b> {channel.name} <b>&emsp;&emsp;Creator:</b> {channel.owner.email}
                  </Text>
                </CardHeader>

                <CardBody>
                    <Box>
                      <Text pt="2" fontSize="lg">
                        <b>description:</b> {channel.description} <br/>
                        <b>description formated:</b> <div className="htmlFormatted" dangerouslySetInnerHTML={{__html: channel.description}}></div>
                        <b>subscribers:</b> {channel.subscribers.items.map(subscriber => <li key={subscriber.user.id}> {subscriber.user.email} </li>)}
                        <b>participants:</b> {channel.participants.items.map(participant => <li key={participant.user.id}> {participant.user.email} </li>)}
                        <b>topics:</b> {channel.topics.map(topic => <li key={topic}> {topic} </li>)}
                        <b>createdAt:</b> {formatDate(channel.createdAt)} <b>&emsp;&emsp;updatedAt:</b> {formatDate(channel.updatedAt)}
                      </Text>
                    </Box>
                </CardBody>
              </Card>
            </Box>
          </div>
        ))}
      </>*/
      <>
      {channels.map(channel => (
        <div key={channel.id}>
          <ChannelCard channel={channel} />
        </div>
      ))}
    </>
  );
}

export default ChannelList;
