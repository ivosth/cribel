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


function ChannelCard({ channel }) {
  const navigate = useNavigate();

  return (
      <Box
        width={{ base: '100%', sm: '100%', md: '70%', lg: '40%', xl: '40%'}}
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
                <Avatar size={'sm'} bg="grey" mr="0.5rem" src={channel.owner.image}/>
              </Hide>
              <Text fontSize={[10, 18, 18, 18]}> {channel.owner.email} </Text>
            </Flex>
          </VStack>
          <Spacer />
          <Button colorScheme="blue" variant="outline">
            <Flex fontSize="lg" align="center" >
                <Icon as={MdOutlineDataSaverOn} size="1.5rem"/>
                <Hide below='xl'>
                  <Text ml="0.3rem" fontSize="md" >Suscribirse</Text>
                </Hide>
            </Flex>
          </Button>
        </Flex>
        <Flex alignItems="center">
          <Spacer/>
            <MdPeopleOutline size="1.5rem"/>
            <Text fontSize="sm" ml="0.3rem" mr="1.1rem"> 300 </Text>
          
            <MdOutlinePersonAddAlt size="1.5rem"/>
            <Text fontSize="sm" ml="0.3rem" mr="1.1rem"> 8 </Text>

            <MdStar color="#fae20a" size="1.5rem"/>
            <Text fontSize="sm" ml="0.1rem" mr="1.1rem"> 4.5 de 5 </Text>
            
        </Flex>
        <Text my="0.6rem" fontSize={[11, 15, 15, 18]}>{channel.description}</Text>
        <Flex alignItems="center">
          <Spacer/>
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
