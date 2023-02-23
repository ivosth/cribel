import {
    Flex, useColorModeValue, Icon, Text, Stack, Button, SimpleGrid, ButtonGroup, IconButton, Box, Hide
} from "@chakra-ui/react";
import { AiTwotoneLock, AiFillEdit, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { MdPeopleOutline, MdStar } from "react-icons/md";
import { BiMessageAdd } from "react-icons/bi";


function SettingsChannel() {
    const data = [
        {
            name: "Machine learning and Intelligent Systems",
            created: "7 days ago",
        },
        {
            name: "Anubra",
            created: "23 hours ago",
        },
        {
            name: "Josef",
            created: "A few seconds ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
    ];
    const bg = useColorModeValue("gray.100", "gray.800");
    const bg2 = useColorModeValue("gray.50", "gray.800");




    return (
        <Flex display={{ base: "inline", xl: "flex" }} >

            <Flex
                w="full"
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={50}
                alignItems="center"
                justifyContent="center"
            >
                <Box w="full" >
                    <Text fontSize="xl" fontWeight="bold">Owned by me:</Text>
                    <Stack
                        direction={{
                            base: "column",

                        }}
                        w="full"
                        bg={{
                            md: bg,
                        }}

                    >

                        {data.map((token, tid) => {
                            return (
                                <Flex
                                    direction={{
                                        base: "row",
                                        md: "column",
                                    }}
                                    bg={bg2}
                                    key={tid}
                                    shadow="lg"
                                    rounded="lg"
                                >
                                    <SimpleGrid
                                        spacingY={3}
                                        columns={{
                                            base: 1,
                                            sm: 2,
                                        }}
                                        w="full"
                                        py={2}
                                        px="0.25rem"
                                        fontWeight="hairline"
                                    >
                                        <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' }} ml="1rem">{token.name}</Text>


                                        <Flex
                                            justify={{
                                                md: "end",
                                            }}
                                        >
                                            <ButtonGroup variant="solid" size="sm" mx="0.5rem" spacing="0.6rem">
                                                <Button colorScheme="purple" variant="solid">
                                                    <Flex fontSize="lg" align="center" >
                                                        <Icon as={BiMessageAdd} size="1.5rem" />
                                                        <Hide below='md'>
                                                            <Text ml="0.3rem" fontSize="md" >New Post</Text>
                                                        </Hide>
                                                    </Flex>
                                                </Button>
                                                <IconButton
                                                    colorScheme="blue"
                                                    icon={<AiOutlineUsergroupAdd />}
                                                    aria-label="Up"
                                                />
                                                <IconButton
                                                    colorScheme="green"
                                                    icon={<AiFillEdit />}
                                                    aria-label="Edit"
                                                />
                                                <IconButton
                                                    colorScheme="red"
                                                    variant="outline"
                                                    icon={<BsFillTrashFill />}
                                                    aria-label="Delete"
                                                />
                                            </ButtonGroup>
                                        </Flex>
                                    </SimpleGrid>
                                </Flex>
                            );
                        })}
                    </Stack>
                </Box>
            </Flex>
            <Flex
                w="full"
                bg="#edf3f8"
                _dark={{
                    bg: "#3e3e3e",
                }}
                p={50}
                alignItems="center"
                justifyContent="center"
            >

                <Box w="full">
                    <Text fontSize="xl" fontWeight="bold">I participate in:</Text>
                    <Stack
                        direction={{
                            base: "column",
                        }}
                        w="full"
                        bg={{
                            md: bg,
                        }}
                    >
                        {data.map((token, tid) => {
                            return (
                                <Flex
                                    direction={{
                                        base: "row",
                                        md: "column",
                                    }}
                                    bg={bg2}
                                    key={tid}
                                    shadow="lg"
                                    rounded="lg"
                                >
                                    <SimpleGrid
                                        spacingY={3}
                                        columns={{
                                            base: 1,
                                            sm: 2,
                                        }}
                                        w="full"
                                        py={2}
                                        px="0.25rem"
                                        fontWeight="hairline"
                                    >
                                        <Text fontSize="md" ml="1rem">{token.name}</Text>


                                        <Flex
                                            justify={{
                                                md: "end",
                                            }}
                                        >
                                            <ButtonGroup variant="solid" size="sm" mx="0.5rem" spacing={3}>
                                                <Button colorScheme="purple" variant="solid">
                                                    <Flex fontSize="lg" align="center" >
                                                        <Icon as={BiMessageAdd} size="1.5rem" />
                                                        <Hide below='md'>
                                                            <Text ml="0.3rem" fontSize="md" >New Post</Text>
                                                        </Hide>
                                                    </Flex>
                                                </Button>
                                                <IconButton
                                                    colorScheme="blue"
                                                    icon={<AiOutlineUsergroupAdd />}
                                                    aria-label="Up"
                                                />
                                                <IconButton
                                                    colorScheme="green"
                                                    icon={<AiFillEdit />}
                                                    aria-label="Edit"
                                                />
                                                <IconButton
                                                    colorScheme="red"
                                                    variant="outline"
                                                    icon={<BsFillTrashFill />}
                                                    aria-label="Delete"
                                                />
                                            </ButtonGroup>
                                        </Flex>
                                    </SimpleGrid>
                                </Flex>
                            );
                        })}
                    </Stack>
                </Box>
            </Flex>
        </Flex>
    );
};



export default SettingsChannel;
