import React from "react";
import { Link } from "react-router-dom";

const Servicescard = (props) => {
  return (
    <>
      <div
        className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="icon-box">
          <div className="icon">
            <i className={props.icon}></i>
          </div>
          <h4>
            <Link to={""}>{props.name}</Link>
          </h4>
          <p>
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Servicescard;
