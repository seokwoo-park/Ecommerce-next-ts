import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  img {
    padding: 1rem;
    object-fit: contain;
    aspect-ratio: 1/1;
    margin: 0 auto;
  }

  .card-header {
    height: 86px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .card-img-overlay {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in;

    .overlay-content {
      display: none;
      text-align: center;
      color: #ffffff;
    }

    &:hover {
      backdrop-filter: blur(3px) brightness(0.6);

      .overlay-content {
        display: block;
      }

      .wishlist {
        border-radius: 100%;
        padding: 3px;

        &:hover {
          background-color: rgba(46, 45, 45, 0.3);
        }
      }
    }
  }
`;
