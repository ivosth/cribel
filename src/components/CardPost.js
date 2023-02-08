import { useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Box,
  Text,
  Link,
  Image,
  Button,
  useBoolean,
  useColorModeValue
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaRegEye } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";


function formatDate(awsDate){
    const dateobj = new Date(awsDate);
    const date = dateobj.toLocaleDateString(navigator.language);
    const time = dateobj.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    
    return (date + ' ' + time);
}

function CardPost({post}) {
  const [like, setLike] = useBoolean();

  const [ratingValue, setRatingValue] = useState(0);
  const handleRating = (rate) => {
    setRatingValue(rate);
  };

  return (
    <ChakraProvider>
      <Flex
        bg={useColorModeValue("#edf3f8", "#3e3e3e")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg="white"
          _dark={{
            bg: "gray.800"
          }}
          maxW="2xl"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400"
              }}
            >
              {formatDate(post.createdAt)}
            </Text>
            <Link
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{
                bg: "gray.500"
              }}
            >
              {post.topic}
            </Link>
          </Flex>

          <Box mt={2}>
            <Link
              fontSize="2xl"
              color="gray.700"
              _dark={{
                color: "white"
              }}
              fontWeight="700"
              _hover={{
                color: "gray.600",
                _dark: {
                  color: "gray.200"
                },
                textDecor: "underline"
              }}
            >
              {post.name}
            </Link>
            <Text
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.300"
              }}
            >
              {post.content}
            </Text>
          </Box>

          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Flex alignItems="center">
              <Image
                mx={4}
                w={10}
                h={10}
                rounded="full"
                fit="cover"
                display={{
                  base: "none",
                  sm: "block"
                }}
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                alt="avatar"
              />
              <Link
                color="gray.700"
                _dark={{
                  color: "gray.200"
                }}
                fontWeight="700"
                cursor="pointer"
              >
                {post.owner.email}
              </Link>
            </Flex>

            <Flex alignItems="center">
              <Button
                size="lg"
                onClick={setLike.toggle}
                variant="link"
                minW={0}
              >
                {like ? <FaHeart color="red" /> : <FaRegHeart /> }
              </Button>
              <Text pl="0.3rem" pr="1.5rem">
                {/*likes*/} 2
              </Text>

              <Rating onClick={handleRating}
                allowFraction
                fillColorArray={["#e79b3b","#e9a435","#ebab30","#edb32a","#f0bb25","#f2c320","#f4cb1a","#f6d215","#f8da0f","#fae20a"]} 
                SVGstyle={{display: "inline-block"}}
                size={25}
                style={{marginTop: "6px", marginRight: "1.5rem"}}
              />

              <FaRegEye size="22px"/>
              <Text pl="0.3rem"> {/*views*/}123 </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default CardPost;
