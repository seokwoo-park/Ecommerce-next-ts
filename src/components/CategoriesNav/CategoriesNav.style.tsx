import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledCategories = styled.div`
  padding: 1rem 0;
  height: 80px;
  display: flex;
  justify-content: center;
  gap: 3rem;
  -webkit-box-shadow: 0px 25px 44px -27px rgba(175, 175, 175, 1);
  -moz-box-shadow: 0px 25px 44px -27px rgba(175, 175, 175, 1);
  box-shadow: 0px 25px 44px -27px rgba(175, 175, 175, 1);
  background-color: #00000052;
`;

export const StyledNavButton = styled(Button)`
  font-size: 1.3rem;
  color: #ffffff;
  background-color: transparent;
  border-radius: 0;
  border: none;
  transition: all 0.1s ease-in;

  &:hover,
  :focus,
  :active,
  :active:focus {
    background-color: transparent;
    transform: scale(1.1);
    border: none;
    border-bottom: 2px solid #ffffff;
    outline: 0 !important;
    box-shadow: none;
  }
  :active:focus {
    outline: 0 !important;
    box-shadow: none;
  }
`;
