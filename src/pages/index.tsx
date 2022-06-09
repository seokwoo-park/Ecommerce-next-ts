import { AllProducts, Carousel } from "../components/index";
import React from "react";
import { GetServerSideProps } from "next";
import { getAllProducts } from "./api/products";
import { ProductsType } from "@/constants/types/products";

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

  return (
    <div>
      <Carousel weeklyDeal={weeklyDeal} />
      <h2 className="my-5">All products</h2>
      <AllProducts products={products} />
    </div>
  );
};

export default Home;
