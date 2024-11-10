import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import useCustomTheme from "../hooks/useCustomTheme";

const Layout = ({ children }) => {
    const { bodyBg, navBg } = useCustomTheme();
    const location = useLocation();

    return (
        <HStack
            w="100svw"
            h="100svh"
            bgColor={bodyBg}
        >
            <Box w="fit-content" alignItems="center" gap={5} h="100%" bgColor={navBg}>

                    <Button
                        w="100%"
                        as={Link}
                        to="/admin"
                     rounded="none"
                       colorScheme="blue"
                        p={3}
                    >
                        Profile
                    </Button>

                <VStack w="100%" p={4}><Button
                    w="100%"
                    as={Link}
                    to="/admin/add-category"
                    variant={location.pathname === "/admin/add-category" ? "solid" : "ghost"}
                >
                    Create Categories
                </Button>
                    <Button
                        w="100%"
                        as={Link}
                        to="/admin/add-question"
                        variant={location.pathname === "/admin/add-question" ? "solid" : "ghost"}
                    >
                        Create Questions
                    </Button>
                    <Button
                        w="100%"
                        as={Link}
                        to="/admin/questions"
                        variant={location.pathname === "/admin/questions" ? "solid" : "ghost"}
                    >
                        View Questions
                    </Button></VStack>
            </Box>
            <Box h="100%" overflowY="auto" flex={1}>
                {children}
            </Box>
        </HStack>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
