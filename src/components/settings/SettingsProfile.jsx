import {
    Flex, Box, Icon, Text, Spacer, Avatar
} from "@chakra-ui/react";
import { RiUserStarLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import ProfileEdit from "../users/ProfileEdit";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";


function SettingsProfile({ user, updateUserNavbar }) {

    const [userImage, setUserImage] = useState(user.image);
    const [userCurrentPosition, setUserCurrentPosition] = useState(user.currentPosition);
    const [userDescription, setUserDescription] = useState(user.description);

    function handleUpdateProfile(image, currentPosition, description) {
        if (image) {
            setUserImage(image);
        }
        if (currentPosition) {
            setUserCurrentPosition(currentPosition);
        }
        if (description) {
            setUserDescription(description);
        }
    }


    return (
        <Box>
            <Flex w="full" alignItems="center" justifyContent="center">
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

                        <Box>
                            <Avatar bg='teal.500' size='xl' mb="0.5rem" src={userImage} />
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
                                <Text fontSize="sm"> {user.role.charAt(0).toUpperCase() + user.role.slice(1) || "Role"} </Text>
                            </Box>
                        </Box>

                        <Spacer />
                        <ProfileEdit
                            userID={user.id}
                            image={userImage}
                            currentPosition={userCurrentPosition}
                            description={userDescription}
                            handleUpdateProfile={handleUpdateProfile}
                            updateUserNavbar={updateUserNavbar}
                        />
                    </Flex>

                    <Box py="1rem" px="2rem">
                        <Text as="h2" fontSize={{ base: 'md', sm: 'lg', md: '2xl' }} fontWeight="bold" >
                            {`${user.givenName} ${user.familyName}` || "Nombre Apellido"}
                        </Text>

                        <Text as="h3" fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} fontWeight="bold" >
                            {userCurrentPosition || "No information provided on current occupation"}
                        </Text>
                        <Text as="h4"
                            my="0.5rem"
                            fontSize="md"
                            color="gray.800"
                            _dark={{
                                color: "white",
                            }}
                        >
                            {userDescription ||
                                // eslint-disable-next-line
                                "No description provided. \
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus ex odio, et vulputate metus suscipit quis. \
                            Vestibulum tincidunt eros at lacinia cursus. Vivamus nec elit ac ante faucibus egestas at a arcu. Phasellus sed \
                            nunc consectetur, porta nulla id, blandit leo. Aenean feugiat euismod mauris, sed vehicula lorem dapibus vel. \
                            Proin lacinia neque vitae ex porttitor, a commodo mauris ultrices. Nulla bibendum quam at massa pharetra porta \
                            a et lorem. Cras erat ligula, suscipit sed aliquet sed, scelerisque in risus."}
                        </Text>
                    </Box>

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

                                {user.ownedChannels === undefined || user.ownedChannels?.items.length === 0 ?
                                    <Text as="h2" px={2} fontSize="sm" >
                                        No channel has been created by you
                                    </Text>
                                    :
                                    user.ownedChannels.items.map(channel => (
                                        <RouterLink key={channel.id} to={`/channel/${channel.id}/new`}>
                                            <Text as="h2" px={2} fontSize="sm" >
                                                {channel.name}
                                            </Text>
                                        </RouterLink>
                                    ))
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


                                {user.participantChannels === undefined || user.participantChannels.items.length === 0 ?
                                    <Text as="h2" px={2} fontSize="sm" >
                                        Does not participate in any channel
                                    </Text>
                                    :
                                    user.participantChannels.items.map(channel => (
                                        <RouterLink key={channel.channelParticipantsId} to={`/channel/${channel.channelParticipantsId}/new`}>
                                            <Text as="h2" px={2} fontSize="sm" >
                                                {channel.channel.name}
                                            </Text>
                                        </RouterLink>
                                    ))
                                }
                            </Box>
                        </Flex>

                    </Box>
                </Box>
            </Flex>
        </Box>

    );
}

export default SettingsProfile;
