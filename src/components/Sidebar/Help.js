import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SidebarImg from "assets/img/SidebarImg.png";
import IconBox from "components/Icons/IconBox";
import React from "react";

export function Help(props) {
  // Destructure children and rest of the props for flexibility
  const { children, ...rest } = props;
  
  return (
    <Flex
      // The main container for the help section, styled with a background image
      borderRadius="15px"
      flexDirection="column" // Arrange child components vertically
      bgImage={SidebarImg} // Set sidebar image as the background
      justifyContent="flex-start" // Align items at the top of the container
      alignItems="start" // Align items to the left side
      boxSize="border-box" // Ensure padding does not affect the width/height
      p="16px" // Add padding around content
      h="170px" // Set a fixed height
      w="100%" // Make it full width
    >
      {/* Icon box for the question icon */}
      <IconBox width="35px" h="35px" bg="white" mb="auto">
        <QuestionIcon color="teal.300" h="18px" w="18px" /> {/* Icon size is defined */}
      </IconBox>

      {/* Title text for the help section */}
      <Text fontSize="sm" color="white" fontWeight="bold">
        Need help?
      </Text>

      {/* Subtitle text, providing extra context */}
      <Text fontSize="xs" color="white" mb="10px">
        Please check our docs
      </Text>

      {/* Link to documentation */}
      <Link
        w="100%" // Make the link take full width
        href="#"
        isExternal // Open link in a new tab
      >
        {/* Button to open documentation */}
        <Button
          fontSize="10px" // Set a small font size
          fontWeight="bold" // Make button text bold
          w="100%" // Full-width button
          bg="white" // White background
          _hover={{ bg: "white", opacity: 0.8 }} // Change button opacity on hover for effect
          _active={{
            bg: "white", // Maintain white background on active
            transform: "none", // Disable transformation effect
            borderColor: "transparent", // Remove border on click
          }}
          _focus={{
            boxShadow: "none", // Remove box-shadow on focus
          }}
          color="black" // Black text color
        >
          DOCUMENTATION
        </Button>
      </Link>
    </Flex>
  );
}
