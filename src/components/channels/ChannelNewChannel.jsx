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
    Center,
} from "@chakra-ui/react";
import { createChannel } from "../../graphql/mutations";
import { MdOutlineLibraryAdd } from "react-icons/md";
import RichEditor from "../common/RichEditor";
import { useState } from "react";
import awsExports from '../../aws-exports'
import { Storage, Auth, API } from 'aws-amplify'

function ChannelNewChannel(props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [content, setContent] = useState("")

    function saveContent(content) {
        setContent(content)
    }


    async function newChannel(title, topics, file) {
        try {

            const newChannelInput = {
                avgRating: 0.0,
                typeChannelsByDate: "ChannelsByDate",
                typeChannelsByRating: "ChannelsByRating",
                disabled: false,
                name: title,
                userOwnedChannelsId: props.userID,
            }

            const topicsList = topics.split(",").map((topic) => topic.trim());
            newChannelInput.topics = topicsList

            if (content) {
                newChannelInput.description = content
            }

            if (file) {
                await Storage.put(file.name, file, { level: 'protected' })
                const creds = await Auth.currentCredentials()
                const url = `https://${awsExports.aws_user_files_s3_bucket}.s3.${awsExports.aws_user_files_s3_bucket_region}.amazonaws.com/protected/${creds.identityId}/${file.name}`
                newChannelInput.image = url

            }
            await API.graphql({ query: createChannel, variables: { input: newChannelInput } })

        } catch (err) {
            console.error('Error on creation of new channel: ', err)
        }

    }

    return (
        <>

            <Center>
                <Button leftIcon={<MdOutlineLibraryAdd />}
                    colorScheme='teal' size='lg' fontSize="140%" onClick={onOpen}>
                    Create New Channel
                </Button>
            </Center>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody>
                        <form
                            id="new-channel"
                            onSubmit={(event) => {
                                event.preventDefault();
                                newChannel(event.target[0].value, event.target[1].value, event.target[2].files[0])

                                onClose();
                            }}
                        >
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl isRequired mt="1rem">
                                <FormLabel>Topic (if more than one add comma) <br />BE CAREFUL, added topics cannot be deleted </FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl mt="1rem">
                                <FormLabel>Image</FormLabel>
                                <Input type="file" accept="image/png, image/jpeg" />
                            </FormControl>
                            <FormControl mt="1rem">
                                <FormLabel>Description</FormLabel>
                                <RichEditor saveContent={saveContent} />
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" mr={3} form="new-channel">
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


export default ChannelNewChannel;
