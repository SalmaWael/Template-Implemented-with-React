import React, { useState } from "react";

import "./ratingstar.css";

const RatingStar = ({ fill }) => {
  const [yellowStars, setYellowStars] = useState(fill);

  let filledStars = new Array(fill).fill({ star: "yellow" });
  let emptyStars = new Array(5 - fill).fill({ star: "empty" });
  return (
    <>
      <div>
        {filledStars.map((star) => (
          <i key={star.index} className="fa-solid fa-star filledStar"></i>
        ))}
        {emptyStars.map((star) => (
          <i key={star.index} className="fa-regular fa-star emptyStar"></i>
        ))}
      </div>
    </>
  );
};

export default RatingStar;

{
  /* <i className={`${fill ? "fa-solid" : "fa-regular"}  fa-star`}></i> */
}
