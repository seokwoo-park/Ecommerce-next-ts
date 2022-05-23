import { Carousel, ItemContainer } from "../components/index";
import React from "react";
import { GetServerSideProps } from "next";
import { getAllProducts } from "./api/products";
import { ProductsType } from "@/constants/types/products";
import { Button, Col } from "react-bootstrap";

type Props = {
  products: ProductsType[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
};

const Home = ({ products }: Props) => {
  const weeklyDeal = [products[2], products[3], products[5], products[6]];

  console.log(products);

  return (
    <div>
      <Carousel weeklyDeal={weeklyDeal} />
      <h2 className="my-5">All products</h2>
      <ItemContainer>
        <Col>
          <div>Test</div>
        </Col>
        <Col>
          <div>Test2</div>
        </Col>
        <Col>
          <div>Test3</div>
        </Col>
      </ItemContainer>
    </div>
  );
};

export default Home;
