import { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Link,
  Image,
  Avatar,
  useBoolean,
  useColorModeValue
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaRegEye } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from 'react-router-dom';

function formatDate(awsDate) {
  const dateobj = new Date(awsDate);
  const date = dateobj.toLocaleDateString(navigator.language);
  const time = dateobj.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

  return (date + ' ' + time);
}

function PostCard({ post }) {
  const [like, setLike] = useBoolean();
  const navigate = useNavigate();

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
            {post.hasOwnProperty("channel") ?
              <Link
                px="0.50rem"
                py={1}
                onClick={() => navigate(`/channel/${post.channel.id}`)}
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
                {post.channel.name}
              </Link>
              :
              <></>
            }
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
          <Box
            key={post.topic}
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
            <Text fontSize={[8, 10, 12, 12]}> {post.topic} </Text>
          </Box>
        </Flex>

        <Box mt={2}>
          <Text
            fontSize="2xl"
            color="gray.700"
            _dark={{
              color: "white"
            }}
            fontWeight="700"
          >
            {post.name}
          </Text>
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
            <Avatar
              size="sm"
              bg="teal.500"
              src={post.owner.image}
            />
            <Link
              onClick={() => navigate(`/profile/${post.userPostsId}`)}
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
              {`${post.owner.givenName} ${post.owner.familyName}` || "Nombre Apellido"}
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
              fillColorArray={["#e79b3b", "#e9a435", "#ebab30", "#edb32a", "#f0bb25", "#f2c320", "#f4cb1a", "#f6d215", "#f8da0f", "#fae20a"]}
              SVGstyle={{ display: "inline-block" }}
              size={25}
              style={{ marginTop: "6px" }}
            />
            <Text pl="0.3rem" marginRight="1.5rem"> {post.ranking || 'X.X'}  </Text>

            <FaRegEye size="22px" />
            <Text pl="0.3rem"> {/*views*/}123 </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default PostCard;
