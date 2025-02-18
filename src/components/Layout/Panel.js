import { Box, useStyleConfig } from "@chakra-ui/react";

// Reusable Component for Card, CardHeader, CardBody
const createStyledComponent = (componentName) => (props) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig(componentName, { variant });
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

// Optimized Components
export const MainPanel = createStyledComponent("MainPanel");
export const PanelContainer = createStyledComponent("PanelContainer");
export const PanelContent = createStyledComponent("PanelContent");

