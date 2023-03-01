import {
  Box,
  Flex,
  Avatar,
  VStack,
  Button,
  Icon,
  Text,
  Hide,
  Spacer
} from "@chakra-ui/react";
import { MdPeopleOutline, MdOutlinePersonAddAlt, MdStar, MdOutlineDataSaverOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

function computeRating(posts) {
  //console.log("posts", posts)

  let rating = 0;
  let count = 0;
  posts.forEach((post) => {
    if (post.ratings.items.length !== 0) {
      let sum = 0;
      for (let i = 0; i < post.ratings.items.length; i++) {
        sum += post.ratings.items[i].stars;
      }
      rating += sum / post.ratings.items.length;
      count++;
    }

  });

  if (count < 2) return 'N/A';
  else return String((rating / count).toFixed(1));

}

function ChannelCard({ channel }) {
  const navigate = useNavigate();

  return (
    <Box
      width={{ base: '100%', sm: '100%', md: '70%', lg: '40%', xl: '40%' }}
      mx="auto"
      px={8}
      py={4}
      my="2rem"
      rounded="lg"
      shadow="lg"
      bg="white"
      _dark={{
        bg: "gray.800"
      }}
    >
      <Flex alignItems={'center'}>
        <VStack
          spacing="1px"
          ml="2"
          display={{ md: 'flex' }}
        >
          {/*<Text onClick={() => navigate(`/channel/${channel.id}`)} 
              as="b" fontSize={[16, 20, 20, 25]} align="center"> {channel.name} </Text>*/}
          <Button mb="0.3rem"
            onClick={() => navigate(`/channel/${channel.id}`)}
            fontSize={[13, 18, 18, 23]}
          >
            {channel.name}
          </Button>

          <Flex>
            <Hide below="sm">
              <Avatar size={'sm'} bg="teal.500" mr="0.5rem" src={channel.owner.image} />
            </Hide>
            <RouterLink to={`/profile/${channel.owner.id}`}>
              <Text mt="0.25rem" fontSize={[10, 18, 18, 18]}> {`${channel.owner.givenName} ${channel.owner.familyName}` || "Nombre Apellido"} </Text>
            </RouterLink>
          </Flex>
        </VStack>
        <Spacer />
        <Button colorScheme="blue" variant="outline">
          <Flex fontSize="lg" align="center" >
            <Icon as={MdOutlineDataSaverOn} size="1.5rem" />
            <Hide below='xl'>
              <Text ml="0.3rem" fontSize="md" >Suscribirse</Text>
            </Hide>
          </Flex>
        </Button>
      </Flex>
      <Flex alignItems="center">
        <Spacer />
        <MdPeopleOutline size="1.5rem" />
        <Text fontSize="sm" ml="0.3rem" mr="1.1rem"> {channel.subscribers.items.length} </Text>

        <MdOutlinePersonAddAlt size="1.5rem" />
        <Text fontSize="sm" ml="0.3rem" mr="1.1rem"> {channel.participants.items.length} </Text>

        <MdStar color="#fae20a" size="1.5rem" />
        <Text fontSize="sm" ml="0.1rem" mr="1.1rem"> {computeRating(channel.posts.items)} </Text>

      </Flex>
      <Prose my="0.6rem">
          <div dangerouslySetInnerHTML={{__html: channel.description}}></div>
      </Prose>
      <Flex alignItems="center">
        <Spacer />
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
      </Flex>
    </Box>
  );
}

export default ChannelCard;
