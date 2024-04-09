import React from "react";
import "./brands.css";
import hm from "./../../images/brands/HM.png";
import obey from "./../../images/brands/Obey.png";
import shopify from "./../../images/brands/Shopify.png";
import lacoste from "./../../images/brands/Lacoste.png";
import levis from "./../../images/brands/Levis.png";
import amason from "./../../images/brands/Amazon.png";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="#!">
              <img src={hm} alt="HM" />
            </a>
          </li>

          <li>
            <a href="#!">
              <img src={obey} alt="HM" />
            </a>
          </li>

          <li>
            <a href="#!">
              <img src={shopify} alt="HM" />
            </a>
          </li>

          <li>
            <a href="#!">
              <img src={lacoste} alt="HM" />
            </a>
          </li>

          <li>
            <a href="#!">
              <img src={levis} alt="HM" />
            </a>
          </li>

          <li>
            <a href="#!">
              <img src={amason} alt="HM" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
