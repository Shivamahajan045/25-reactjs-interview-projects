import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noofStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(noofStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FaStar
            style={{ cursor: "pointer" }}
            key={starValue}
            size={24}
            className={starValue <= (hover || rating) ? "active" : "inactive"}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(rating)}
          />
        );
      })}
    </div>
  );
}
