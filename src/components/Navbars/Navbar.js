// Chakra UI Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import AdminNavbarLinks from "./NavbarLinks";

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false); // State to track if the navbar has scrolled
  const {
    variant,
    children,
    fixed,
    secondary,
    brandText,
    onOpen,
    ...rest
  } = props;

  // Default color settings that will be adjusted depending on the theme
  let mainText = useColorModeValue("gray.700", "gray.200");
  let secondaryText = useColorModeValue("gray.400", "gray.200");

  // Default styles for the navbar
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(21px)";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";

  // Handling the "fixed" navbar state when scrolled
  if (props.fixed === true)
    if (scrolled === true) {
      navbarPosition = "fixed";
      navbarShadow = useColorModeValue(
        "0px 7px 23px rgba(0, 0, 0, 0.05)",
        "none"
      );
      navbarBg = useColorModeValue(
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
      );
      navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
      navbarFilter = useColorModeValue(
        "none",
        "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
      );
    }

  // Handling the "secondary" navbar state
  if (props.secondary) {
    navbarBackdrop = "none";
    navbarPosition = "absolute";
    mainText = "white";
    secondaryText = "white";
    secondaryMargin = "22px";
    paddingX = "30px";
  }

  // Function to detect scroll position and change navbar styles
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Adding the scroll event listener to trigger navbar style changes
  window.addEventListener("scroll", changeNavbar);

  return (
    <Flex
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderWidth="1.5px"
      borderStyle="solid"
      transition="box-shadow 0.25s linear, background-color 0.25s linear, filter 0.25s linear, border 0s linear"
      alignItems={{ xl: "center" }}
      borderRadius="16px"
      display="flex"
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      left={document.documentElement.dir === "rtl" ? "30px" : ""}
      right={document.documentElement.dir === "rtl" ? "" : "30px"}
      px={{
        sm: paddingX,
        md: "30px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      top="18px"
      w={{ sm: "calc(100vw - 30px)", xl: "calc(100vw - 75px - 275px)" }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
      >
        <Box mb={{ sm: "8px", md: "0px" }}>
          <Breadcrumb>
            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href="#" color={secondaryText}>
                Pages
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color={mainText}>
              <BreadcrumbLink href="#" color={mainText}>
                {brandText}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/* Navbar brand link */}
          <Link
            color={mainText}
            href="#"
            bg="inherit"
            borderRadius="inherit"
            fontWeight="bold"
            _hover={{ color: mainText }}
            _active={{
              bg: "inherit",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
          >
            {brandText}
          </Link>
        </Box>
        <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
          {/* Rendering AdminNavbarLinks */}
          <AdminNavbarLinks
            onOpen={props.onOpen}
            logoText={props.logoText}
            secondary={props.secondary}
            fixed={props.fixed}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

// Prop Types validation for the AdminNavbar component
AdminNavbar.propTypes = {
  brandText: PropTypes.string, // Text for the navbar brand
  variant: PropTypes.string, // Variant for customizing the navbar (not used in this component directly)
  secondary: PropTypes.bool, // Flag to determine if the navbar has a secondary style
  fixed: PropTypes.bool, // Flag to determine if the navbar should be fixed
  onOpen: PropTypes.func, // Function to be called when opening a menu or modal
};
