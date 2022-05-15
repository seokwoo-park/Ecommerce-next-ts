import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const StyledCarousel = styled(Carousel)`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

  padding: 2rem;
  -webkit-box-shadow: 0px 0px 24px 6px rgba(66, 68, 90, 0.3);
  -moz-box-shadow: 0px 0px 24px 6px rgba(66, 68, 90, 0.3);
  box-shadow: 0px 0px 24px 6px rgba(66, 68, 90, 0.3);

  h2 {
    font-family: "Permanent Marker", cursive;
  }

  .item-container {
    min-height: 200px;
  }

  .carousel-indicators {
    button {
      background-color: black;
    }
  }

  .carousel-control-prev,
  .carousel-control-next {
    opacity: 0;

    &:hover {
      opacity: 1;
    }
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      background-color: black;
      border-radius: 100%;
    }
  }
`;
