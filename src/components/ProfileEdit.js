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

  
function ProfileEdit() {
    const { isOpen, onClose, onOpen } = useDisclosure();
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
                id="new-note"
                onSubmit={(event) => {
                  event.preventDefault();
                  console.log(event.target[0].files[0]);
                  console.log(event.target[1].value);
                  onClose();
                }}
              >
                <FormControl>
                  <FormLabel>Change photo</FormLabel>
                  <Input type="file" accept="image/png, image/jpeg" />
                </FormControl>
                <FormControl>
                  <FormLabel>Change description</FormLabel>
                  <Input />
                </FormControl>
              </form>
            </ModalBody>
  
            <ModalFooter>
              <Button type="submit" mr={3} form="new-note">
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
  