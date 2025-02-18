import { Flex } from "@chakra-ui/react";

const styles = {
    container: {
        pt: { base: "100px", md: "80px" },
        bg: "gray.50",
    },
};

export const ComponentContainer = ({ children }) => {
    return (
        <Flex direction="column" {...styles.container}>
            {children}
        </Flex>
    );
};
