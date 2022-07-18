import BasicLayout from "../../components/Layout/BasicLayout/BasicLayout";
import { ProductsType } from "@/types/products";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getAllProducts, getSingleProducts } from "../api/products";
import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import { StyledImageWrapper } from "./ProductDetails.style";
import { StarRating } from "../../components";

type Props = {
  product: ProductsType;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllProducts();

  const paths = data.map((item) => {
    return {
      params: {
        productID: `${item.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await getSingleProducts(params?.productID);

  return {
    props: {
      product,
    },
  };
};

const ProductDetails = ({ product }: Props) => {
  console.log(product);
  return (
    <BasicLayout>
      <Row className="justify-content-center align-items-center mt-5">
        <StyledImageWrapper xs={12} lg={6}>
          <Image
            src={product.image}
            alt={product.title}
            width="200px"
            height="300px"
            objectFit="contain"
          />
        </StyledImageWrapper>
        <Col xs={12} lg={6}>
          <h2>{product.title}</h2>
          <small>{product.category}</small>
          <h2>{product.price} €</h2>
          <StarRating rating={product.rating} />
          <p>{product.description}</p>
          <Button>Add to cart</Button>
        </Col>
      </Row>
    </BasicLayout>
  );
};

export default ProductDetails;
