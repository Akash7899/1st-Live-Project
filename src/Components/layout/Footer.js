import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              {/* <form action="" method="post"/>
              <input type="email" name="email"><input type="submit" value="Subscribe"/>
            </form> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>
                1st_STEP<span>.</span>
              </h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/About"}>About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/Services"}>Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"}>Terms of service</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"}>Privacy policy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"}>Web Design</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"}>Web Development</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"}>Product Management</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"}>Marketing</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"}>Graphic Design</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links mt-3">
                <Link to={"/"} className="twitter">
                  <FaTwitter />
                </Link>
                <Link to={"/"} className="facebook">
                  <FaFacebookF/>
                </Link>
                <Link to={"/"} className="instagram">
                  <FaInstagram/>
                </Link>
                <Link to={"/"} className="Skype">
                  <FaSkype/>
                </Link>
                <Link to={"/"} className="linkedin">
                  <FaLinkedinIn/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>2022</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="/">Akash Rathour</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
