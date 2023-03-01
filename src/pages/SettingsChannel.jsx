import {
    Flex, useColorModeValue, Icon, Text, Stack, Button, SimpleGrid, ButtonGroup, IconButton, Box, Hide, Center
} from "@chakra-ui/react";
import { AiTwotoneLock, AiFillEdit, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { MdPostAdd, MdOutlineLibraryAdd } from "react-icons/md";
import { BiMessageAdd } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import ChannelNewPost from './../components/ChannelNewPost';
import ChannelEditInfo from './../components/ChannelEditInfo';
import ChannelEditParticipants from './../components/ChannelEditParticipants';

function SettingsChannel({ user }) {
    const bg = useColorModeValue("gray.100", "gray.600");
    const bg2 = useColorModeValue("gray.50", "gray.800");


    return (
        <>
            <Center>
                <Button leftIcon={<MdOutlineLibraryAdd />} colorScheme='teal' size='lg' fontSize="140%">Create new channel</Button>
            </Center>
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

                            {user.ownedChannels.items.length > 0 ?
                                user.ownedChannels.items.map(channel => {
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
                                                <RouterLink to={`/channel/${channel.id}`}>
                                                    <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' }} ml="1rem" mt="0.25rem">{channel.name}</Text>
                                                </RouterLink>


                                                <Flex
                                                    justify={{
                                                        md: "end",
                                                    }}
                                                >
                                                    <ButtonGroup variant="solid" size="sm" mx="0.5rem" spacing="0.6rem">
                                                        <ChannelNewPost userID={user.id} channelID={channel.id} topics={channel.topics} />
                                                        <ChannelEditParticipants channelID={channel.id}/>
                                                        <ChannelEditInfo channelID={channel.id} topics={channel.topics} />

                                                        <IconButton
                                                            colorScheme="red"
                                                            variant="outline"
                                                            icon={<BsFillTrashFill />}
                                                            aria-label="Delete"
                                                        />
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


                            {user.participantChannels.items.length > 0 ?
                                user.participantChannels.items.map(channel => {
                                    return (
                                        <Flex
                                            direction={{
                                                base: "row",
                                                md: "column",
                                            }}
                                            bg={bg2}
                                            key={channel.channelID}
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
                                                <RouterLink to={`/channel/${channel.channelID}`}>
                                                    <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' }} ml="1rem" mt="0.25rem">{channel.channel.name}</Text>
                                                </RouterLink>


                                                <Flex
                                                    justify={{
                                                        md: "end",
                                                    }}
                                                >
                                                    <ButtonGroup variant="solid" size="sm" mx="0.5rem" spacing="0.6rem">
                                                        <ChannelNewPost userID={user.id} channelID={channel.channelID} topics={channel.channel.topics} />
                                                    </ButtonGroup>
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
