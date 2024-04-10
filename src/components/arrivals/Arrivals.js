import React from "react";

import "./arrivals.css";
import Card from "../card/Card";

import cat01Img from "./../../images/categories/cat-01.jpg";
import cat02Img from "./../../images/categories/cat-02.jpg";
import cat03Img from "./../../images/categories/cat-03.jpg";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          <div>
            <Card title="Hoodies & Sweetshirt" img={cat01Img} />
          </div>
          <div>
            <Card title="Caots & Parkas" img={cat02Img} />
          </div>
          <div>
            <Card title="Tees & T-Shirt" img={cat03Img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
