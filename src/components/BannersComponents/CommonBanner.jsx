import React from "react";
import banner4 from "../../Images/banner4.png";
import { Link } from "react-router-dom";
import "./CommonBanner.css";

const CommonBanner = ({ title }) => {
  return (
    <div className="breadcumb-wrapper responsive-banner">
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
