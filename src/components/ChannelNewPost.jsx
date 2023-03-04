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
    Icon,
    Hide,
    Text,
    Select
} from "@chakra-ui/react";
import { API } from 'aws-amplify'
import { createPost } from "../graphql/mutations";
import { MdPostAdd } from "react-icons/md";
import RichEditor from "./RichEditor";
import { useState } from "react";


function ChannelNewPost(props) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [content, setContent] = useState("")
    
    function saveContent(content) {
        setContent(content)
    }
    

    async function newPost(title, topic, content) {
        try {
            const newPostInput = {
                name: title,
                topic: topic,
                content: content,
                channelPostsId: props.channelID,
                userPostsId: props.userID
            }
            await API.graphql({ query: createPost, variables: { input: newPostInput } })

        } catch (err) {
            console.log('error: ', err)
        }

    }

    return (
        <>

            <Button colorScheme="purple" variant="solid" onClick={onOpen}>
                <Flex fontSize="lg" align="center" >
                    <Icon as={MdPostAdd} size="1.5rem" />
                    <Hide below='md'>
                        <Text ml="0.3rem" fontSize="md" >New Post</Text>
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
                            id="new-post"
                            onSubmit={(event) => {
                                event.preventDefault();
                                //console.log(event.target[0].value, event.target[1].value)
                                //console.log(content)
                                newPost(event.target[0].value, event.target[1].value, content)


                                onClose();
                            }}
                        >
                            <FormControl isRequired>
                                <FormLabel>Title</FormLabel>
                                <Input />
                            </FormControl>
                            <FormControl isRequired mt="1rem">
                                <FormLabel>Topic</FormLabel>
                                <Select>
                                    {props.topics.map((topic) => {
                                        return <option key={topic} value={topic}>{topic}</option>
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl isRequired mt="1rem">
                                <FormLabel>Body</FormLabel>
                                <RichEditor saveContent={saveContent}/>
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" mr={3} form="new-post">
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


export default ChannelNewPost;