import styled from "styled-components";

export const StyledCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
  border-radius: 100%;
  padding: 0.8rem;

  transition: 0.5s all ease;
  cursor: pointer;

  &svg {
    scale: 5px;
  }

  :hover {
    svg {
      transform: scale(1.1);
    }
    .cart__card {
      display: block;
    }
  }

  .cart-bubble {
    position: absolute;
    z-index: 2;
    right: -5px;
    bottom: -5px;
    width: 1.2rem;
    height: 1.2rem;
    background-color: #ff5a00;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 100%;
  }

  .cart__card {
    display: none;
    position: absolute;
    width: 500px;
    /* height: 700px; */
    top: 49px;
    right: 0;
  }
`;
