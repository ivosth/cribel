import {
    Tabs, Tab, TabList, TabPanels, TabPanel,
    Flex, Button, useColorModeValue, Box, Link, Icon, Hide, Text, Spacer
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { MdOutlineCastForEducation } from "react-icons/md";
import { BsPersonSquare, BsTools} from "react-icons/bs";

const NavLink = ({ icon, link, children }) => (
    <Link
        fontSize={{ base: '220%', sm: '220%', md: '140%', lg: '140%', xl: '160%' }}
        as={RouterLink}
        to={link}
        px={2}
        py={1}
        rounded={"md"}
        mx="1rem"
        //color= {useColorModeValue("blue.900", "blue.100")}
        bgColor={useColorModeValue("blue.400", "blue.100")}
        _hover={{
            bg: useColorModeValue("blue.500", "blue.200"),
        }}

    >
        <Flex align="center">
            <Icon as={icon} color={useColorModeValue("white", "black")}/>
            <Hide below='md'>
                <Text marginLeft="0.5rem" color={useColorModeValue("white", "black")}>
                    {children.charAt(0).toUpperCase() + children.slice(1)}
                </Text>
            </Hide>
        </Flex>
    </Link>
);

function Explore() {

    return (
        <Box
            bg={useColorModeValue("gray.100", "gray.600")}
            py="2rem"
            fontFamily="monospace"
            justifyContent="center"
        >
            <Flex mb="2rem">
                <Spacer />
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Spacer />
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <NavLink icon={BsPersonSquare} link={"profile"}>{"profile"}</NavLink>
                        <NavLink icon={MdOutlineCastForEducation} link={"channels"}>{"channels"}</NavLink>
                        <NavLink icon={BsTools} link={"advanced"}>{"advanced"}</NavLink>
                    </Flex>
                </Flex>
                <Spacer />
            </Flex>

            <Outlet />
        </Box>
    );
}

export default Explore;
