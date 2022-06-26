import React from "react";
import { Container } from "react-bootstrap";
import { StyledFooter } from "./Footer.styled";

type Props = {};

const Footer = (props: Props) => {
  return (
    <StyledFooter>
      <Container>
        <div className="d-flex justify-content-between align-items-center  ">
          <div>
            <p>E-COMMERCE SERVICE</p>
            <p>2022 &copy; Seokwoo Park</p>
            <p>dev.seokwoopark@gmail.com</p>
          </div>
          <div className="d-flex flex-column gap-2">
            <p className="mb-1">Contact</p>
            <a href="https://www.linkedin.com/in/seokwoo-park/" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/seokwoo-park" target="_blank">
              Github
            </a>
            <a href="https://bit.ly/3JDYq0Y" target="_blank">
              Portfolio
            </a>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
