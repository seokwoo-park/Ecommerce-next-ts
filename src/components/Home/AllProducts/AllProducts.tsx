import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ProductsType } from "@/types/products";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { StyledCard } from "./AllProducts.style";

type Props = {
  products: ProductsType[];
};

const AllProducts = ({ products }: Props) => {
  console.log(products);
  return (
    <Row xs={2} md={3} lg={5} className="g-4">
      {products.map((item) => (
        <Col key={item.id}>
          <StyledCard>
            <Card.Img variant="top" src={item.image} />
            <Card.ImgOverlay>
              <AiOutlineHeart
                className="align-self-end wishlist overlay-content"
                size={30}
              />
              <Card.Header className="overlay-content">
                <h2 className="overlay-price">{item.price} €</h2>
                <div className="d-flex justify-content-center align-items-center gap-1">
                  <AiFillStar className="mb-3" size={20} />
                  <p>
                    {item.rating.rate} {` (${item.rating.count})`}
                  </p>
                </div>
              </Card.Header>
              <Button
                className="justify-self-center overlay-content"
                href={`/product/${item.id}`}
              >
                See more
              </Button>
            </Card.ImgOverlay>
            <Card.Header>{item.title}</Card.Header>
          </StyledCard>
        </Col>
      ))}
    </Row>
  );
};

export default AllProducts;
