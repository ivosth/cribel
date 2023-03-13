import {
    Center, Text
} from "@chakra-ui/react";

export const Error = () => {
    return (
        <Center pt="15%">
            <Text fontSize={{ base: '140%', sm: '150%', md: '200%', lg: '200%', xl: '220%'}} fontWeight="extrabold">
                Error 404: Page not found
            </Text>
        </Center>
    );
}

export default Error;