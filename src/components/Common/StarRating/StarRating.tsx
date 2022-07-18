import React from "react";
import { AiFillStar } from "react-icons/ai";

type Props = {
  rating: { rate: number; count: number };
};

const StarRating = ({ rating }: Props) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div>
        {[...new Array(Math.round(rating.rate))].map((v, index) => (
          <AiFillStar className="mb-3" size={20} key={v + index} />
        ))}
      </div>
      <p>
        {rating.rate} {` (${rating.count})`}
      </p>
    </div>
  );
};

export default StarRating;
