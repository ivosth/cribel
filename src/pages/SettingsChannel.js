import {
    Flex, useColorModeValue, Icon, Text, Stack, Button, SimpleGrid, ButtonGroup, IconButton
} from "@chakra-ui/react";
import { AiTwotoneLock, AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { MdPeopleOutline, MdStar } from "react-icons/md";



function SettingsChannel() {
    const data = [
        {
            name: "Daggy",
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
    const bg = useColorModeValue("white", "gray.800");
    const bg2 = useColorModeValue("white", "gray.800");
    const bg3 = useColorModeValue("gray.100", "gray.700");




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
                <Stack
                    direction={{
                        base: "column",
                    }}
                    w="full"
                    bg={{
                        md: bg,
                    }}
                    shadow="lg"
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
                            >
                                <SimpleGrid
                                    spacingY={3}
                                    columns={{
                                        base: 1,
                                        md: 4,
                                    }}
                                    w={{
                                        base: 120,
                                        md: "full",
                                    }}
                                    textTransform="uppercase"
                                    bg={bg3}
                                    color={"gray.500"}
                                    py={{
                                        base: 1,
                                        md: 4,
                                    }}
                                    px={{
                                        base: 2,
                                        md: 10,
                                    }}
                                    fontSize="md"
                                    fontWeight="hairline"
                                >
                                    <span>Name</span>
                                    <span>Created</span>
                                    <span>Data</span>
                                    <Text
                                        textAlign={{
                                            md: "right",
                                        }}
                                    >
                                        Actions
                                    </Text>
                                </SimpleGrid>
                                <SimpleGrid
                                    spacingY={3}
                                    columns={{
                                        base: 1,
                                        md: 4,
                                    }}
                                    w="full"
                                    py={2}
                                    px={10}
                                    fontWeight="hairline"
                                >
                                    <span>{token.name}</span>
                                    <Text
                                        textOverflow="ellipsis"
                                        overflow="hidden"
                                        whiteSpace="nowrap"
                                    >
                                        {token.created}
                                    </Text>
                                    <Flex>
                                        <Button
                                            size="sm"
                                            variant="solid"
                                            leftIcon={<Icon as={AiTwotoneLock} />}
                                            colorScheme="purple"
                                        >
                                            View Profile
                                        </Button>
                                    </Flex>
                                    <Flex
                                        justify={{
                                            md: "end",
                                        }}
                                    >
                                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                                            <IconButton
                                                colorScheme="blue"
                                                icon={<BsBoxArrowUpRight />}
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
                <Stack
                    direction={{
                        base: "column",
                    }}
                    w="full"
                    bg={{
                        md: bg,
                    }}
                    shadow="lg"
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
                            >
                                <SimpleGrid
                                    spacingY={3}
                                    columns={{
                                        base: 1,
                                        md: 4,
                                    }}
                                    w={{
                                        base: 120,
                                        md: "full",
                                    }}
                                    textTransform="uppercase"
                                    bg={bg3}
                                    color={"gray.500"}
                                    py={{
                                        base: 1,
                                        md: 4,
                                    }}
                                    px={{
                                        base: 2,
                                        md: 10,
                                    }}
                                    fontSize="md"
                                    fontWeight="hairline"
                                >
                                    <span>Name</span>
                                    <span>Created</span>
                                    <span>Data</span>
                                    <Text
                                        textAlign={{
                                            md: "right",
                                        }}
                                    >
                                        Actions
                                    </Text>
                                </SimpleGrid>
                                <SimpleGrid
                                    spacingY={3}
                                    columns={{
                                        base: 1,
                                        md: 4,
                                    }}
                                    w="full"
                                    py={2}
                                    px={10}
                                    fontWeight="hairline"
                                >
                                    <span>{token.name}</span>
                                    <Text
                                        textOverflow="ellipsis"
                                        overflow="hidden"
                                        whiteSpace="nowrap"
                                    >
                                        {token.created}
                                    </Text>
                                    <Flex>
                                        <Button
                                            size="sm"
                                            variant="solid"
                                            leftIcon={<Icon as={AiTwotoneLock} />}
                                            colorScheme="purple"
                                        >
                                            View Profile
                                        </Button>
                                    </Flex>
                                    <Flex
                                        justify={{
                                            md: "end",
                                        }}
                                    >
                                        <ButtonGroup variant="solid" size="sm" spacing={3}>
                                            <IconButton
                                                colorScheme="blue"
                                                icon={<BsBoxArrowUpRight />}
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
            </Flex>
        </Flex>
    );
};



export default SettingsChannel;
