import React from "react";
import "./Feature.css";
import { featureValues } from "../../json/about_features";

const Features = () => {
  return (
    <>
      {featureValues.map((item, index) => (
        <div className="feature-container">
          <div className="number">{item.number}</div>
          <div className="feature-content">
            <div className="heading">
              <h1>{item.heading}</h1>
            </div>
            <div className="line"></div>
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Features;
