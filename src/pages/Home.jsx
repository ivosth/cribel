import {
    Flex, Box, Image, Stack, Text, Button
} from "@chakra-ui/react";

export const Home = () => {
    return (
        <>

            <Flex
                direction={{
                    base: "column",
                    md: "row",
                }}
                px={95}
                py={24}
            >
                <Box
                    w={{
                        base: "full",
                        md: 11 / 12,
                        xl: 9 / 12,
                    }}
                    mx="auto"
                    pr={{
                        md: 20,
                    }}
                >

                    <Text as="h1" display="block" fontWeight="bold" lineHeight="shorter" mb={6}
                        fontSize={{
                            base: "3xl",
                            sm: "4xl",
                        }}>
                        CRIBEL
                    </Text>
                    <Text
                        display="block"
                        fontSize={{
                            base: "2xl",
                            sm: "3xl",
                        }}
                        fontWeight="bold"
                        lineHeight="shorter"
                        mb={6}>


                        Lifelong learning for everyone
                    </Text>
                    <Text
                        mb={6}
                        fontSize={{
                            base: "lg",
                            md: "xl",
                        }}
                    >
                        Tired of searching through several websites until you find quality content?<br></br>
                        In Cribel you will find recommendations of quality content to learn about any topic.
                    </Text>
                    <Stack
                        direction={{
                            base: "column",
                            sm: "row",
                        }}
                        mb={{
                            base: 4,
                            md: 8,
                        }}
                        spacing={2}
                    >

                        <Box display="inline-flex" rounded="md" shadow="md">
                            <Button size="lg" rounded="md"> Sign up for free </Button>
                        </Box>
                    </Stack>
                </Box>
                <Box
                    w={{
                        base: "full",
                        md: 10 / 12,
                    }}
                    mx="auto"
                    textAlign="center"
                >
                    <Image
                        w="full"
                        rounded="lg"
                        shadow="2xl"
                        src="../../screenshot.png"
                        alt="Hellonext feedback boards software screenshot"
                    />
                </Box>
            </Flex>
        </>
    );
}

export default Home;