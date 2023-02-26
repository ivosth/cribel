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
  Link,
  useColorModeValue
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
import { channels } from "./Static";

function SearchBar() {


  return (
    <Flex >
      <AutoComplete selectOnFocus /*openOnFocus*/ >
        {({ isOpen }) => (
          <>
            <InputGroup>
              <AutoCompleteInput placeholder="Search..." 
                //_dark={{ bg:"blue.600" }}
                //_light={{ bg:"blue.50" }}
              />
              <InputRightElement
                children={
                  <Icon as={isOpen ? MdOutlineYoutubeSearchedFor : MdOutlineSearch} />
                }
              />
            </InputGroup>
            <AutoCompleteList>
              {channels.map((channel, id) => (
                <Link
                  fontSize="lg"
                  key={id}
                  as={RouterLink}
                  to={'channel/' + channel.id}
                  rounded={"xl"}
                  _hover={{
                    bg: "blue.100",
                  }}
                >
                  <AutoCompleteItem
                    key={`option-${id}`}
                    value={channel.name}
                    //textTransform="capitalize"
                    align="center"
                    rounded={"xl"}
                    _focus={{ bg: "none" }}
                  >

                    <Avatar size="sm" name={channel.name} src={channel.image} mr="0.75rem" />
                    {channel.name}

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