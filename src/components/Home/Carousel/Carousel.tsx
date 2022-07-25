import React from "react";
import Image from "next/image";
import { Button, Carousel, Col, Row } from "react-bootstrap";
import { StyledCarousel } from "./Carousel.style";
import { ProductsType } from "@/types/products";
import Counter from "react-countdown-customizable";

type Props = {
  weeklyDeal: ProductsType[];
};

const HomeCarousel = ({ weeklyDeal }: Props) => {
  const getNextMonday = () => {
    const today = new Date();
    const nextMonday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    return nextMonday;
  };

  return (
    <>
      <h3 className="text-center">Every monday with new deal</h3>
      <h4 className="text-center">up to 25%</h4>
      <div className="w-60 mx-auto mb-4">
        <Counter
          date={getNextMonday()}
          timerStyle={{ marginTop: "10px", width: "100%" }}
          counterStyle={{
            fontSize: "1.5rem",
            color: "#0C1721",
            border: "1px solid #f5f5f5",
            padding: "10px",
            margin: "5px",
            backgroundColor: "#f5f5f5",
          }}
          labelStyle={{
            color: "grey",
            fontSize: "1rem",
            textTransform: "uppercase",
          }}
        />
      </div>
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
                  <del>{Math.round(item.price * 1.5)}.99 €</del>
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
    </>
  );
};

export default HomeCarousel;
