import BasicLayout from "../../components/Layout/BasicLayout/BasicLayout";
import { ProductsType } from "@/types/products";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { getAllProducts, getSingleProducts } from "../api/products";
import Image from "next/image";

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
      <h1>{product.title}</h1>
      <Image src={product.image} width="100%" height="100%" />
      <h2>{product.price} €</h2>
      <p>{product.description}</p>
    </BasicLayout>
  );
};

export default ProductDetails;
