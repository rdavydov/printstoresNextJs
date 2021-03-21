import { MenuOutlined } from "@ant-design/icons";
import React from "react";
import { Flex } from "src/components/ui";

interface Props {
  handleOpen: () => void;
}

const MobileMenuClose = ({ handleOpen }: Props) => {
  return (
    <Flex>
      <MenuOutlined onClick={handleOpen} />
    </Flex>
  );
};

export default MobileMenuClose;
