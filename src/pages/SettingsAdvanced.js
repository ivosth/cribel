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
} from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SettingsAdvanced() {
    const letters = ["All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
    const roles = ["All", "Student", "Graduate", "Technical", "Professor"];

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

    return (

        <Box w="full" p={50} alignItems="center" justifyContent="center" mt="2rem">
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
                    }}
                >
                    <FormControl>
                        <Wrap py="0.5rem">
                            <FormLabel>
                                <Text fontSize="xl" fontWeight="bold">
                                    Rol:
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
            <h3>Role is {searchRole} </h3>
            <h3>First Name starts with {searchName} </h3>
            <h3>Last Name starts with {searchLastName} </h3>

        </Box>
    );
}

export default SettingsAdvanced;