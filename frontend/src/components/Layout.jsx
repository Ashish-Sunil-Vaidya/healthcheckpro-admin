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
            <VStack w="fit-content" p={5} alignItems="center" gap={5} h="100%" bgColor={navBg}>
                <Button
                    w="100%"
                    as={Link}
                    to="/"
                    variant={location.pathname === "/" ? "solid" : "ghost"}
                >
                    Create Categories
                </Button>
                <Button
                    w="100%"
                    as={Link}
                    to="/add-question"
                    variant={location.pathname === "/add-question" ? "solid" : "ghost"}
                >
                    Create Questions
                </Button>
                <Button
                    w="100%"
                    as={Link}
                    to="/questions"
                    variant={location.pathname === "/questions" ? "solid" : "ghost"}
                >
                    View Questions
                </Button>
            </VStack>
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
