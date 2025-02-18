/*eslint-disable*/
// chakra imports
import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SidebarContent from "./SidebarContent";

// Sidebar component
function Sidebar(props) {
  // Reference to the main panel
  const mainPanel = React.useRef();

  // Transition for the sidebar appearance
  const variantChange = "0.2s linear";

  // Destructuring the props
  const { logoText, routes, sidebarVariant } = props;

  // Determine sidebar background and other styles based on the variant
  let sidebarBg = "none";
  let sidebarRadius = "0px";
  let sidebarMargins = "0px";
  
  // Apply styles for the "opaque" sidebar variant
  if (sidebarVariant === "opaque") {
    sidebarBg = useColorModeValue("white", "gray.700"); // Use color based on the theme mode
    sidebarRadius = "16px"; // Rounded corners for the sidebar
    sidebarMargins = "16px 0px 16px 16px"; // Margins around the sidebar
  }

  return (
    <Box ref={mainPanel}>
      {/* Sidebar only visible on large screens (xl and above) */}
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg} // Background color based on the theme
          transition={variantChange} // Smooth transition for sidebar changes
          w="260px" // Sidebar width
          maxW="260px" // Maximum width
          ms={{ sm: "16px" }} // Margin start for small screens (on top)
          my={{ sm: "16px" }} // Vertical margin for small screens
          h="calc(100vh - 32px)" // Full viewport height minus padding
          ps="20px" // Padding start (left padding)
          pe="20px" // Padding end (right padding)
          m={sidebarMargins} // Margins based on the variant
          borderRadius={sidebarRadius} // Rounded corners if applicable
        >
          {/* Sidebar content */}
          <SidebarContent 
            routes={routes}
            logoText={logoText || "PURITY UI DASHBOARD"}
            display="none"
            sidebarVariant={sidebarVariant}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
