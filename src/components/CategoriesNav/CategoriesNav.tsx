import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { StyledCategories, StyledNavButton } from "./CategoriesNav.style";

const CategoriesNav = () => {
  return (
    // <Container>
    <StyledCategories>
      <Link href="/categories/1">
        <StyledNavButton>Men</StyledNavButton>
      </Link>
      <StyledNavButton>Women</StyledNavButton>
      <StyledNavButton>Jewelry</StyledNavButton>
      <StyledNavButton>Electronics</StyledNavButton>
    </StyledCategories>
    // </Container>
  );
};

export default CategoriesNav;
