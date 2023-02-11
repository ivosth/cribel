import { useState } from 'react';
import {
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

function PostCard({post}) {
  const [like, setLike] = useBoolean();

  const [ratingValue, setRatingValue] = useState(0);
  const handleRating = (rate) => {
    setRatingValue(rate);
  };

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.600")}
      pt={50}
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
        maxW="2xl"
        minW="50%" //Tocar aquí si se quiere hacer la tarjeta más grande en pantallas grandes
        _dark={{
          bg: "gray.800"
        }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
          <Link
              px="0.50rem"
              py={1}

              bg="blue.600"
              color="blue.100"
              fontSize="0.8rem" //Más pequeño con xs
              fontWeight="700"
              textAlign={"center"}
              rounded="md"
              _hover={{
                bg: "blue.500"
              }}
            >
              Canal
            </Link>
            <Text
              fontSize="sm"
              color="gray.600"
              ml="1rem"
              _dark={{
                color: "gray.400"
              }}
            >
              {formatDate(post.createdAt)}
            </Text>
          </Flex>
          <Link
            px="0.50rem"
            py={1}

            bg="gray.600"
            color="gray.100"
            fontSize="0.8rem" //Más pequeño con xs
            fontWeight="700"
            textAlign={"center"}
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
              w={10}
              h={10}
              rounded="full"
              fit="cover"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <Link
              color="gray.700"
              pl="1rem"
              _dark={{
                color: "gray.200"
              }}
              fontWeight="700"
              cursor="pointer"
              display={{
                base: "none",
                sm: "block"
              }}
            >
              {post.owner.email}
            </Link>
          </Flex>

          <Flex alignItems="center">
            {/*
            <Button
                size="lg"
                onClick={setLike.toggle}
                variant="link"
                minW={0}
              >
                {like ? <FaHeart color="red" /> : <FaRegHeart /> }
              </Button>
              <Text pl="0.3rem" pr="1.5rem">
                2
              </Text>
            */}
            
            <Rating onClick={handleRating}
              allowFraction
              fillColorArray={["#e79b3b","#e9a435","#ebab30","#edb32a","#f0bb25","#f2c320","#f4cb1a","#f6d215","#f8da0f","#fae20a"]} 
              SVGstyle={{display: "inline-block"}}
              size={25}
              style={{marginTop: "6px"}}
            />
            <Text pl="0.3rem" marginRight="1.5rem"> {/*views*/}4.5 </Text>

            <FaRegEye size="22px"/>
            <Text pl="0.3rem"> {/*views*/}123 </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default PostCard;
