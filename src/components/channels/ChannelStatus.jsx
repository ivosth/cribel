import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    IconButton,
    ModalFooter,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { API } from 'aws-amplify'
import { updateChannel } from "../../graphql/mutations";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { useState } from "react";

function ChannelStatus(props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [disabled, setDisabled] = useState(props.disabled)

    async function changeStatus() {
        try {
            const updateChannelInput = {}
            updateChannelInput.id = props.channelID
            updateChannelInput.disabled = !disabled
            await API.graphql({ query: updateChannel, variables: { input: updateChannelInput } })
            setDisabled(!disabled)

        } catch (err) {
            console.error('Error changing status of channel: ', err)
        }

    }

    return (
        <>

            <IconButton
                colorScheme={disabled ? "orange" : "red"}
                icon={disabled ? <AiFillUnlock /> : <AiFillLock />}
                aria-label="Delete"
                onClick={onOpen}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <form
                            id="delete-channel"
                            onSubmit={(event) => {
                                event.preventDefault();
                                changeStatus()

                                onClose();
                            }}
                        >
                            <FormControl>
                                <FormLabel>Are you sure to {disabled ? "activate" : "deactivate"} this channel? <br />
                                    {disabled ? "Participants will be able to post on the channel again."
                                        : "Participants will no longer be able to post but users will still be able to view the channel and the posts."}
                                </FormLabel>
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="green" type="submit" mr={3} form="delete-channel">
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


export default ChannelStatus;
