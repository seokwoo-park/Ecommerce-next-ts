import styled from "styled-components";

export const StyledFooter = styled.div`
  padding: 2rem 10%;
  position: absolute;
  bottom: 0;
  width: 100%;
  right: 0;
  left: 0;

  background-color: #f3f0f0;

  p {
    color: gray;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: gray;

    &:hover {
      color: #1092e8;
      text-decoration: underline;
    }
  }
`;
