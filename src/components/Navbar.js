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
  Image
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { MdConnectWithoutContact, MdHelpOutline, MdOutlineLocalPostOffice, MdScreenSearchDesktop, MdManageSearch } from "react-icons/md";
import { BsSun, BsMoon, BsGear, BsBoxArrowRight, BsHouseDoor } from 'react-icons/bs';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { Link as RouterLink } from "react-router-dom";
import { Auth } from "aws-amplify";
import SearchBar from "./SearchBar";

const LinkItems = [
  { name: 'home', icon: BsHouseDoor },
  { name: 'channels', icon: MdScreenSearchDesktop },
  //{ name: 'about', icon: MdHelpOutline },
  { name: 'posts', icon: MdOutlineLocalPostOffice },
];
const NavLink = ({ icon, link, children }) => (
  <Link
    fontSize="lg"
    as={RouterLink}
    to={link}
    px={2}
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
            <LinkBox>
              <Box fontSize="xl" fontWeight="bold">                  
                <Icon as={MdConnectWithoutContact} marginRight="0.5rem" />
                <LinkOverlay as={RouterLink} to="/">App TFG</LinkOverlay>
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
                  <Text mx="0.5rem"> Channels </Text>
                </Hide>
                <Icon as={FiChevronDown} mx="0.3rem" />
              </Flex> 
            </MenuButton>
            <MenuList h='20rem' sx={{overflowY:"scroll"}}>
              <MenuItem minH='48px'>
                <Image
                  boxSize='2rem'
                  borderRadius='full'
                  src='https://placekitten.com/100/100'
                  alt='Fluffybuns the destroyer'
                  mr='12px'
                />
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <span>Simon the pensive</span>
              </MenuItem>
              <MenuItem minH='48px'>
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <span>Simon the pensive</span>
              </MenuItem>
              <MenuItem minH='48px'>
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <span>Simon the pensive</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <span>Simon the pensive</span>
              </MenuItem>
              <MenuItem minH='48px'>
                <span>Fluffybuns the Destroyer</span>
              </MenuItem>
              <MenuItem minH='40px'>
                <span>Simon the pensive</span>
              </MenuItem>
            </MenuList>
          </Menu>
          <SearchBar />
        </Flex>


        {/************ EXPLORE, NOTIFICATION AND PROFILE *************/}
        <HStack>
          <NavLink icon={MdManageSearch} link={"channels"}>{"explore"}</NavLink>
          <IconButton
            size="lg"
            variant="ghost"
            color = {useColorModeValue("gray.600", "gray.200")}
            aria-label="open menu"
            icon={<FiBell />}
          />
          <Flex alignItems={'center'}>
            <Menu autoSelect={false}>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.vexels.com/content/145922/preview/female-avatar-maker-2b76c7.png'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">Justina Clark</Text>
                    <Text fontSize="xs">
                      Admin
                    </Text>
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
                <Text> <Icon as={BsGear} /> Settings</Text>
              </MenuItem>

              <MenuItem
                _hover={{
                  bg: useColorModeValue("blue.50", "blue.700")
                }}
              >
                <Text> <Icon as={MdHelpOutline} /> About</Text>
              </MenuItem>
              <MenuDivider/>
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
