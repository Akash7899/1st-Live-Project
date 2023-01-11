import React, { useEffect } from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Aos from "aos";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>
            Welcome to <span>1st-STEP.</span>
          </h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <div className="d-flex">
            <Link to={"/"} className="btn-get-started scrollto">
              Get Started
            </Link>
            <Link
              to={{ pathname: "https://youtu.be/bON-KPiiNCk?t=7" }}
              target={"_blank"}
              className="glightbox btn-watch-video"
            >
              <AiOutlinePlayCircle className="play" />
              <span>Watch Video</span>
            </Link>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Team />
    </>
  );
};
export default Home;
