import React from "react";
import mainPageDesign from "../images/main-page-design.png";

function Hero() {
  return (
    <div>
      <section className="hero">
        <img className="hero-img" src={mainPageDesign} alt="Main design"></img>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </section>
    </div>
  );
}

export default Hero;
