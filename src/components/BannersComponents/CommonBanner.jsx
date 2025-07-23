import React from "react";
import banner4 from "../../Images/banner4.png";
import { Link } from "react-router-dom";

const CommonBanner = ({ title, breadcrumbs }) => {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        backgroundImage: `url(${banner4})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
          <ul className="breadcumb-menu">
            {breadcrumbs.map((item, index) => (
              <li key={index}>
                {item.path ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
