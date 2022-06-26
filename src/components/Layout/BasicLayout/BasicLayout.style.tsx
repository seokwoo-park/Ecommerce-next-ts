import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledBasicLayout = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const BasicLayoutContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: calc(3rem + 188px);
`;
