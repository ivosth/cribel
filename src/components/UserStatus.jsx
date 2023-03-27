import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Icon,
    ModalFooter,
    Button,
    useDisclosure,
    Flex,
    Hide,
    Text
} from "@chakra-ui/react";
import { API } from 'aws-amplify'
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { useState } from "react";

function UserStatus(props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [disabled, setDisabled] = useState(props.disabled)

    async function changeStatus() {
        try {

            await API.graphql({ query: `mutation changeUserStatus { changeUserStatus(id: "${props.userID}", disable: ${!disabled}) }` })
            setDisabled(!disabled)

        } catch (err) {
            console.log('error: ', err)
        }

    }

    return (
        <>

            <Button colorScheme={disabled ? "orange" : "red"} variant="solid" onClick={onOpen}>
                <Flex fontSize="lg" align="center" >
                    {disabled ? <Icon as={AiFillUnlock} size="1.5rem" /> : <Icon as={AiFillLock} size="1.5rem" />}
                    <Hide below='md'>
                        <Text ml="0.3rem" fontSize="md" >{disabled ? "Unlock User" : "Lock User"}</Text>
                    </Hide>
                </Flex>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <form
                            id="disable-user"
                            onSubmit={(event) => {
                                event.preventDefault();
                                //console.log(event.target[0].value, event.target[1].value)
                                //console.log(content)
                                changeStatus()


                                onClose();
                            }}
                        >
                            <FormControl>
                                <FormLabel>Are you sure to {disabled ? "unlock" : "lock"} this user? <br />
                                    {disabled ? "This user will be able to log in to the platform again."
                                        : "The user's access to the platform will be disabled."}
                                </FormLabel>
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="green" type="submit" mr={3} form="disable-user">
                            Yes
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>
                            No
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


export default UserStatus;
