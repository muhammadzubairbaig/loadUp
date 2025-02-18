import React from "react";
import { Flex } from "@chakra-ui/react";

// Separator component: A simple horizontal line with gradient background
export function Separator(props) {
  const { variant, children, ...rest } = props;

  return (
    <Flex
      h="1px" // Set the height of the separator line to 1px
      w="100%" // Set the width to 100% to stretch across the container
      bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0) 100%)" // Apply a gradient background to create a subtle line effect
      {...rest} // Spread the remaining props to allow customization from parent components
    >
      {children} 
      {/* Render any child elements passed to the Separator component */}
    </Flex>
  );
}
