import {
  Box,
  Flex,
  Avatar,
  HStack,
  VStack,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Icon,
  LinkBox,
  Text,
  Hide,
  useColorMode,
  MenuDivider,
  MenuGroup
} from "@chakra-ui/react";
import { MdHelpOutline, MdOutlineCastForEducation, MdScreenSearchDesktop, MdManageSearch } from "react-icons/md";
import { BsSun, BsMoon, BsGear, BsBoxArrowRight, BsHouseDoor, BsPersonSquare, BsTools } from 'react-icons/bs';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Auth } from "aws-amplify";
import SearchBar from "./SearchBar";
import IconCribel from "./IconCribel";


const NavLink = ({ icon, link, children }) => (
  <Link
    fontSize="lg"
    as={RouterLink}
    to={link}
    p={2}
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


function Navbar({ user }) {

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
                <Flex>
                  <IconCribel marginRight="0.5rem" boxSize="4rem" />
                  <Hide below="xl">
                    <Text marginRight="0.8rem" mt="0.75rem" fontSize="1.6rem">Cribel</Text>
                  </Hide>
                </Flex>
              </Box>
            </LinkBox>
          </Hide>
          <NavLink icon={FaChalkboardTeacher} link={"feed"}>{"feed"}</NavLink>
        </HStack>


        {/************ CHANNELS AND SEARCH *******************/}
        <Flex align="center" px="0.4rem">
          <Menu autoSelect={false}>
            <MenuButton>
              <Flex fontSize="lg" align="center" >
                <Icon as={MdScreenSearchDesktop} />
                <Hide below='md'>
                  <Text ml="0.5rem" onClick={() => console.log(user)}> Channels </Text>
                </Hide>
                <Icon as={FiChevronDown} ml="0.2rem" mr="0.7rem" />
              </Flex>
            </MenuButton>

            <MenuList maxH='20rem' sx={{ overflowY: "scroll" }}>
              <MenuGroup title='Your followed channels'>
                <MenuDivider />
                {user.subscriptions.items.map(channel => (
                  <RouterLink to={`/channel/${channel.channelID}/new`} key={channel.channelID}>
                    <MenuItem>
                      <Avatar size="sm" name={channel.channel.name} mr="0.75rem"
                        src={channel.channel.image || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
                      />
                      <Text fontSize="md"> {channel.channel.name} </Text>
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
                  <Avatar bg="teal.500" size={'sm'} src={user.image} />

                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="center"
                    spacing="1px"
                    ml="2"
                  >

                    <Hide below='lg'>
                      <Text mt="0.25rem" fontSize={["1.1rem", "1.1rem", "0.80rem", "sm", "0.85rem"]}> 
                        {`${user.givenName} ${user.familyName}` || "Nombre Apellido"} 
                      </Text>
                    </Hide>

                    <Hide below='1025px'>
                      <Box
                        px="0.50rem"
                        marginRight="0.5rem"
                        bg="gray.600"
                        color="gray.100"
                        fontSize="0.8rem" //Más pequeño con xs
                        fontWeight="700"
                        textAlign={"center"}
                        rounded="md"
                      >
                        <Text fontSize={["1.1rem", "1.1rem", "0.78rem", "0.80rem", "0.82rem"]}> 
                          {user.role.charAt(0).toUpperCase() + user.role.slice(1) || "Role"} 
                        </Text>
                      </Box>
                    </Hide>


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
                  <Flex>
                    <Icon as={colorMode === 'light' ? BsMoon : BsSun} mt="0.25rem" />
                    <Text ml="0.5rem"> {colorMode === 'light' ? 'Dark' : 'Light'} </Text>
                  </Flex>

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
                    <Flex>
                      <Icon as={BsGear} mt="0.25rem" /> 
                      <Text ml="0.5rem"> Settings </Text>
                    </Flex>
                  </RouterLink>
                </MenuItem>

                <MenuItem
                  _hover={{
                    bg: useColorModeValue("blue.50", "blue.700")
                  }}
                >
                  <RouterLink to="/settings/profile">
                    <Flex ml="0.5rem">
                      <Icon as={BsPersonSquare} mt="0.25rem" /> 
                      <Text ml="0.5rem"> Profile </Text>
                    </Flex>
                  </RouterLink>
                </MenuItem>

                <MenuItem
                  _hover={{
                    bg: useColorModeValue("blue.50", "blue.700")
                  }}
                >
                  <RouterLink to="/settings/channels">
                    <Flex ml="0.5rem">
                      <Icon as={MdOutlineCastForEducation} mt="0.25rem" /> 
                      <Text ml="0.5rem"> Channels </Text>
                    </Flex>
                  </RouterLink>
                </MenuItem>

                <MenuItem
                  _hover={{
                    bg: useColorModeValue("blue.50", "blue.700")
                  }}
                >
                  <RouterLink to="/settings/advanced">
                    <Flex ml="0.5rem">
                      <Icon as={BsTools} mt="0.25rem" /> 
                      <Text ml="0.5rem"> Advanced </Text>
                    </Flex>
                  </RouterLink>
                </MenuItem>

                <MenuItem
                  _hover={{
                    bg: useColorModeValue("blue.50", "blue.700")
                  }}
                >
                  <RouterLink to="/about">
                    <Flex>
                      <Icon as={MdHelpOutline} mt="0.25rem" /> 
                      <Text ml="0.5rem"> About </Text>
                    </Flex>
                  </RouterLink>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={onSignOutHandler}
                  _hover={{
                    bg: useColorModeValue("blue.50", "blue.700")
                  }}
                >
                    <Flex>
                      <Icon as={BsBoxArrowRight} mt="0.25rem" /> 
                      <Text ml="0.5rem"> Logout </Text>
                    </Flex>
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
