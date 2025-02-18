// Chakra Imports
import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom Icons
import { ClockIcon } from "components/Icons/Icons";
import React from "react";

export function ItemContent(props) {
  // Chakra Color Mode values
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const notificationColor = useColorModeValue("gray.700", "white");

  // Optional spacing (can be adjusted if needed)
  const spacing = " ";

  return (
    <>
      {/* Avatar displaying the user's image */}
      <Avatar
        name={props.aName}
        src={props.aSrc}
        borderRadius="12px"
        me="16px"
      />
      <Flex flexDirection="column">
        {/* Displaying bold info with regular text */}
        <Text fontSize="14px" mb="5px" color={notificationColor}>
          <Text fontWeight="bold" fontSize="14px" as="span">
            {props.boldInfo}
            {spacing}
          </Text>
          {props.info}
        </Text>
        
        {/* Time with a clock icon */}
        <Flex alignItems="center">
          <ClockIcon color={navbarIcon} w="13px" h="13px" me="3px" />
          <Text fontSize="xs" lineHeight="100%" color={navbarIcon}>
            {props.time}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
