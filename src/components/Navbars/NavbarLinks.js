// Chakra Icons
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom Icons
import { ProfileIcon, SettingsIcon } from "components/Icons/Icons";
// Custom Components
import Responsive from "components/Sidebar/Responsive";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "routes.js";

export default function HeaderLinks(props) {
  const { variant, fixed, secondary, onOpen, ...rest } = props;

  // Chakra Color Mode (simplified variable naming)
  const mainTeal = useColorModeValue("teal.300", "teal.300");
  const inputBg = useColorModeValue("white", "gray.800");
  const mainText = useColorModeValue("gray.700", "gray.200");
  const navbarIcon = secondary ? "white" : useColorModeValue("gray.500", "gray.200");
  const searchIcon = useColorModeValue("gray.700", "gray.200");

  const settingsRef = React.useRef();

  // Function to handle the search input field with a clear structure
  const renderSearchInput = () => (
    <InputGroup
      cursor="pointer"
      bg={inputBg}
      borderRadius="15px"
      w={{ sm: "128px", md: "200px" }}
      me={{ sm: "auto", md: "20px" }}
      _focus={{ borderColor: mainTeal }}
      _active={{ borderColor: mainTeal }}
    >
      <InputLeftElement>
        <IconButton
          bg="inherit"
          borderRadius="inherit"
          _hover="none"
          _active={{ bg: "inherit", transform: "none", borderColor: "transparent" }}
          _focus={{ boxShadow: "none" }}
          icon={<SearchIcon color={searchIcon} w="15px" h="15px" />}
        />
      </InputLeftElement>
      <Input fontSize="xs" py="11px" color={mainText} placeholder="Type here..." borderRadius="inherit" />
    </InputGroup>
  );

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      {renderSearchInput()}  {/* Render Search Input */}

      <NavLink to="/">
        <Button
          p="0px"
          variant="no-hover"
          bg="transparent"
          my={{ sm: '1.5rem', lg: '0px' }}
          _focus={{ outline: 'none' }} // Remove the focus outline
          _active={{ transform: 'none', backgroundColor: 'transparent' }} // Remove the active state styles
          _hover={{ bg: 'transparent' }} // Ensure hover doesn't apply any styles
          rightIcon={<ProfileIcon color={navbarIcon} w="22px" h="22px" />}
        >
          <Text display={{ sm: "none", md: "flex" }}>Sign In</Text>
        </Button>
      </NavLink>

      {/* Sidebar component for responsive layout */}
      <Responsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />

      {/* Settings Icon */}
      <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="16px"
        ref={settingsRef}
        onClick={onOpen}
        color={navbarIcon}
        w="18px"
        h="18px"
      />

      {/* Notification Bell Icon */}
      <Menu>
        <MenuButton>
          <BellIcon color={navbarIcon} w="18px" h="18px" />
        </MenuButton>
      </Menu>
    </Flex>
  );
}

// Prop validation for component usage
HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
