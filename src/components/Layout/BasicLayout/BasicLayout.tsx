import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { BasicLayoutContainer, StyledBasicLayout } from "./BasicLayout.style";

type Props = {
  children: React.ReactNode;
};

const BasicLayout = ({ children }: Props) => {
  return (
    <StyledBasicLayout>
      <Header />
      <BasicLayoutContainer>{children}</BasicLayoutContainer>
      <Footer />
    </StyledBasicLayout>
  );
};

export default BasicLayout;
