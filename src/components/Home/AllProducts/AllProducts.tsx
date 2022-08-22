import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { ProductsType } from "@/types/products";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import { StyledCard } from "./AllProducts.style";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, selectCartState } from "../../../store/cartSlice";

type Props = {
  products: ProductsType[];
};

const AllProducts = ({ products }: Props) => {
  const dispatch = useDispatch();
  const { currentCart } = useSelector(selectCartState);

  console.log(currentCart);

  return (
    <Row xs={2} md={3} lg={5} className="g-4">
      {products.map((item) => (
        <Col key={item.id}>
          <StyledCard>
            <Card.Img variant="top" src={item.image} />
            <Card.ImgOverlay>
              {currentCart.some(({ product }) => product === item.title) ? (
                <AiFillHeart
                  color="red"
                  className="align-self-end wishlist overlay-content"
                  size={30}
                  onClick={() => dispatch(removeCart(item.title))}
                />
              ) : (
                <AiOutlineHeart
                  className="align-self-end wishlist overlay-content"
                  size={30}
                  onClick={() => dispatch(addCart(item.title))}
                />
              )}
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
