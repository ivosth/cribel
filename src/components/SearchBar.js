import {
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    InputGroup,
    InputRightElement,
    Avatar,
    Text,
    Link
  } from "@chakra-ui/react";
  import * as React from "react";
  import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
  } from "@choc-ui/chakra-autocomplete";
  import { MdOutlineSearch, MdOutlineYoutubeSearchedFor } from "react-icons/md";
  import { Link as RouterLink } from "react-router-dom";

  function SearchBar() {
    const channels = [
        { name: "3D Printing", image: "https://imageio.forbes.com/specials-images/imageserve/5f1a62d942a6387efb759310/What-Can-3D-Printing-Be-Used-For--Here-Are-10-Amazing-Examples/960x0.jpg?format=jpg&width=960" },
        { name: "Web Programming", image: "https://intellipaat.com/blog/wp-content/uploads/2020/04/postimage-2.jpg" },
        { name: "Python", image: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" },
        { name: "Competitions", image: "https://static.wixstatic.com/media/a44da8_fd6bed84d4234271aa6c53350d454b42~mv2.png/v1/fill/w_260,h_260,al_c,q_85,usm_2.00_1.00_0.00,enc_auto/Kaggle%20Competition%20Logo%20Without%20Text.png" },
        { name: "Beginner Projects", image: "https://cdn.imgbin.com/1/17/12/imgbin-computer-icons-sharepoint-for-project-management-others-b3JiLUbngNsUDE4WdxbdP5Xch.jpg" },
      ];
  
    return (
        <Flex >
        <AutoComplete selectOnFocus /*openOnFocus*/ >
        {({ isOpen }) => (
            <>
            <InputGroup>
                <AutoCompleteInput variant="filled" placeholder="Search..." />
                <InputRightElement
                children={
                    <Icon as={isOpen ? MdOutlineYoutubeSearchedFor : MdOutlineSearch } />
                }
                />
            </InputGroup>
            <AutoCompleteList>
                {channels.map((person, oid) => (
                <Link
                    fontSize="lg"
                    as={RouterLink}
                    to={'channels/' + person.name}
                    rounded={"xl"}
                    _hover={{
                        bg: "blue.100",
                    }}
                >
                    <AutoCompleteItem
                        key={`option-${oid}`}
                        value={person.name}
                        //textTransform="capitalize"
                        align="center"
                        rounded={"xl"}
                        _focus={{ bg: "none" }}
                    >

                        <Avatar size="sm" name={person.name} src={person.image} mr="0.75rem"/>
                        {person.name}
                
                </AutoCompleteItem>
              </Link>
            ))}
          </AutoCompleteList>
            </>
        )}
        </AutoComplete>
        </Flex>
    );
  }
  
  export default SearchBar;