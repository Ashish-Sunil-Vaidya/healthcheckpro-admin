import {
  Box, Button, FormControl,

  FormLabel, Image, Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  useDisclosure,

} from "@chakra-ui/react";
import { useState } from "react";
import { Link as NLink, useNavigate } from "react-router-dom";


import useCustomTheme from "../hooks/useCustomTheme";
import useGlobalState from "../hooks/useGlobalState";
import useLogin from "../hooks/useLogin";
import authbg from "/authbg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, login } = useLogin();
  const {user} = useGlobalState();

  const { bodyBg, inputBg } = useCustomTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await login(email, password).catch((error) => {
      console.log(error);
    });
  };



  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      minHeight="100vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
      backgroundColor={bodyBg}
      position="relative"
      overflowX="hidden"
    >


      <Image src={authbg} position="fixed" width="60%" objectFit="cover" opacity={0.1} zIndex={0} minW="500px" />

      <Box
        width={{ md: "30%" }}
        minWidth="400px"
        p={{ base: 4, md: 10 }}
        borderRadius="md"
      >
        <Stack maxWidth="100%" minWidth="200px" spacing={4} p={3} rounded="md" >
          <FormControl id="email" isInvalid={!email && error}>
            <FormLabel>Email</FormLabel>
            <Input
              width="full"
              minW="150px"
              bgColor={{ base: "transparent", md: inputBg }}
              backdropFilter={{ base: "blur(5px)", md: "none" }}
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              boxShadow="md"
            />
          </FormControl>
          <FormControl id="password" isInvalid={!password && error}>
            <FormLabel>Password</FormLabel>
            <Input
              width="full"
              minW="150px"
              bgColor={{ base: "transparent", md: inputBg }}
              backdropFilter={{ base: "blur(10px)", md: "none" }}
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              boxShadow="md"
            />
          </FormControl>

          <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} closeOnBlur={false}>
            <PopoverTrigger>
              <Button marginLeft="auto" variant="link" w="fit-content" h="fit-content">Forgot Password?</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Admin Information</PopoverHeader>
              <PopoverBody>
                  Please contact the admin to reset your password.
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Button colorScheme="blue" width="full" mt={4} isLoading={loading} onClick={handleSubmit}>
            Sign In
          </Button>
        </Stack>

        <Box mt={5} display={{ base: "block", md: "none" }} textAlign="center">
          Don&apos;t have an account? <Button fontSize="lg" variant="link" as={NLink} to="/register" colorScheme="blue">Register here!</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
