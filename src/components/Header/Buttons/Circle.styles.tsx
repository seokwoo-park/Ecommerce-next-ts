import styled from "styled-components";

export const StyledCircle = styled.div`
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
    transform: scale(1.1);
  }
`;
