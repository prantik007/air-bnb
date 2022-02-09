import React from "react";
import star from "../images/star.png";
import "../style.css";

function Card(props) {
  const url=props.people_img;
  return (
    <div>
      <div className="cards">
        <img src={url} className="card-img" alt="singer" />
        <div className="card-stats">
          <img className="card-star" src={star} alt="star" />
          <span> {props.rating} </span>
          <span> {props.reviews} </span>
          <span>{props.place}</span>
        </div>
        <p>{props.description}</p>
        <p><span className="bold">From ${props.price}</span>/person</p>
      </div>
    </div>
  );
}

export default Card;
