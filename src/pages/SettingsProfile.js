import {
    Flex, Box, Icon, Text, Spacer, Image, SimpleGrid, Avatar, Button
} from "@chakra-ui/react";
import { RiUserStarLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import { MdOutlineCastForEducation } from "react-icons/md";
import ProfileEdit from "../components/ProfileEdit";

function formatDate(awsDate) {
    const dateobj = new Date(awsDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = dateobj.toLocaleDateString(navigator.language, options);

    return (date);
}


function SettingsProfile() {

    return (

        <Box>
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

                        <Box>
                            <Avatar bg='teal.500' size='xl' mb="0.5rem" />
                            <Box
                                px="0.50rem"
                                py={1}
                                bg="gray.600"
                                color="gray.100"
                                fontSize="0.8rem" //Más pequeño con xs
                                fontWeight="700"
                                textAlign={"center"}
                                rounded="md"
                            >
                                <Text fontSize="sm"> Student </Text>
                            </Box>
                        </Box>


                        <Spacer />
                        <ProfileEdit/>

                    </Flex>

                    <Box py="1rem" px="2rem">
                        <Text as="h2" fontSize={{ base: 'md', sm: 'lg', md: '2xl' }} fontWeight="bold" >
                            Javier Mancha Diéguez
                        </Text>

                        <Text as="h3" fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} fontWeight="bold" >
                            Estudiante en Universidad de Córdoba
                        </Text>
                        <Text as="h4"
                            my="0.5rem"
                            fontSize="md"
                            color="gray.800"
                            _dark={{
                                color: "white",
                            }}
                        >
                            Aquí va la descripción del usuario Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
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
                                <Text as="h2" px={2} fontSize="sm" >
                                    {/*channel.owner*/}
                                    Javier Mancha Diéguez
                                </Text>
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
                                <Text as="h2" px={2} fontSize="sm" >
                                    aaaaa
                                </Text>
                            </Box>
                        </Flex>


                    </Box>
                </Box>
            </Flex>
        </Box>

    );
}

export default SettingsProfile;
