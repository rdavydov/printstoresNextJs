import React from "react";
import { Box } from "src/components/ui";
import { BoxBaseType } from "src/components/ui/Box";

const Container: React.FC<BoxBaseType> = ({
  maxWidth = 1280,
  width = "100%",
  padding = "0 24px",
  margin = "0 auto",
  children,
  ...rest
}) => {
  return (
    <Box maxWidth={maxWidth} width={width} padding={padding} margin={margin} {...rest}>
      {children}
    </Box>
  );
};

export default Container;
