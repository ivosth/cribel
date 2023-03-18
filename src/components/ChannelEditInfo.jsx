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
    Wrap,
    Text,
    IconButton,
    Box
} from "@chakra-ui/react";
import awsExports from '../aws-exports'
import { Storage, Auth, API } from 'aws-amplify'
import { updateChannel } from "../graphql/mutations";
import { AiFillEdit } from "react-icons/ai";
import RichEditor from "./RichEditor";
import { useState } from "react";


function ChannelEditPost(props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [content, setContent] = useState("")
    const [channelTopics, setChannelTopics] = useState([])


    function saveContent(content) {
        setContent(content)
    }

    function handleClick() {
        fetchChannelTopics();
        onOpen();
    }

    async function fetchChannelTopics() {
        try {         
            const topics = await API.graphql({ query: `query getChannelTopics {
                getChannel(id: "${props.channelID}") {
                    topics
                }
            }` })
            setChannelTopics(topics.data.getChannel.topics)

        } catch (err) {
            console.error('Error fetching channels topics: ', err)
        }
    }

    async function editInfoChannel(extraTopics, file, description) {
        try {
            const editInfoChannelInput = {}

            // extraTopics contains the topics to add
            // channelTopics contains the current topics
            if (extraTopics !== "") {
                const newTopics = extraTopics.split(",").map((topic) => topic.trim());
                const topics = [...channelTopics, ...newTopics];

                editInfoChannelInput.topics = topics
            }
            if (description) {
                editInfoChannelInput.description = description
            }
            editInfoChannelInput.id = props.channelID
            //console.log(editInfoChannelInput)

            if (file) {
                await Storage.put(file.name, file, { level: 'protected' })
                const creds = await Auth.currentCredentials()
                const url = `https://${awsExports.aws_user_files_s3_bucket}.s3.${awsExports.aws_user_files_s3_bucket_region}.amazonaws.com/protected/${creds.identityId}/${file.name}`
                editInfoChannelInput.image = url
                
            }

            await API.graphql({ query: updateChannel, variables: { input: editInfoChannelInput } })

        } catch (err) {
            console.error('Error updating channel info: ', err)
        }

    }

    return (
        <>

            <IconButton
                colorScheme="green"
                icon={<AiFillEdit />}
                aria-label="Edit"
                onClick={handleClick}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton />
                    </ModalHeader>

                    <ModalBody >
                        <form
                            id="edit-info-channel"
                            onSubmit={(event) => {
                                event.preventDefault();
                                //console.log(event.target[0].value, event.target[1].value)
                                //console.log(content)
                                editInfoChannel(event.target[0].value, event.target[1].files[0] || null, content)


                                onClose();
                            }}
                        >
                            <Text fontSize="md" fontWeight="bold" >Current Topics</Text>
                            <Wrap>
                                {channelTopics.map((topic) => {
                                    return(
                                        <Box
                                        key={topic}
                                        px="0.50rem"
                                        py={1}
                                        marginRight="0.5rem"
                                        bg="gray.600"
                                        color="gray.100"
                                        fontSize="0.8rem" //Más pequeño con xs
                                        fontWeight="700"
                                        textAlign={"center"}
                                        rounded="md"
                                        fontFamily="monospace"
                                        alignContent={"center"}
                                    >
                                        <Text> {topic} </Text>
                                    </Box>
                                    );
                                })}
                            </Wrap>
                            <FormControl mt="1rem">
                                <FormLabel>Add topic (if more than one add comma) <br/>BE CAREFUL, added topics cannot be deleted </FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl mt="1rem">
                                <FormLabel>Change photo</FormLabel>
                                <Input type="file" accept="image/png, image/jpeg" />
                            </FormControl>
                            <FormControl mt="1rem">
                                <FormLabel>Description</FormLabel>
                                <RichEditor saveContent={saveContent} />
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" mr={3} form="edit-info-channel">
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


export default ChannelEditPost;
