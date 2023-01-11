import React from "react";
import { Link } from "react-router-dom";

export const Aboutcard = (props) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
        <div className="icon">
          <i className={props.Icon}></i>
        </div>
        <h4 className="title">
          <Link to={"/"}>{props.Name}</Link>
        </h4>
        <p className="description">
          {props.text}
        </p>
      </div>
    </div>
  );
};
