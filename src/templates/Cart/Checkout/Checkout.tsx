import React from "react";
import { Footer } from "src/components/blocks";

const CartCheckotLayout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CartCheckotLayout;
