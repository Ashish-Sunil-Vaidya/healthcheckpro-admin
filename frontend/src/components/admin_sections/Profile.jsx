import { CopyIcon } from '@chakra-ui/icons';
import useGlobalState from '../../hooks/useGlobalState';
import { Box, Heading, Text, Button, Flex, IconButton,useToast } from '@chakra-ui/react';


const Profile = () => {
    const { user } = useGlobalState();
    const toast = useToast();
    const copytoClipboard = () => {
        navigator.clipboard.writeText(user.token);
        toast({
            title: `Token ${user.token} copied to clipboard`,
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    }


    return (
        <Box w="100%">
            <Heading>Profile</Heading>
            <Text>Username: {user.username}</Text>
            <Text>Email: {user.email}</Text>
            <Flex gap={5}><Text w="50svw">Token: {user.token} </Text><IconButton icon={
                <CopyIcon onClick={copytoClipboard}/>
            } /></Flex>
        </Box>
    );
}

export default Profile;