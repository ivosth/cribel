import { listChannels } from '../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CircularProgress} from "@mui/material";




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
        <CircularProgress size="25rem" />
      </div>
    )
  }
  

  return (
      <div>
        {channels.map(channel => (
          <div className="center" key={channel.id}>

            <Card sx={{ boxShadow: 3, width: '50rem', margin: '1rem'}}>
              <CardContent sx={{ margin: '-0.25rem -0.30rem -0.5rem 0.25rem' }}>
                <Typography component="div" variant="h5"> 
                  <b>Channel ID:</b> {channel.id} <br/>
                  <b>Name/Title:</b> {channel.name} <b>Creator:</b> {channel.owner.email}
                </Typography>
                <Typography component="div" variant="subtitle1" color="text.secondary">
                  <b>description:</b> {channel.description} <br/>
                  <b>description formated:</b> <div className="htmlFormatted" dangerouslySetInnerHTML={{__html: channel.description}}></div>
                  <b>subscribers:</b> {channel.subscribers.items.map(subscriber => <li key={subscriber.user.id}> {subscriber.user.email} </li>)}
                  <b>topics:</b> {channel.topics.map(topic => <li key={topic}> {topic} </li>)}
                  <b>createdAt:</b> {formatDate(channel.createdAt)} <b>updatedAt:</b> {formatDate(channel.updatedAt)}
                </Typography>
              </CardContent>
            </Card>

          </div>
        ))
      }
      </div>
  );
}

export default ChannelList;
