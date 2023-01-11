import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaMobileAlt, FaEnvelopeOpen } from "react-icons/fa";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsChevronDown,
} from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
// import "../layout/Header.css";

const Header = () => {
  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <FaEnvelopeOpen className="d-flex align-items-center" />
            <Link to="mailto:contact@example.com" className="">
              <span className="mail">contact@example.com</span>
            </Link>
            <FaMobileAlt className="d-flex align-items-center ms-4" />
            <span>+1 5589 55488 55</span>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <Link to="/" className="twitter">
              <BsTwitter />
            </Link>
            <Link to="/" className="facebook">
              <BsFacebook />
            </Link>
            <Link to="/" className="instagram">
              <BsInstagram />
            </Link>
            <Link to="/" className="linkedin">
              <BsYoutube />
            </Link>
          </div>
        </div>
      </section>
      {/*------- Header -------- */}
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <Link to={"/"}>
              1st-STPE<span>.</span>
            </Link>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt=""></a>--> */}

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <NavLink className="nav-link scrollto" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to={"/About"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to={"/Services"}>
                  Services
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink to={"/Portfolio"}>
                  <span>Portfolio</span> <BsChevronDown className="i" />
                </NavLink>
                <ul>
                  <li>
                    <Link to={"/"}>Drop Down 1</Link>
                  </li>
                  <li className="dropdown">
                    <Link to={""}>
                      <span>Deep Drop Down</span> <AiOutlineRight />
                    </Link>
                    <ul>
                      <li>
                        <Link to={"/"}>Deep Drop Down 1</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/"}>Drop Down 2</Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                <NavLink className="nav-link scrollto " to={"#"}>
                  Portfolio
                </NavLink>
              </li> */}
              <li>
                <NavLink className="nav-link scrollto" to={"/Team"}>
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to={"/Login"}>
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink className="nav-link scrollto" to={"/Contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
