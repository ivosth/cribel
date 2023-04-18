import { Flex, Icon, InputGroup, InputRightElement, Avatar, Link, } from "@chakra-ui/react";
import * as React from "react";
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList, } from "@choc-ui/chakra-autocomplete";
import { MdOutlineSearch, MdOutlineYoutubeSearchedFor } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { API } from 'aws-amplify';


function SearchBar() {

  const [channels, setChannels] = useState([]);


  const obtainChannels = async () => {
    // Only get channel id, name and image
    try {
      const allChannels = await API.graphql({
        query: `query ListChannels {
        listChannels {
          items {
            id
            name
            image
          }
        }
      }`});
      setChannels(allChannels.data.listChannels.items);
    } catch (error) {
      console.error("Error on fetching channels for search bar: ", error);
    }
  };

  useEffect(() => {
    obtainChannels();
  }, []);



  return (
    <Flex >
      <AutoComplete selectOnFocus openOnFocus >
        {({ isOpen }) => (
          <>
            <InputGroup>
              <AutoCompleteInput placeholder="Search..." />
              <InputRightElement
                children={
                  <Icon as={isOpen ? MdOutlineYoutubeSearchedFor : MdOutlineSearch} />
                }
              />
            </InputGroup>
            <AutoCompleteList w="15.5rem">
              {channels.map((channel, id) => (
                <Link
                  fontSize="md"
                  key={id}
                  as={RouterLink}
                  to={'channel/' + channel.id + "/new"}
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

                    <Avatar size="sm" name={channel.name} mr="0.75rem"
                      src={channel.image || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"}
                    />
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