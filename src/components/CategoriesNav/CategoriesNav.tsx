import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { StyledCategories, StyledNavButton } from "./CategoriesNav.style";

const CategoriesNav = () => {
  return (
    <Container>
      <StyledCategories>
        <Link href="/categories/men">
          <StyledNavButton>Men</StyledNavButton>
        </Link>
        <Link href="/categories/women">
          <StyledNavButton>Women</StyledNavButton>
        </Link>
        <Link href="/categories/jewelry">
          <StyledNavButton>Jewelry</StyledNavButton>
        </Link>
        <Link href="/categories/electronics">
          <StyledNavButton>Electronics</StyledNavButton>
        </Link>
      </StyledCategories>
    </Container>
  );
};

export default CategoriesNav;
