import {
    Tabs, Tab, TabList, TabPanels, TabPanel,
    Flex, useColorModeValue, Box, Link, Icon, Hide, Text, Spacer
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { MdOutlineArrowUpward, MdOutlineUpdate, MdOutlineTrendingUp } from "react-icons/md";


const NavLink = ({ icon, link, children }) => (
    <Link
        fontSize={{ base: '170%', sm: '170%', md: '170%', lg: '150%', xl: '140%' }}
        as={RouterLink}
        to={link}
        px={2}
        py={1}
        rounded={"md"}
        mx="1rem"
        //color= {useColorModeValue("blue.900", "blue.100")}
        bgColor={useColorModeValue("blue.50", "blue.500")}
        _hover={{
            bg: useColorModeValue("blue.100", "blue.600"),
        }}

    >
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

function Explore() {

    return (
        <Box
            py="2rem"
            fontFamily="monospace"
            justifyContent="center"
        >
            <Tabs variant='solid-rounded' colorScheme='blue' align="center">
                <TabList>
                    <Tab> Channels</Tab>
                    <Tab> Posts </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Spacer/>
                            <Flex  alignItems={"center"} justifyContent={"space-between"}>
                                <NavLink icon={MdOutlineUpdate} link={"channels/new"}>{"new"}</NavLink>
                                <NavLink icon={MdOutlineTrendingUp} link={"channels/trending"}>{"trending"}</NavLink>
                                <NavLink icon={MdOutlineArrowUpward} link={"channels/top"}>{"top"}</NavLink>
                            </Flex>
                            <Spacer/>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Spacer/>
                            <Flex alignItems={"center"} justifyContent={"space-between"}>
                                <NavLink icon={MdOutlineUpdate} link={"posts/new"}>{"new"}</NavLink>
                                <NavLink icon={MdOutlineTrendingUp} link={"posts/trending"}>{"trending"}</NavLink>
                                <NavLink icon={MdOutlineArrowUpward} link={"posts/top"}>{"top"}</NavLink>
                            </Flex>
                            <Spacer/>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
            <Outlet />
        </Box>
    );
}

export default Explore;
