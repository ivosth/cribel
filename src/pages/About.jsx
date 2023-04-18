// Based on Offset 2x2 Grid from Choc UI: https://choc-ui.com/docs/page-sections/features
import {
    Flex, Box, SimpleGrid, Stack, Text, GridItem, Icon
} from "@chakra-ui/react";

const Feature = (props) => {
    return (
   
      <Flex>
        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="brand.500"
            _dark={{
              color: "brand.300",
            }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <Text
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            _light={{
              color: "gray.900",
            }}
          >
            {props.title}
          </Text>
          <Text
            mt={2}
            color="gray.500"
            _dark={{
              color: "gray.400",
            }}
          >
            {props.children}
          </Text>
        </Box>
      </Flex>
    );
    };

export const About = () => {
    return (
    <Flex
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        px={8}
        py={20}
        mx="auto"
        rounded="lg"
      >
        <SimpleGrid
          alignItems="center"
          columns={{
            base: 1,
            lg: 3,
          }}
          spacingY={{
            base: 10,
            lg: 32,
          }}
          spacingX={{
            base: 10,
            lg: 24,
          }}
        >
          <Box alignSelf="start">
            <Text as="h2"
              _light={{
                color: "brand.500",
              }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              LifeLong Learning platform
            </Text>
            <Text as="h2"
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="extrabold"
              textAlign={{
                base: "center",
                sm: "left",
              }}
              _light={{
                color: "black",
              }}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              About Cribel
            </Text>
            <Text
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              textAlign={{
                base: "center",
                sm: "left",
              }}
              color="gray.600"
              _dark={{
                color: "gray.500",
              }}
            >
              Cribel is a social network aimed at the continuous learning of users. Here you can find recommendations of quality content
              to learn about any subject. These recommendations are made by experts in the field, teachers or technicians in the sector. 
              You can be sure that they have done a good content filtering!
            </Text>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature title="Consult expert channels">
                You can consult the channels of experts on the topic you are interested in.
                And sort them by new, popularity or best rating.
              </Feature>
              <Feature title="Explore the best channels or posts">
                {" "}
                You will be able to browse through all the existing channels or posts on the platform.
                {" "}
              </Feature>
              <Feature title="Rate posts">
                {" "}
                Your ratings are very important for other users.
                Don't forget to rate the posts you see.
              </Feature>
              <Feature title="Subscribe to channels">
                {" "}
                By subscribing to a channel you will be kept up to date with the latest posts.{" "}
              </Feature>
              <Feature title="Create channels">
                You can create channels dedicated to a specific topic of your choice.
                And start posting!{" "}
              </Feature>
              <Feature title="Add participants to your channels">
                {" "}
                Add other users to your channels so they can collaborate with you.{" "}
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
    
    );
}


export default About;