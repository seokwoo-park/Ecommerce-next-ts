import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

  -webkit-box-shadow: 0px 25px 44px -27px rgba(175, 175, 175, 1);
  -moz-box-shadow: 0px 25px 44px -27px rgba(175, 175, 175, 1);
  box-shadow: 0px 25px 44px -27px rgba(175, 175, 175, 1);
  & h1 {
    font-family: "Permanent Marker", cursive;
  }
`;
