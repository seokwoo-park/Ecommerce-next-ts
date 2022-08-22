import { selectCartState } from "../../../store/cartSlice";
import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { StyledCircle } from "./Circle.styles";

type Props = {};

const Cart = (props: Props) => {
  const { currentCart } = useSelector(selectCartState);
  console.log(currentCart);
  return (
    <StyledCircle>
      <BsCartPlusFill size="1.5rem" />
      <div className="cart-bubble text-center">{currentCart.length}</div>
    </StyledCircle>
  );
};

export default Cart;
