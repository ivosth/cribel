import {
    Flex, Box, Icon, Text, Spacer, Image, SimpleGrid
} from "@chakra-ui/react";
import { RiUserStarLine } from "react-icons/ri";
import { BsStarFill } from "react-icons/bs";
import { MdPeopleOutline, MdStar } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

function formatDate(awsDate) {
    const dateobj = new Date(awsDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = dateobj.toLocaleDateString(navigator.language, options);

    return (date);
}


function computeRating(posts) {
    //console.log("posts", posts)
    if(posts.length === 0) return 'N/A';
    else{
        let rating = 0;
        let count = 0;
        posts.map((post) => {
            if (post.ratings) {
                let sum = 0;
                for (let i = 0; i < post.ratings.length; i++) {
                    sum += post.ratings[i];
                }
                rating += sum / post.ratings.length;
                count++;
            }
        });
        if(count === 0) return 'N/A';
        else return String((rating / count));
    }
}




function ChannelInfo({ channel }) {

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
                        src="https://imageio.forbes.com/specials-images/imageserve/5f1a62d942a6387efb759310/What-Can-3D-Printing-Be-Used-For--Here-Are-10-Amazing-Examples/960x0.jpg?format=jpg&width=960"
                        alt="avatar"
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

                    <Box py={4} px={6}>

                        <SimpleGrid minChildWidth='6rem' spacingX='0.1rem' spacingY='0.4rem'>
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
                                    <Text fontSize={[8, 10, 12, 12]}> {topic} </Text>
                                </Box>
                            )}
                        </SimpleGrid>

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
                                        {computeRating(channel.posts.items)}
                                    </Text>
                                    <Spacer />
                                </Flex>
                            </Box>

                        </Flex>


                        <Text as="h1"
                            fontSize="1.05rem"
                            color="gray.800"
                            _dark={{
                                color: "white",
                            }}
                        >
                            {channel.description}
                        </Text>

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
