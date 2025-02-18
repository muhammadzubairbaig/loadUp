import { Box, useStyleConfig } from "@chakra-ui/react";

// Reusable Component for Card, CardHeader, CardBody
const createStyledComponent = (componentName) => (props) => {
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig(componentName, { variant });
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

// Optimized Components
export const Card = createStyledComponent("Card");
export const CardHeader = createStyledComponent("CardHeader");
export const CardBody = createStyledComponent("CardBody");
