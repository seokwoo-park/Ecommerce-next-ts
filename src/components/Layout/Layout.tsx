import React from "react";
import { Container } from "react-bootstrap";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return <Container className="py-5">{children}</Container>;
};

export default Layout;
