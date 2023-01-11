import React from "react";
import { Link } from "react-router-dom";

import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const TeamCard = (props) => {
  return (
    <div
      className="col-lg-3 col-md-6 d-flex align-items-stretch"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="member">
        <div className="member-img">
          <img src={props.imgsrc} className="img-fluid" alt="" />
          <div className="social">
            <Link to={""}>
              <BsTwitter />
            </Link>
            <Link to={""}>
              <BsFacebook />
            </Link>
            <Link to={""}>
              <BsInstagram />
            </Link>
            <Link to={""}>
              <BsLinkedin />
            </Link>
          </div>
        </div>
        <div className="member-info">
          <h4>{props.name}</h4>
          <span>{props.profile}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
