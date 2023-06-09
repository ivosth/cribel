import {
    Flex, Box, Icon, Text, Spacer, Avatar, CircularProgress
} from "@chakra-ui/react";
import { RiUserStarLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProfile } from "../graphql/customQueries";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";



function Profile() {

    let { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const obtainProfile = async () => {
            try {
                setLoading(true);
                const profile = await API.graphql({ query: getProfile, variables: { id: id } });
                setLoading(false);
                setProfile(profile.data.getUser);
            } catch (error) {
                console.error("Error obtaining profile: ", error);
            }
        };

        obtainProfile();
    }, [id]);

    if (loading) {
        return (
            <div className="centerLoading">
                <CircularProgress isIndeterminate size="25rem" />
            </div>
        )
    }

    return (

        <Box mt="4rem">
            <Flex
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    w="xl"
                    mx="auto"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                >

                    <Flex alignItems="center" px={6} py={3}
                        _light={{
                            bg: "gray.400",
                        }}
                        _dark={{
                            bg: "gray.700",
                        }}>

                        <Spacer />
                        <Box>
                            <Avatar bg='teal.500' size='xl' mb="0.5rem" src={profile.image} />
                            <Box
                                px="0.50rem"
                                py={1}
                                bg="gray.600"
                                color="gray.100"
                                fontSize="0.8rem" //Smaller with xs
                                fontWeight="700"
                                textAlign={"center"}
                                rounded="md"
                            >
                                <Text fontSize="sm"> {profile.role.charAt(0).toUpperCase() + profile.role.slice(1) || "Role"} </Text>
                            </Box>
                        </Box>
                        <Spacer />

                    </Flex>

                    <Box py="1rem" px="2rem">
                        <Text as="h2" fontSize={{ base: 'md', sm: 'lg', md: '2xl' }} fontWeight="bold" >
                            {`${profile.givenName} ${profile.familyName}` || "Nombre Apellido"}
                        </Text>

                        <Text as="h3" fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} fontWeight="bold" >
                            {profile.currentPosition || "No information provided on current occupation"}
                        </Text>
                        <Text as="h4"
                            my="0.5rem"
                            fontSize="md"
                            color="gray.800"
                            _dark={{
                                color: "white",
                            }}
                        >
                            {profile.description ||
                                "No description provided"}
                        </Text>
                    </Box>

                    {profile.group !== "viewer" ?
                        <Box borderWidth="1px" rounded="lg" px="1rem" py="0.4rem">
                            <Flex color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}>
                                <Icon as={MdOutlineCastForEducation} boxSize="1.5rem" />
                                <Text as="h1" px={2} fontSize="lg" fontWeight="bold">
                                    Channels
                                </Text>
                            </Flex>

                            <Flex
                                alignItems="center"
                                mt={4}
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                            >
                                <Box borderWidth="1px" w="full" px="1rem" py="0.4rem" rounded="lg">
                                    <Flex>
                                        <Icon as={BsStarFill} boxSize="1.3rem" />
                                        <Text as="h1" px={2} fontSize="md" fontWeight="bold">
                                            As Creator
                                        </Text>
                                    </Flex>

                                    {profile.ownedChannels.items.length > 0 ?
                                        profile.ownedChannels.items.map(channel => (
                                            <RouterLink key={channel.id} to={`/channel/${channel.id}/new`}>
                                                <Text as="h2" px={2} fontSize="sm" >
                                                    {channel.name}
                                                </Text>
                                            </RouterLink>
                                        ))
                                        :
                                        <Text as="h2" px={2} fontSize="sm" >
                                            No channel has been created by you
                                        </Text>
                                    }


                                </Box>
                            </Flex>


                            <Flex
                                alignItems="center"
                                mt={4}
                                color="gray.700"
                                _dark={{
                                    color: "gray.200",
                                }}
                            >
                                <Box borderWidth="1px" w="full" px="1rem" py="0.4rem" rounded="lg">
                                    <Flex>
                                        <Icon as={RiUserStarLine} boxSize="1.3rem" />
                                        <Text as="h1" px={2} fontSize="md" fontWeight="bold">
                                            As Participant
                                        </Text></Flex>


                                    {profile.participantChannels.items.length > 0 ?
                                        profile.participantChannels.items.map(channel => (
                                            <RouterLink to={`/channel/${channel.channelParticipantsId}/new`} key={channel.channelParticipantsId}>
                                                <Text as="h2" px={2} fontSize="sm" >
                                                    {channel.channel.name}
                                                </Text>
                                            </RouterLink>
                                        ))
                                        :
                                        <Text as="h2" px={2} fontSize="sm" >
                                            Does not participate in any channel
                                        </Text>
                                    }
                                </Box>

                            </Flex>


                        </Box>
                        :
                        null}
                </Box>
            </Flex>
        </Box>

    );
}

export default Profile;
