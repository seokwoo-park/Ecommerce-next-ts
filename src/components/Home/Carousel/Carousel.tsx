import React from "react";
import Image from "next/image";
import { Button, Carousel } from "react-bootstrap";
import { StyledCarousel } from "./Carousel.style";
import { ProductsType } from "@/types/products";

type Props = {
  weeklyDeal: ProductsType[];
};

const HomeCarousel = ({ weeklyDeal }: Props) => {
  return (
    <div>
      <h2 className="mb-4">Weekly Deal 🔥</h2>
      <StyledCarousel>
        {weeklyDeal.map((item) => (
          <Carousel.Item interval={2000} key={item.title + item.id}>
            <div className="d-flex justify-content-center align-items-center gap-5 item-container">
              <Image
                src={item.image}
                alt={`Weekly deal ${item.title}`}
                width="150px"
                height="150px"
                objectFit="contain"
              />
              <div>
                <h3>{item.title}</h3>
                <h4>
                  <del>{item.price * 1.5} €</del>
                </h4>
                <div className="d-flex gap-4">
                  <div>
                    <small>NOW</small>
                    <h3 className="text-primary">{item.price} €</h3>
                  </div>
                  <Button
                    className="h-100 align-self-center mt-2"
                    href={`/product/${item.id}`}
                  >
                    See more
                  </Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </StyledCarousel>
    </div>
  );
};

export default HomeCarousel;
