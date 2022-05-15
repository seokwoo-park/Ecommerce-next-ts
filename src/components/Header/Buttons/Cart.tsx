import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { StyledCircle } from "./Circle.styles";

type Props = {};

const Cart = (props: Props) => {
  return (
    <StyledCircle>
      <BsCartPlusFill size="1.5rem" />
    </StyledCircle>
  );
};

export default Cart;
