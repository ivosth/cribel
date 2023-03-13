import {
    Flex,
    useColorModeValue,
    Icon,
    Text,
    Stack,
    Button,
    SimpleGrid,
    ButtonGroup,
    IconButton,
    Box,
    Hide,
    Wrap,
    WrapItem,
    Select,
    MenuItem,
    FormControl,
    FormLabel,
    Input,
    Spacer,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { listUsersWithFilters } from "../graphql/customQueries";
import { API } from "aws-amplify";
import { CircularProgress } from "@chakra-ui/react";
import { AiTwotoneLock, AiFillEdit, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { MdPeopleOutline, MdStar } from "react-icons/md";
import { BiMessageAdd } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";

function SettingsAdvanced() {
    const letters = ["All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    const roles = ["All", "Student", "Graduated", "Technical", "Professor"];
    const bg = useColorModeValue("gray.100", "gray.600");
    const bg2 = useColorModeValue("gray.50", "gray.800");


    const [nameLetter, setNameLetter] = useState('All');
    const [nameLetterBg, setNameLetterBg] = useState({ [nameLetter]: '#C0C0C0' });
    const [lastNameLetter, setLastNameLetter] = useState('All');
    const [lastNameLetterBg, setLastNameLetterBg] = useState({ [lastNameLetter]: '#C0C0C0' });
    const [role, setRole] = useState("All");
    const [roleBg, setRoleBg] = useState({ [role]: '#C0C0C0' });

    const [searchParams, setSearchParams] = useSearchParams();
    const searchRole = searchParams.get("role");
    const searchName = searchParams.get("name");
    const searchLastName = searchParams.get("lastName");

    const handleNameClick = (event) => {
        const { value } = event.target;
        setNameLetter(value);
        setNameLetterBg((prevState) => {
            const newState = { ...prevState };
            Object.keys(newState).forEach(
                (letter) => (newState[letter] = "transparent")
            );
            newState[value] = "#C0C0C0";
            return newState;
        });
    };

    const handleLastNameClick = (event) => {
        const { value } = event.target;
        setLastNameLetter(value);
        setLastNameLetterBg((prevState) => {
            const newState = { ...prevState };
            Object.keys(newState).forEach(
                (letter) => (newState[letter] = "transparent")
            );
            newState[value] = "#C0C0C0";
            return newState;
        });
    };

    const handleRoleClick = (event) => {
        const { value } = event.target;
        setRole(value);
        setRoleBg((prevState) => {
            const newState = { ...prevState };
            Object.keys(newState).forEach((role) => (newState[role] = "transparent"));
            newState[value] = "#C0C0C0";
            return newState;
        });
    };


    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);


    const obtainListUsersWithFilters = async () => {
        setLoading(true);

        const filterExpression = {};
        if (nameLetter !== 'All') {
            filterExpression.givenName = { beginsWith: nameLetter };
        }
        if (lastNameLetter !== 'All') {
            filterExpression.familyName = { beginsWith: lastNameLetter };
        }
        if (role !== 'All') {
            filterExpression.role = { eq: role.charAt(0).toLowerCase() + role.slice(1) };
        }

        const usersWithFilters = await API.graphql({
            query: listUsersWithFilters,
            variables: {
                filter: filterExpression
            },

        })

        setLoading(false);
        console.log(usersWithFilters.data.listUsers.items)
        setUsers(usersWithFilters.data.listUsers.items);
    };


    return (

        <Box w="full" px={50} alignItems="center" justifyContent="center" >
            {/*********** SEARCH USERS BY INITIAL LETTERS *******************/}
            <Box>
                <Text fontSize="3xl" fontWeight="bold">
                    Users Administration
                </Text>
                <form
                    id="search-users"
                    onSubmit={(event) => {
                        event.preventDefault();
                        console.log(nameLetter, lastNameLetter, role);
                        setSearchParams({ name: nameLetter, lastName: lastNameLetter, role: role });

                        obtainListUsersWithFilters();
                    }}
                >
                    <FormControl>
                        <Wrap py="0.5rem">
                            <FormLabel>
                                <Text fontSize="xl" fontWeight="bold">
                                    Role:
                                </Text>
                            </FormLabel>
                            {roles.map((role) => (
                                <Button
                                    variant="outline"
                                    colorScheme="teal"
                                    key={role}
                                    value={role}
                                    onClick={handleRoleClick}
                                    style={{
                                        backgroundColor: roleBg[role] || "transparent",
                                    }}
                                >
                                    {role}
                                </Button>
                            ))}
                        </Wrap>
                    </FormControl>

                    <FormControl>
                        <Wrap py="0.5rem">
                            <FormLabel>
                                <Text fontSize="xl" fontWeight="bold">
                                    First Name:
                                </Text>
                            </FormLabel>
                            {letters.map((letter) => (
                                <Button
                                    variant="outline"
                                    colorScheme="teal"
                                    key={letter}
                                    value={letter}
                                    onClick={handleNameClick}
                                    style={{
                                        backgroundColor:
                                            nameLetterBg[letter] || "transparent",
                                    }}
                                >
                                    {letter}
                                </Button>
                            ))}
                        </Wrap>
                    </FormControl>
                    <FormControl>
                        <Wrap py="0.5rem">
                            <FormLabel>
                                <Text fontSize="xl" fontWeight="bold">
                                    Last Name:&nbsp;
                                </Text>
                            </FormLabel>
                            {letters.map((letter) => (
                                <Button
                                    variant="outline"
                                    colorScheme="teal"
                                    key={letter}
                                    value={letter}
                                    onClick={handleLastNameClick}
                                    style={{
                                        backgroundColor:
                                            lastNameLetterBg[letter] || "transparent",
                                    }}
                                >
                                    {letter}
                                </Button>
                            ))}
                        </Wrap>
                    </FormControl>
                </form>

                <Button type="submit" mr={3} form="search-users">
                    Submit
                </Button>
            </Box>

            {/************** LIST OF USERS *******************/}
            {loading ?
                <div className="centerLoading">
                    <CircularProgress isIndeterminate size="20rem" />
                </div>
                :

                <Box>
                    <Flex
                        w="full"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box
                            w="2xl"
                            mx="auto"

                            _dark={{
                                bg: "gray.800",
                            }}


                        >
                            <Text fontSize="xl" fontWeight="bold">Search results: </Text>
                            <Stack
                                direction={{
                                    base: "column",
                                }}
                                w="full"
                                bg={{
                                    md: bg,
                                }}
                                rounded="lg"
                                py="1rem"
                                spacing='1rem' //padding between elements
                            >


                                {users.length > 0 ?
                                    users.map(user => {
                                        return (
                                            <Flex
                                                direction={{
                                                    base: "row",
                                                    md: "column",
                                                }}
                                                bg={bg2}
                                                key={user.id}
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
                                                    py={3}
                                                    px="0.25rem"
                                                    fontWeight="hairline"
                                                >
                                                    <Box>
                                                        <RouterLink to={`/profile/${user.id}`}>
                                                            <Text fontSize={{ base: 'sm', sm: 'sm', md: 'md', lg: 'md', xl: 'md' }} mx="1rem">
                                                                {`${user.givenName} ${user.familyName}` || "Nombre Apellido"}
                                                            </Text>
                                                        </RouterLink>

                                                        <Box
                                                            display={{ base: "flex", md: "none" }}
                                                            px="0.50rem"
                                                            py={1}
                                                            bg="gray.600"
                                                            color="gray.100"
                                                            fontSize="xs" //Más pequeño con xs
                                                            fontWeight="700"
                                                            alignItems='center'
                                                            justifyContent='center'
                                                            rounded="md"
                                                            mx="2rem"
                                                        >
                                                            <Text fontSize="sm"> {user.role.charAt(0).toUpperCase() + user.role.slice(1) || "Role"} </Text>
                                                        </Box>
                                                    </Box>

                                                    <Flex
                                                        justify={{
                                                            md: "end",
                                                            sm: "end",
                                                            base: "end",
                                                        }}
                                                    >
                                                        <Box
                                                            display={{ base: "none", md: "flex" }}
                                                            px="0.50rem"
                                                            py={1}
                                                            bg="gray.600"
                                                            color="gray.100"
                                                            fontSize="xs" //Más pequeño con xs
                                                            fontWeight="700"
                                                            alignItems='center'
                                                            justifyContent='center'
                                                            rounded="md"
                                                        >
                                                            <Text fontSize="sm"> {user.role.charAt(0).toUpperCase() + user.role.slice(1) || "Role"} </Text>
                                                        </Box>

                                                        <ButtonGroup variant="solid" size="sm" mx="0.5rem" spacing={3} alignItems='center'>
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
                                    })
                                    :
                                    <Text as="h2" px={2} fontSize="lg" >
                                        No users found
                                    </Text>

                                }
                            </Stack>
                        </Box>
                    </Flex>
                </Box>
            }
        </Box>


    );
}

export default SettingsAdvanced;