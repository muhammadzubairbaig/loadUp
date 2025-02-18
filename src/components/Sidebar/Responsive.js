/*eslint-disable*/
import { HamburgerIcon } from "@chakra-ui/icons";
// Chakra UI imports for layout components
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
// Custom components for icons, separator, and help
import IconBox from "components/Icons/IconBox";
import { CreativeTimLogo } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import { Help } from "components/Sidebar/Help";
// React and routing imports
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Responsive(props) {
  // Accessing current location (for active route checks)
  let location = useLocation();
  
  // State management for collapsible sections (not used here but can be expanded)
  const [state, setState] = React.useState({});
  
  // Ref for the main panel for managing side panel opening
  const mainPanel = React.useRef();

  // Helper function to check active route (for active styling)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  // Function to dynamically create navigation links based on the passed routes
  const createLinks = (routes) => {
    const activeBg = useColorModeValue("white", "gray.700"); // Active background color based on theme
    const inactiveBg = useColorModeValue("white", "gray.700"); // Inactive background color
    const activeColor = useColorModeValue("gray.700", "white"); // Active text color
    const inactiveColor = useColorModeValue("gray.400", "gray.400"); // Inactive text color

    return routes.map((prop, key) => {
      if (prop.redirect) return null; // Skip redirection routes
      if (prop.category) {
        // Handling collapsible categories
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <div key={prop.name}>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{ xl: "12px" }}
              mx="auto"
              ps={{ sm: "10px", xl: "16px" }}
              py="12px"
            >
              {document.documentElement.dir === "rtl" ? prop.rtlName : prop.name}
            </Text>
            {createLinks(prop.views)} {/* Recursive call for sub-category routes */}
          </div>
        );
      }
      // For regular links
      return (
        <NavLink to={prop.layout + prop.path} key={prop.name}>
          {/* Button for active and inactive link states */}
          {activeRoute(prop.layout + prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              mb={{ xl: "12px" }}
              mx={{ xl: "auto" }}
              ps={{ sm: "10px", xl: "16px" }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox bg="teal.300" color="white" h="30px" w="30px" me="12px">
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl" ? prop.rtlName : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{ xl: "12px" }}
              mx={{ xl: "auto" }}
              py="12px"
              ps={{ sm: "10px", xl: "16px" }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox bg={inactiveBg} color="teal.300" h="30px" w="30px" me="12px">
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl" ? prop.rtlName : prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  const { logoText, routes, ...rest } = props;

  var links = <>{createLinks(routes)}</>; // Generated links from routes

  // BRAND Component for sidebar logo
  let hamburgerColor = useColorModeValue("gray.500", "gray.200");
  if (props.secondary === true) {
    hamburgerColor = "white"; // Adjust hamburger icon color for secondary style
  }

  // Brand styling
  var brand = (
    <Box pt={"35px"} mb="8px">
      <Link
        href={`${process.env.PUBLIC_URL}/#/`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <CreativeTimLogo w="32px" h="32px" me="10px" />
        <Text fontSize="sm" mt="3px">
          {logoText}
        </Text>
      </Link>
      <Separator></Separator>
    </Box>
  );

  // Sidebar handling (drawer component)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Color variables for styling
  return (
    <Flex display={{ sm: "flex", xl: "none" }} ref={mainPanel} alignItems="center">
      {/* Hamburger icon */}
      <HamburgerIcon
        color={hamburgerColor}
        w="18px"
        h="18px"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w="250px" maxW="250px" ms={{ sm: "16px" }} my={{ sm: "16px" }} borderRadius="16px">
          <DrawerCloseButton _focus={{ boxShadow: "none" }} _hover={{ boxShadow: "none" }} />
          <DrawerBody maxW="250px" px="1rem">
            <Box maxW="100%" h="100vh">
              {/* Brand section */}
              <Box>{brand}</Box>
              <Stack direction="column" mb="40px">
                {/* Links section */}
                <Box>{links}</Box>
              </Stack>
              {/* Help section */}
              <Help></Help>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Responsive;
