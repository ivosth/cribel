import {
  Box,
  Flex,
  Avatar,
  HStack,
  VStack,
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
  useColorMode,
  MenuDivider,
  Image,
  MenuGroup
} from "@chakra-ui/react";
import { MdConnectWithoutContact, MdHelpOutline, MdOutlineLocalPostOffice, MdScreenSearchDesktop, MdManageSearch } from "react-icons/md";
import { BsSun, BsMoon, BsGear, BsBoxArrowRight, BsHouseDoor } from 'react-icons/bs';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Auth } from "aws-amplify";
import SearchBar from "./SearchBar";
import { channels } from "./Static";
import IconCribel from "./IconCribel";


const NavLink = ({ icon, link, children }) => (
  <Link
    fontSize="lg"
    as={RouterLink}
    to={link}
    py={1}
    rounded={"md"}
    _hover={{
      bg: useColorModeValue("blue.100", "blue.600"),
    }}
  //_focus={{ boxShadow: "none" }}
  >

    {/*children.toUpperCase()*/}

    <Flex align="center" >
      <Icon as={icon} />
      <Hide below='md'>
        <Text marginLeft="0.5rem">
          {children.charAt(0).toUpperCase() + children.slice(1)}
        </Text>
      </Hide>

    </Flex>
  </Link>
);


function Navbar({ id, role, username, profilePic }) {

  const onSignOutHandler = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.error("Error signing out user", err);
    }
  };

  //const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      px={3}
      fontFamily="monospace"
      borderWidth="1px"
      boxShadow="md"
    >

      {/**************** LOGO AND HOME ************************/}
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        {/*<IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />*/}
        <HStack alignItems={"center"}>
          <Hide below="md">
            <LinkBox as={RouterLink} to="/">
              <Box fontSize="xl" fontWeight="bold">
                <IconCribel marginRight="0.5rem" boxSize="4rem"/>
                <Hide below="lg">
                  <LinkOverlay marginRight="0.8rem" fontSize={["1.1rem", "1.1rem", "1.1rem", "1.1rem", "1.6rem"]}>Cribel</LinkOverlay>
                </Hide>
              </Box>
            </LinkBox>
          </Hide>
          <NavLink icon={BsHouseDoor} link={"posts"}>{"home"}</NavLink>
        </HStack>


        {/************ CHANNELS AND SEARCH *******************/}
        <Flex align="center" px="0.4rem">
          <Menu autoSelect={false}>
            <MenuButton>
              <Flex fontSize="lg" align="center" >
                <Icon as={MdScreenSearchDesktop} />
                <Hide below='md'>
                  <Text ml="0.5rem"> Channels </Text>
                </Hide>
                <Icon as={FiChevronDown} ml="0.2rem" mr="0.7rem" />
              </Flex>
            </MenuButton>

            <MenuList maxH='20rem' sx={{ overflowY: "scroll" }}>
              <MenuGroup title='Your followed channels'>
                <MenuDivider />
                {channels.map((channel, id) => (
                  <RouterLink to={`/channel/${channel.id}`}>
                    <MenuItem key={id}>
                      <Avatar size="sm" name={channel.name} src={channel.image} mr="0.75rem" />
                      <Text> {channel.name} </Text>
                    </MenuItem>
                  </RouterLink>
                ))}
              </MenuGroup>

            </MenuList>
          </Menu>
          <SearchBar />
        </Flex>


        {/************ EXPLORE, NOTIFICATION AND PROFILE *************/}
        <HStack>
          {/************ EXPLORE AND NOTIFICATION *************/}
          <NavLink icon={MdManageSearch} link={"explore"}>{"explore"}</NavLink>
          <IconButton
            size="lg"
            variant="ghost"
            color={useColorModeValue("gray.600", "gray.200")}
            aria-label="open menu"
            icon={<FiBell />}
          />

          {/********** PROFILE *************/}
          <Flex alignItems={'center'}>
            <Menu autoSelect={false}>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack>
                  {profilePic != null ?
                    <Avatar size={'sm'} src={profilePic} />
                    :
                    <Avatar size={'sm'} bg="grey" />
                  }

                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    {username != null ?
                      <Text fontSize="sm"> {username} </Text>
                      :
                      <Text fontSize="sm"> Nombre Apellido </Text>
                    }
                    {role != null ?
                      <Text fontSize="xs"> {role} </Text>
                      :
                      <Text fontSize="xs"> Role </Text>
                    }

                  </VStack>

                  <Box display={{ base: 'none', md: 'flex' }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>

              <MenuList minW="8.5rem" rounded="md" fontSize="md">
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
                  <RouterLink to="/settings">
                    <Text> <Icon as={BsGear} /> Settings</Text>
                  </RouterLink>
                </MenuItem>
                <MenuItem
                  _hover={{
                    bg: useColorModeValue("blue.50", "blue.700")
                  }}
                >
                  <RouterLink to="/about">
                  <Text> <Icon as={MdHelpOutline} /> About </Text>
                  </RouterLink>
                </MenuItem>
                <MenuDivider />
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


        </HStack>
      </Flex>


      {/*isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavLink icon={BsHouseDoor} link={"posts"}>{"home"}</NavLink>
          </Stack>
        </Box>
      ) : null*/}
    </Box>
  );
}
export default Navbar;
