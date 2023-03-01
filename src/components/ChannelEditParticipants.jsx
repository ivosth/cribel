import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Button,
    useDisclosure,
    Flex,
    IconButton,
    Hide,
    Text,
    Spacer,
    Icon
} from "@chakra-ui/react";
import { API } from 'aws-amplify'
import { updateChannel } from "../graphql/mutations";
import { getChannel } from "../graphql/customQueries";
import { useState } from "react";
import { HiOutlineUserRemove, HiUserGroup , HiOutlineUserPlus} from "react-icons/hi";


function ChannelEditParticipants(props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [channel, setChannel] = useState({})

    function handleClick() {
        fectchChannel();
        onOpen();
    }

    async function fectchChannel() {
        try {
            const channel = await API.graphql({ query: getChannel, variables: { id: props.channelID } })
            setChannel(channel.data.getChannel)
        } catch (err) {
            console.log('error: ', err)
        }
    }


    async function editParticipantsChannel() {
        try {
            const editParticipantsChannelInput = {

            }
            await API.graphql({ query: updateChannel, variables: { input: editParticipantsChannelInput } })

        } catch (err) {
            console.log('error: ', err)
        }

    }

    return (
        <>

            <IconButton
                colorScheme="blue"
                icon={<HiUserGroup />}
                aria-label="Up"
                onClick={handleClick}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <form
                            id="edit-channel-participants"
                            onSubmit={(event) => {
                                event.preventDefault();
                                //console.log(event.target[0].value, event.target[1].value)
                                //console.log(content)
                                //editParticipantsChannel()


                                onClose();
                            }}
                        >
                            <Text fontSize="xl" fontWeight="bold">PARTICIPANTS</Text>
                            <Text fontSize="lg" fontWeight="bold">Current participants</Text>
                            {channel.participants != undefined ? channel.participants.items.map((participant) => {
                                return (
                                    <Flex key={participant.id} shadow="lg" rounded="lg" p="0.25rem" my="0.25rem" _light={{ bg: "gray.50" }} _dark={{ bg: "gray.800" }}>
                                        <Text mx="0.5rem" mt="0.25rem">{participant.user.givenName} {participant.user.familyName}</Text>
                                        <Spacer />
                                        <IconButton
                                            mx="0.5rem"
                                            colorScheme="red"
                                            icon={<HiOutlineUserRemove />}
                                        />
                                    </Flex>
                                );
                            }) : null}



                        </form>
                        <form
                            id="search-user"
                            onSubmit={(event) => {
                                event.preventDefault();
                                console.log(event.target[0].value, event.target[1].value)
                            }}
                        >
                            <Text fontSize="lg" fontWeight="bold" mt="1rem">Search user to add as participant</Text>
                            <Text fontSize="md" >This participant will be notified</Text>

                            <FormControl>
                                <FormLabel>Given name</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl mt="0.5rem">
                                <FormLabel>Family name</FormLabel>
                                <Input />
                            </FormControl>
                            <Button type="submit" mt="0.5rem" ml="0.5rem" form="search-user">
                                Search
                            </Button>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" mr={3} form="edit-channel-participants">
                            Submit
                        </Button>
                        <Button colorScheme="blue" onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


export default ChannelEditParticipants;
