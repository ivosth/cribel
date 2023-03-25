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
    Text,
    Spacer
} from "@chakra-ui/react";
import { API } from 'aws-amplify'
import { deleteUsersParticipantChannels, createUsersParticipantChannels } from "../graphql/mutations";
import { getChannel, listUsersWithFilters } from "../graphql/customQueries";
import { useState } from "react";
import { HiOutlineUserRemove, HiUserGroup } from "react-icons/hi";
import { HiOutlineUserPlus } from "react-icons/hi2";

function ChannelEditParticipants(props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [channel, setChannel] = useState({})
    const [searchUsers, setSearchUsers] = useState(null)

    function handleClick() {
        fetchChannel();
        onOpen();
    }

    function handleClose() {
        setSearchUsers(null)
        onClose();
    }

    async function fetchChannel() {
        try {
            const channel = await API.graphql({ query: getChannel, variables: { id: props.channelID } })
            setChannel(channel.data.getChannel)
            //console.log(channel.data.getChannel)
        } catch (err) {
            console.error('Error fetching channels editing participants: ', err)
        }
    }


    async function eliminateParticipant(id) {
        try {
            await API.graphql({ query: deleteUsersParticipantChannels, variables: { input: { id: id } } })
            // Update channel.participants react state without refetching
            const newParticipants = channel.participants.items.filter((participant) => participant.id !== id)
            setChannel({ ...channel, participants: { items: newParticipants } })
        } catch (err) {
            console.error('Error eliminating participant: ', err)
        }
    }

    async function searchNewParticipant(givenName, familyName) {
        try {
            const filterExpression = {};
            if (givenName) {
                filterExpression.givenName = { beginsWith: givenName.charAt(0).toUpperCase() + givenName.slice(1) }
            }
            if (familyName) {
                filterExpression.familyName = { beginsWith: familyName.charAt(0).toUpperCase() + familyName.slice(1) }
            }
            // only proffesors and technicians can be added as participants
            filterExpression.or = [
                { role: { eq: "professor" } },
                { role: { eq: "technical" } }
            ];

            const users = await API.graphql({ query: listUsersWithFilters, variables: { filter: filterExpression } })
            // Don't show users that are already participants nor the owner of the channel
            const newUsers = users.data.listUsers.items.filter((user) => {
                return !channel.participants.items.some((participant) => participant.userParticipantChannelsId === user.id) && user.id !== channel.userOwnedChannelsId
            })
            
            setSearchUsers(newUsers)

        } catch (err) {
            console.error('Error searching new participant: ', err)
        }
    }

    async function addParticipant(userID, givenName, familyName) {
        try {
            const newParticipant = {
                channelParticipantsId: props.channelID,
                userParticipantChannelsId: userID
            }
            const result = await API.graphql({ query: createUsersParticipantChannels, variables: { input: newParticipant } })
            
            // Update channel.participants react state without refetching adding givenName and FamilyName
            newParticipant.id = result.data.createUsersParticipantChannels.id
            newParticipant.user = {}
            newParticipant.user.familyName = familyName
            newParticipant.user.givenName = givenName
            const newParticipants = [...channel.participants.items, newParticipant]
            //console.log("channel.participants.items: ", channel.participants.items)
            //console.log("newParticipants: ", newParticipants)
            setChannel({ ...channel, participants: { items: newParticipants } })
            setSearchUsers(null)
        } catch (err) {
            console.error('Error adding participant: ', err)
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
                        
                            <Text fontSize="xl" fontWeight="bold">PARTICIPANTS</Text>
                            <Text fontSize="lg" fontWeight="bold">Current participants</Text>
                            {channel.participants !== undefined ? channel.participants.items.map((participant) => {
                                return (
                                    <Flex key={participant.id} shadow="lg" rounded="lg" p="0.25rem" my="0.25rem" _light={{ bg: "gray.50" }} _dark={{ bg: "gray.800" }}>
                                        <Text mx="0.5rem" mt="0.25rem">{participant.user.givenName} {participant.user.familyName}</Text>
                                        <Spacer />
                                        <IconButton
                                            mx="0.5rem"
                                            colorScheme="red"
                                            icon={<HiOutlineUserRemove />}
                                            onClick={ () => eliminateParticipant(participant.id)}
                                        />
                                    </Flex>
                                );
                            }) : null}

                        
                        <form
                            id="search-user"
                            onSubmit={(event) => {
                                event.preventDefault();

                                searchNewParticipant(event.target[0].value, event.target[1].value)
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
                            <Button type="submit" my="0.5rem" ml="0.5rem" form="search-user">
                                Search
                            </Button>
                            
                            {searchUsers !== null && searchUsers.length >0 ? searchUsers.map((user) => {
                                return (
                                    <Flex key={user.id} shadow="lg" rounded="lg" p="0.25rem" my="0.25rem" _light={{ bg: "gray.50" }} _dark={{ bg: "gray.800" }}>
                                        <Text mx="0.5rem" mt="0.25rem">{user.givenName} {user.familyName}</Text>
                                        <Spacer />
                                        <IconButton
                                            mx="0.5rem"
                                            colorScheme="green"
                                            icon={<HiOutlineUserPlus />}
                                            onClick={ () => addParticipant(user.id, user.givenName, user.familyName)}
                                        />
                                    </Flex>
                                );
                            }) : null}

                        </form>
                    </ModalBody>

                    <ModalFooter>
                        
                        <Button colorScheme="blue" onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


export default ChannelEditParticipants;
