import React from "react";
import { Container, Row } from "react-bootstrap";

type Props = {
  children: React.ReactNode;
};

const ItemContainer = ({ children }: Props) => {
  return (
    <Container>
      <Row>{children}</Row>
    </Container>
  );
};

export default ItemContainer;
