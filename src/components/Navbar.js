import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
  LinkOverlay,
  LinkBox,
  Text,
  Hide,
  useColorMode
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdConnectWithoutContact, MdHelpOutline, MdOutlineLocalPostOffice, MdScreenSearchDesktop  } from "react-icons/md";
import { BsSun, BsMoon, BsGear, BsBoxArrowRight } from 'react-icons/bs';
import { Link as RouterLink } from "react-router-dom";
import { Auth } from "aws-amplify";


const LinkItems = [
  { name: 'channels', icon: MdScreenSearchDesktop },
  { name: 'about', icon: MdHelpOutline },
  { name: 'posts', icon: MdOutlineLocalPostOffice },
];
const NavLink = ({ icon, children }) => (
  <Link
    fontSize="lg"
    as={RouterLink}
    to={children}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      bg: useColorModeValue("blue.50", "blue.700")
    }}
    _active={{
      bg: useColorModeValue("blue.50", "blue.700")
    }}
    _visited={{
      bg: useColorModeValue("blue.50", "blue.700")
    }}
    _focus={{ boxShadow: "none" }}

  >
    {/*children.toUpperCase()*/}
    <Flex align="center" px="1rem" >
      <Icon as={icon} marginRight="0.5rem" />
      {children.charAt(0).toUpperCase() + children.slice(1)}
    </Flex>
  </Link>
);


function Navbar({ email }) {

  const onSignOutHandler = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.error("Error signing out user", err);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      px={4}
      fontFamily="monospace"
      borderWidth="1px"
      boxShadow="md"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <LinkBox>
            <Box fontSize="xl" fontWeight="bold">
              <Icon as={MdConnectWithoutContact} marginRight="0.5rem" />
              <LinkOverlay as={RouterLink} to="/">Serverless App</LinkOverlay>
            </Box>
          </LinkBox>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            {LinkItems.map((link) => (
              <NavLink key={link.name} icon={link.icon}>{link.name}</NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Hide below='md'>
            <Text p={5} fontSize="md"> {email} </Text>
          </Hide>
          <Menu autoSelect={false}>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
              //_focus={{ boxShadow: "0 0 1px 2px rgb(241, 90, 34)" }}
              boxShadow="none"
              borderRadius="0"
              //_focus={{ boxShadow: "0 0 1px 2px rgb(200, 200, 4)" }}
              _active={{ borderColor: "grey", boxShadow: "0 0 2px 2px grey" }}
            >
              <Avatar size={"sm"} bg="grey" />
            </MenuButton>
            <MenuList minW="8.5rem" w={"100px"} rounded="md" fontSize="md">

              <MenuItem
                onClick={toggleColorMode}
                _hover={{
                  bg: useColorModeValue("blue.50", "blue.700")
                }}
              >
                {colorMode === 'light' ?
                  <Text fontWeight='normal'> <Icon as={BsMoon} /> Dark</Text>
                  :
                  <Text fontWeight='normal'> <Icon as={BsSun} /> Light</Text>
                }
              </MenuItem>

              <MenuItem
                _hover={{
                  bg: useColorModeValue("blue.50", "blue.700")
                }}
              /*
              _active={{
                bg: useColorModeValue("#D3D3D3", "rgba(0, 0, 0, 0.20)")
              }}
              _expanded={{
                bg: useColorModeValue("#D3D3D3", "rgba(0, 0, 0, 0.20)")
              }}*/
              >
                <Text> <Icon as={BsGear} /> Settings</Text>
              </MenuItem>
              <MenuItem onClick={onSignOutHandler}
                _hover={{
                  bg: useColorModeValue("blue.50", "blue.700")
                }}
              >
                <Text> <Icon as={BsBoxArrowRight} /> Logout</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {LinkItems.map((link) => (
              <NavLink key={link.name} icon={link.icon}>{link.name}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
export default Navbar;
