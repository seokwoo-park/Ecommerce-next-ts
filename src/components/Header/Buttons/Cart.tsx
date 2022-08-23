import { CartState, selectCartState } from "../../../store/cartSlice";
import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { StyledCircle } from "./Circle.styles";
import { Button, Card, Col, Row } from "react-bootstrap";
import Image from "next/image";
import { Prev } from "react-bootstrap/esm/PageItem";

type Props = {};

const Cart = (props: Props) => {
  const { currentCart }: { currentCart: CartState[] } =
    useSelector(selectCartState);

  return (
    <StyledCircle>
      <BsCartPlusFill size="1.5rem" />
      {!!currentCart.length && (
        <div className="cart-bubble text-center">{currentCart.length}</div>
      )}
      <div className="cart__card">
        <Card>
          <Card.Header>
            <Row className="justify-content-between align-items-center">
              <Col xs={6}>
                <h4>Your cart</h4>
              </Col>
              <Col
                xs={6}
                className="d-flex justify-content-center align-items-center gap-2"
              >
                <span className="text-secondary">CART VALUE</span>
                <h3>
                  {currentCart.reduce(
                    (prev, curr) => prev + curr.product.price,
                    0
                  )}
                  <span>€</span>
                </h3>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            {currentCart.map(({ product, quantity }) => (
              <Row className="justify-content-center align-items-center py-2 my-2 border">
                <Col xs={12} lg={3}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width="80px"
                    height="80px"
                    objectFit="contain"
                  />
                </Col>
                <Col>
                  <p>
                    {quantity}x {product.title}
                  </p>
                </Col>
                <Col xs={12} lg={3}>
                  <h4>{product.price}€</h4>
                </Col>
              </Row>
            ))}
          </Card.Body>
          <Card.Footer>
            <Col className="d-flex justify-content-end">
              <Button>CHECK OUT</Button>
            </Col>
          </Card.Footer>
        </Card>
      </div>
    </StyledCircle>
  );
};

export default Cart;
