import {
    Flex, Box, Icon, Text, Spacer, Image, SimpleGrid, Wrap
} from "@chakra-ui/react";
import { RiUserStarLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import { MdPeopleOutline, MdStar } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { API } from 'aws-amplify';
import { updateChannel } from "../graphql/mutations";


const minimumViews = 2;

function formatDate(awsDate) {
    const dateobj = new Date(awsDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = dateobj.toLocaleDateString(navigator.language, options);

    return (date);
}

function ChannelInfo({ channel, posts }) {


    function computeRating() {
        //console.log("posts", posts)
    
        let rating = 0;
        let count = 0;
        posts.forEach((post) => {
            if (post.ratings.items.length !== 0){
                let sum = 0;
                for (let i = 0; i < post.ratings.items.length; i++) {
                    sum += post.ratings.items[i].stars;
                }
                rating += sum / post.ratings.items.length;
                count++;
            }
            
        });
    
        if(count < minimumViews) return 'N/A';
        else{
            const rate = (rating / count).toFixed(1)

            const updatedChannel = {
                id: channel.id,
                avgRating: rate
            }
            API.graphql({ query: updateChannel, variables: { input: updatedChannel } });

            return String(rate);
        }
        
    }


    return (

        <Box>
            <Flex
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    w="sm"
                    mx="auto"
                    bg="white"
                    _dark={{
                        bg: "gray.800",
                    }}
                    shadow="lg"
                    rounded="lg"
                    overflow="hidden"
                >
                    <Image
                        w="full"
                        h={56}
                        fit="cover"
                        objectPosition="center"
                        src={channel.image || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
                    />

                    <Flex alignItems="center" px={6} py={3}
                        _light={{
                            bg: "gray.500",
                        }}
                        _dark={{
                            bg: "gray.700",
                        }}>

                        <Spacer />
                        <Text as="h1" mx={3} color="white" fontWeight="bold" fontSize="xl">
                            {channel.name}
                        </Text>
                        <Spacer />
                    </Flex>

                    <Box py={4} px={6} >

                        <Wrap justify='center'>
                            {channel.topics.map(topic =>
                                <Box
                                    key={topic}
                                    px="0.50rem"
                                    py={1}
                                    marginRight="0.5rem"
                                    bg="gray.600"
                                    color="gray.100"
                                    fontSize="0.8rem" //Más pequeño con xs
                                    fontWeight="700"
                                    textAlign={"center"}
                                    rounded="md"


                                >
                                    <Text> {topic} </Text>
                                </Box>
                            )}
                        </Wrap>

                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            mb={2}
                            color="gray.700"
                            _dark={{
                                color: "gray.200",
                            }}

                        >

                            <Box w="full" py="0.4rem" rounded="lg">
                                <Text as="h1" px={2} fontSize="lg" fontWeight="bold" align="center">
                                    Subscribers
                                </Text>
                                <Flex>
                                    <Spacer />
                                    <Icon as={MdPeopleOutline} boxSize="1.5rem" />
                                    <Text as="h2" px={2} fontSize="md" fontWeight="bold">
                                        {channel.subscribers.items.length}
                                    </Text>
                                    <Spacer />
                                </Flex>
                            </Box>

                            <Box w="full" py="0.4rem" rounded="lg">
                                <Text as="h1" px={2} fontSize="lg" fontWeight="bold" align="center">
                                    Rating
                                </Text>
                                <Flex>
                                    <Spacer />
                                    <Icon as={MdStar} color="#fae20a" boxSize="1.5rem" />

                                    {/*channel.posts.items.ratings ?
                                        <Text pl="0.3rem" marginRight="1.5rem"> {post.ratings.reduce((acc, val) => acc + val, 0) / post.ratings.length} </Text>
                                        : <Text pl="0.3rem" marginRight="1.5rem"> N/A </Text>
                        */}
                                    <Text as="h2" px={2} fontSize="md" fontWeight="bold">
                                        {computeRating()}
                                    </Text>
                                    <Spacer />
                                </Flex>
                            </Box>

                        </Flex>


                        <Prose my={2} fontSize="2rem">
                            <div dangerouslySetInnerHTML={{__html: channel.description}}></div>
                        </Prose>
                            

                        <Text align="right"
                            fontSize="sm"
                        >
                            Created {formatDate(channel.createdAt)}
                        </Text>


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
                                    <Icon as={BsStarFill} boxSize="1.5rem" />
                                    <Text as="h1" px={2} fontSize="lg" fontWeight="bold">
                                        Creator
                                    </Text>
                                </Flex>
                                <RouterLink to={`/profile/${channel.owner.id}`}>
                                    <Text as="h2" px={2} fontSize="md" >
                                        {`${channel.owner.givenName} ${channel.owner.familyName}` || "Nombre Apellido"}
                                    </Text>
                                </RouterLink>
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
                                    <Icon as={RiUserStarLine} boxSize="1.5rem" />
                                    <Text as="h1" px={2} fontSize="lg" fontWeight="bold">
                                        Participants ({channel.participants.items.length})
                                    </Text></Flex>
                                <Text as="h2" px={2} fontSize="md" >
                                    {channel.participants.items.map(participant =>
                                        <RouterLink key={participant.userID} to={`/profile/${participant.userID}`}>
                                            <Text> {`${participant.user.givenName} ${participant.user.familyName}` || "Nombre Apellido"} </Text>
                                        </RouterLink>
                                    )}
                                </Text>
                            </Box>

                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Box>

    );
}

export default ChannelInfo;
