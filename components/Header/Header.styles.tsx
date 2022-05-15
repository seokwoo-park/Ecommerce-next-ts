import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

  -webkit-box-shadow: 0 8px 6px -6px lightgray;
  -moz-box-shadow: 0 8px 6px -6px lightgray;
  box-shadow: 0 8px 6px -6px lightgray;

  & h1 {
    font-family: "Permanent Marker", cursive;
  }
`;
