import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { StyledNavbar } from "./Header.styles";
import Cart from "./Buttons/Cart";
import User from "./Buttons/User";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledNavbar>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <h1 style={{ cursor: "pointer" }}>E-YES</h1>
          </Link>
        </Navbar.Brand>
        <Nav className="gap-4">
          <User />
          <Cart />
        </Nav>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
