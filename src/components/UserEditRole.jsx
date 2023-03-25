import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Flex,
    Hide,
    Text,
    Icon,
    Center,
    Box,
} from "@chakra-ui/react";
import { API } from 'aws-amplify'
import { FaUserTag } from "react-icons/fa";
import { useState } from "react";
import { updateUser } from "../graphql/mutations";

function UserEditRole(props) {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const roles = ["Student", "Graduated", "Technical", "Professor"];
    const [role, setRole] = useState(props.user.role);
    const [roleButton, setRoleButton] = useState(props.user.role);
    const [roleBg, setRoleBg] = useState({ [roleButton]: '#C0C0C0' });


    const handleRoleClick = (event) => {
        const { value } = event.target;
        setRoleButton(value);
        setRoleBg((prevState) => {
            const newState = { ...prevState };
            Object.keys(newState).forEach((role) => (newState[role] = "transparent"));
            newState[value] = "#C0C0C0";
            return newState;
        });
    };

    function handleClose() {
        //setRole(null);
        setRoleButton(null);
        setRoleBg({ [roleButton]: 'transparent' });
        onClose();
    }


    async function updateUserRol() {
        try {

            let oldGroup
            if (role === "student" || role === "graduated" || role === "Student" || role === "Graduated") {
                oldGroup = "viewer"
            } else if (role === "technical" || role === "professor" ||role === "Technical" || role === "Professor") {
                oldGroup = "creator"
            }

            let newGroup
            if (roleButton === "student" || roleButton === "graduated" || roleButton === "Student" || roleButton === "Graduated") {
                newGroup = "viewer"
            } else if (roleButton === "technical" || roleButton === "professor" || roleButton === "Technical" || roleButton === "Professor") {
                newGroup = "creator"
            }
            
            
            await API.graphql({ query: updateUser, variables: { input: { id: props.user.id, role: roleButton.charAt(0).toLowerCase() + roleButton.slice(1), group: newGroup } } })

            if(oldGroup !== newGroup){
                await API.graphql({ query: `mutation changeUserGroup { changeUserGroup(id: "${props.user.id}", group: ${newGroup}) }` })
            }
            
            setRole(roleButton);
            setRoleButton(null);
            setRoleBg({ [roleButton]: 'transparent' });
            props.updateUsersList(props.user.id, roleButton.charAt(0).toLowerCase() + roleButton.slice(1))

        } catch (err) {
            console.error("Error on updating user role: ", err)
        }

    }

    return (
        <>
            <Button colorScheme="blue" variant="solid" onClick={onOpen}>
                <Flex fontSize="lg" align="center" >
                    <Icon as={FaUserTag} size="1.5rem" />
                    <Hide below='md'>
                        <Text ml="0.3rem" fontSize="md" >Change Role</Text>
                    </Hide>
                </Flex>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} m={2}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <form
                            id="edit-profile"
                            onSubmit={(event) => {
                                event.preventDefault();
                                updateUserRol()



                                onClose();
                            }}
                        >
                            <Center mb="1rem">
                                <Text fontSize="lg" fontWeight="bold" mr="1rem">Current Role: </Text>
                                <Box
                                    px="0.50rem"
                                    py={1}
                                    marginRight="0.5rem"
                                    bg="gray.600"
                                    color="gray.100"
                                    fontSize="sm" //Más pequeño con xs
                                    fontWeight="700"
                                    textAlign={"center"}
                                    rounded="md"
                                    fontFamily="monospace"
                                    alignContent={"center"}
                                >
                                    <Text> {role.charAt(0).toUpperCase() + role.slice(1) || "Role"} </Text>
                                </Box>
                            </Center>

                            <Text fontSize="lg" fontWeight="bold" ml="1rem" mb="0.5rem">Change to role: </Text>
                            <Center>
                                <Flex>
                                    {roles.map((roleItem, id) => {
                                        return (
                                            <Box key={id}>
                                                {roleItem !== role.charAt(0).toUpperCase() + role.slice(1) ?
                                                    <Button
                                                        variant="outline"
                                                        colorScheme="teal"
                                                        m="0.5rem"
                                                        value={roleItem}
                                                        onClick={handleRoleClick}
                                                        style={{
                                                            backgroundColor: roleBg[roleItem] || "transparent",
                                                        }}
                                                    >
                                                        {roleItem}
                                                    </Button>
                                                    :
                                                    null
                                                }
                                            </Box>
                                        );
                                    })}
                                </Flex>
                            </Center>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" mr={3} form="edit-profile">
                            Submit
                        </Button>
                        <Button colorScheme="blue" onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


export default UserEditRole;
