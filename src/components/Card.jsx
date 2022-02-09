import React from "react";
import star from "../images/star.png";
import singer from "../images/people/singer.jpg";
import "../style.css";

function Card() {
  return (
    <div>
      <div className="cards">
        <img src={singer} className="card-img" alt="singer" />
        <div className="card-stats">
          <img className="card-star" src={star} alt="star" />
          <span> 5.0 </span>
          <span> (9) </span>
          <span>Greenland</span>
        </div>
        <p>Singing Lessons from Matt</p>
        <p><span className="bold">From $120</span>/person</p>
      </div>
    </div>
  );
}

export default Card;
