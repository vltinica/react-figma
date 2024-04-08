import React from "react";
import "./promo.css";
import promoImg from "./../../images/images/header-img.jpg";

const Promo = () => {
  return (
    <div>
      <section className="promo">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highlight">
                <span>LET'S</span>
              </span>
              EXPLORE
              <span className="highlight highlight--yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo__desc">
              Live for Influential and Innovatial fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a href="#!" className="promo__btn">
                Shop Now
              </a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="promo_img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;
