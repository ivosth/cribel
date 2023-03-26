import { channelsByDate, channelsByRating } from '../../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { CircularProgress } from "@chakra-ui/react";
import ChannelCard from './ChannelCard';


function sortByTrendingChannels(channels) {
  // sort by channels.items[X].subscribers.items.length
  let sortedChannels = {};
  sortedChannels.items = channels.items.sort((a, b) => {
    return b.subscribers.items.length - a.subscribers.items.length;
  });

  return sortedChannels;
}


function ChannelList(props) {
  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([]);


  useEffect(() => {

    const obtainListChannels = async () => {
      try {
        setLoading(true);
        let allChannels;
        switch (props.sort) {
          case "new":
            allChannels = await API.graphql({
              query: channelsByDate,
              variables: { typeChannelsByDate: "ChannelsByDate", sortDirection: "DESC" }
            });
            setChannels(allChannels.data.channelsByDate);
            break;
          case "trending":
            allChannels = await API.graphql({
              query: channelsByDate,
              variables: { typeChannelsByDate: "ChannelsByDate", sortDirection: "DESC" }
            });
            const trendingChannels = sortByTrendingChannels(allChannels.data.channelsByDate);
            setChannels(trendingChannels);
            break;
          case "top":
            allChannels = await API.graphql({
              query: channelsByRating,
              variables: { typeChannelsByRating: "ChannelsByRating", sortDirection: "DESC" }
            });
            setChannels(allChannels.data.channelsByRating);
            break;
          default:
            allChannels = await API.graphql({
              query: channelsByDate,
              variables: { typeChannelsByDate: "ChannelsByDate", sortDirection: "DESC" }
            });
            setChannels(allChannels.data.channelsByRating);
            break;
        }
        setLoading(false);
      } catch (err) {
        console.error('Error obtaining list of channels sorted: ', err)
      }
    };

    obtainListChannels();
  }, [props.sort]);

  if (loading) {
    return (
      <div className="centerLoading">
        <CircularProgress isIndeterminate size="25rem" />
      </div>
    )
  }


  return (
    <>
      {channels.items.map(channel => (
        <div key={channel.id}>
          <ChannelCard channel={channel} userID={props.userID} subscriptions={props.subscriptions} updateChannelsNavbar={props.updateChannelsNavbar} />
        </div>
      ))}
    </>
  );
}

export default ChannelList;
