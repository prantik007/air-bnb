import React from "react";
import star from "../images/star.png";
import "../style.css";

function Card(props) {
  const imgURL = props.people_img;
  return (
    <div className="cards">
    {!props.isAvailable && <div className="card-isAvailable">SOLD OUT</div>}
      <img src={props.people_img} className="card-img" alt="singer" />
      <div className="card-stats">
        <img className="card-star" src={star} alt="star" />
        <span> {props.rating} </span>
        <span> ({props.reviews}) </span>
        <span>{props.place}</span>
      </div>
      <hr/>
      <p className="p-card-description">{props.description}</p>
      <p>
        <span className="card-price">From ${props.price}/person</span>
      </p>
    </div>
  );
}

export default Card;
