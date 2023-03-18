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
} from "@chakra-ui/react";
import awsExports from '../aws-exports'
import { Storage, Auth, API } from 'aws-amplify'
import { updateUser } from "../graphql/mutations";

function ProfileEdit(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  async function updateProfile(file, currentPosition, description) {
    let url = null;
    try {
      // Update user in database using mutation given userID
      const newUserInput = {};
      newUserInput.id = props.userID;
      if (file) {
        await Storage.put(file.name, file, { level: 'protected' })
        const creds = await Auth.currentCredentials()
        url = `https://${awsExports.aws_user_files_s3_bucket}.s3.${awsExports.aws_user_files_s3_bucket_region}.amazonaws.com/protected/${creds.identityId}/${file.name}`
        newUserInput.image = url
        props.updateUserNavbar({ image: url })
        console.log(url)
      }
      if (currentPosition) {
        newUserInput.currentPosition = currentPosition
      }
      if (description) {
        newUserInput.description = description
      }

      await API.graphql({ query: updateUser, variables: { input: newUserInput } })
      props.handleUpdateProfile(url, currentPosition, description);
      

    } catch (err) {
      console.log('Error updating user profile: ', err)
    }

  }

  return (
    <>
      <Button variant="solid" colorScheme="blue" size="md" ml={3} onClick={onOpen}>
        Edit Profile
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
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
                updateProfile(event.target[0].files[0] || null, event.target[1].value || null, event.target[2].value || null)
                
                
                onClose();
              }}
            >
              <FormControl>
                <FormLabel>Change photo</FormLabel>
                <Input type="file" accept="image/png, image/jpeg" />
              </FormControl>
              <FormControl>
                <FormLabel>Change position</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Current description</FormLabel>
                <Input />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" mr={3} form="edit-profile">
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


export default ProfileEdit;
