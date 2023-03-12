import { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Text,
  Link,
  Avatar,
  useBoolean,
} from "@chakra-ui/react";
import { FaRegEye } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from 'react-router-dom';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { API } from 'aws-amplify';
import { createRating, updateRating } from '../graphql/mutations';

const minimumViews = 2;

function formatDate(awsDate) {
  const dateobj = new Date(awsDate);
  const date = dateobj.toLocaleDateString(navigator.language);
  const time = dateobj.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

  return (date + ' ' + time);
}

function computeRating(ratings) {
  if (ratings.length < minimumViews) return 'N/A';
  else {
    let sum = 0;
    for (let i = 0; i < ratings.length; i++) {
      sum += ratings[i].stars;
    }
    return String(sum / ratings.length);
  }
}


function PostCard({ post, userID }) {
  const [ratingValue, setRatingValue] = useState(0);
  const [views, setViews] = useState(post.ratings.items.length);
  const [averageRating, setAverageRating] = useState(computeRating(post.ratings.items));
  const [initialRating, setInitialRating] = useState(0);

  const navigate = useNavigate();


  async function changeRating(rate) {
    //console.log(post)
    
    try{
      //console.log("ratingValue", ratingValue)
      if (ratingValue === 0) {
        // If the user has not rated the post, create a new rating
        const newRating = {
          userRatingsId: userID,
          postRatingsId: post.id,
          stars: rate,
        };
        const res = await API.graphql({ query: createRating, variables: { input: newRating } });
        newRating.id = res.data.createRating.id;

        if (views >= minimumViews){
          const sum = parseFloat(averageRating) * views + rate;
          setViews(views + 1);
          setAverageRating(String((sum / views).toFixed(2)));
        }
        else if (views + 1 === minimumViews){

          let  newRatingsList = post.ratings.items;
          newRatingsList.push(newRating);
          setViews(views + 1);
          setAverageRating(parseFloat(computeRating(newRatingsList)).toFixed(2));
        }
        else{
          setAverageRating("N/A");
          setViews(views + 1);
        }


      } else {
        // If the user has already rated the post, update the rating
        const ratingID = post.ratings.items.find(rating => rating.userRatingsId === userID).id;
        const updatedRating = {
          id: ratingID,
          stars: rate,
        };
        
        await API.graphql({ query: updateRating, variables: { input: updatedRating } });

        if (averageRating === "N/A"){
          setAverageRating("N/A");
        }
        else{
          const sum = parseFloat(averageRating) * views - initialRating + rate;
          setAverageRating(String((sum / views).toFixed(2)));
        }
      }

      setRatingValue(rate);
    }
    catch (err) {
      console.error("Error rating post: ", err);
    }
  };

  function setAlreadyRated() {
    // If the user has already rated the post, update the setRatingValue with star rating value
    if (post.ratings.items.length > 0) {
      const userRating = post.ratings.items.find(rating => rating.userRatingsId === userID);
      if (userRating) {
        setRatingValue(userRating.stars);
        setInitialRating(userRating.stars);
      }
    }
  }

  useEffect(() => {
    setAlreadyRated();     
    
  }, []);


  return (
    <Flex
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
        minW="100%" //Tocar aquí si se quiere hacer la tarjeta más grande en pantallas grandes
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
                onClick={() => navigate(`/channel/${post.channel.id}/new`)}
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

          <Prose mt={2}>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
          </Prose>
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

            <Rating onClick={changeRating}
              allowFraction
              fillColorArray={["#e79b3b", "#e9a435", "#ebab30", "#edb32a", "#f0bb25", "#f2c320", "#f4cb1a", "#f6d215", "#f8da0f", "#fae20a"]}
              SVGstyle={{ display: "inline-block" }}
              size={25}
              style={{ marginTop: "6px" }}
              initialValue={ratingValue}

            />

            <Text pl="0.3rem" marginRight="1.5rem"> {averageRating !== "N/A" ? parseFloat(averageRating).toFixed(2) : "N/A"} </Text>

            <FaRegEye size="22px" />
            <Text pl="0.3rem"> {views} </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default PostCard;
