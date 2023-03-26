import {
    Flex, useColorModeValue, Stack, SimpleGrid, ButtonGroup, Box, CircularProgress, Text
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ChannelNewPost from '../channels/ChannelNewPost';
import ChannelEditInfo from '../channels/ChannelEditInfo';
import ChannelEditParticipants from '../channels/ChannelEditParticipants';
import { getUserChannels } from '../../graphql/customQueries';
import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import ChannelNewChannel from '../channels/ChannelNewChannel';
import ChannelStatus from '../channels/ChannelStatus';

function SettingsChannel({ userID }) {
    const bg = useColorModeValue("gray.100", "gray.600");
    const bg2 = useColorModeValue("gray.50", "gray.800");

    const [loading, setLoading] = useState(true);
    const [userChannels, setUserChannels] = useState([]);
    
    useEffect(() => {

        const obtainUserChannels = async() => {
            try {
                setLoading(true);
                const allUserChannels = await API.graphql({ query: getUserChannels, variables: { id: userID } });
                setLoading(false);
                //console.log(allUserChannels.data.getUser)
                setUserChannels(allUserChannels.data.getUser);
            } catch (error) {
                console.error("Error obtaining user channels: ", error);
            }
          };

        obtainUserChannels();
    }, [userID]);


    if (loading) {
        return (
            <div className="centerLoading">
            <CircularProgress isIndeterminate size="25rem" />
            </div>
        )
    }

    return (
        <>
            <ChannelNewChannel userID={userID} />
            <Flex display={{ base: "inline", xl: "flex" }} >

                <Flex
                    w="full"
                    p={50}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box w="full" >
                        <Text fontSize="xl" fontWeight="bold">Owned by me:</Text>
                        <Stack
                            direction={{
                                base: "column",

                            }}
                            w="full"
                            bg={{
                                md: bg,
                            }}

                        >

                            {userChannels.ownedChannels.items.length > 0 ?
                                userChannels.ownedChannels.items.map(channel => {
                                    return (
                                        <Flex
                                            direction={{
                                                base: "row",
                                                md: "column",
                                            }}
                                            bg={bg2}
                                            key={channel.id}
                                            shadow="lg"
                                            rounded="lg"
                                        >
                                            <SimpleGrid
                                                spacingY={3}
                                                columns={{
                                                    base: 1,
                                                    sm: 2,
                                                }}
                                                w="full"
                                                py={2}
                                                px="0.25rem"
                                                fontWeight="hairline"
                                            >
                                                <RouterLink to={`/channel/${channel.id}/new`}>
                                                    <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' }} ml="1rem" mt="0.25rem">{channel.name}</Text>
                                                </RouterLink>


                                                <Flex
                                                    justify={{
                                                        md: "end",
                                                    }}
                                                >
                                                    <ButtonGroup variant="solid" size="sm" mx="0.5rem" spacing="0.6rem">
                                                        <ChannelNewPost userID={userID} channelID={channel.id} topics={channel.topics} />
                                                        <ChannelEditParticipants channelID={channel.id}/>
                                                        <ChannelEditInfo channelID={channel.id} topics={channel.topics} />
                                                        <ChannelStatus channelID={channel.id} disabled={channel.disabled}/>
                                                    </ButtonGroup>
                                                </Flex>
                                            </SimpleGrid>
                                        </Flex>
                                    );
                                })
                                :
                                <Text as="h2" px={2} fontSize="lg" >
                                    No channel has been created by you
                                </Text>

                            }
                        </Stack>
                    </Box>
                </Flex>
                <Flex
                    w="full"
                    p={50}
                    alignItems="center"
                    justifyContent="center"
                >

                    <Box w="full">
                        <Text fontSize="xl" fontWeight="bold">I participate in:</Text>
                        <Stack
                            direction={{
                                base: "column",
                            }}
                            w="full"
                            bg={{
                                md: bg,
                            }}
                            rounded="lg"
                        >


                            {userChannels.participantChannels.items.length > 0 ?
                                userChannels.participantChannels.items.map(channel => {
                                    return (
                                        <Flex
                                            direction={{
                                                base: "row",
                                                md: "column",
                                            }}
                                            bg={bg2}
                                            key={channel.channelParticipantsId}
                                            shadow="lg"
                                            rounded="lg"
                                        >
                                            <SimpleGrid
                                                spacingY={3}
                                                columns={{
                                                    base: 1,
                                                    sm: 2,
                                                }}
                                                w="full"
                                                py={2}
                                                px="0.25rem"
                                                fontWeight="hairline"
                                            >
                                                <RouterLink to={`/channel/${channel.channelParticipantsId}/new`}>
                                                    <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' }} ml="1rem" mt="0.25rem">{channel.channel.name}</Text>
                                                </RouterLink>


                                                <Flex
                                                    justify={{
                                                        md: "end",
                                                    }}
                                                >
                                                    {channel.channel.disabled ?
                                                        <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md'}} mr="1rem" mt="0.25rem">Channel disabled by owner</Text>
                                                        :
                                                        <ButtonGroup variant="solid" size="sm" mx="0.5rem" spacing="0.6rem">
                                                            <ChannelNewPost userID={userID} channelID={channel.channelParticipantsId} topics={channel.channel.topics} />
                                                        </ButtonGroup>
                                                    }
                                                </Flex>
                                            </SimpleGrid>
                                        </Flex>
                                    );
                                })
                                :
                                <Text as="h2" px={2} fontSize="lg" >
                                    Does not participate in any channel
                                </Text>

                            }
                        </Stack>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};



export default SettingsChannel;
