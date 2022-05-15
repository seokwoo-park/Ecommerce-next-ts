import React from "react";
import { BsFillPersonFill, BsCartPlusFill } from "react-icons/bs";
import { StyledCircle } from "./Circle.styles";

type Props = {};

const User = (props: Props) => {
  return (
    <StyledCircle>
      <BsFillPersonFill size="1.5rem" />
    </StyledCircle>
  );
};

export default User;
