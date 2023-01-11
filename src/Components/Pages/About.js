import React from "react";
import { Aboutcard } from "./About-card";
const About = () => {
  // console.log("ys lod")
  return (
    <>
      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <Aboutcard
              Icon="bx bxl-dribbble"
              Name="Lorem Ipsum"
              text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
            />
            <Aboutcard
              Icon="bx bx-file"
              Name="
            Sed ut perspiciatis"
              text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
            />
            <Aboutcard
              Icon="bx bx-world"
              Name="Nemo Enim"
              text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
            />
            <Aboutcard
              Icon="bx bx-tachometer"
              Name="
            Magni Dolores"
              text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
            />
          </div>
        </div>
      </section>
      {/* <!-- End Featured Services Section -->

    <!-- ======= About Section ======= --> */}
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <h3>
              Find Out More <span>About Us</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={require("../../assets/img/about.jpg")}
                className="img-fluid"
                alt="image no found"
              />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bx bx-store-alt"></i>
                  <div>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p>
                      Magni facilis facilis repellendus cum excepturi quaerat
                      praesentium libre trade
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bx bx-images"></i>
                  <div>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p>
                      Quo totam dolorum at pariatur aut distinctio dolorum
                      laudantium illo direna pasata redi
                    </p>
                  </div>
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="clients section-bg">
        <div className="container" data-aos="zoom-in">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../../assets/img/clients/client-1.png")}
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../../assets/img/clients/client-2.png")}
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../../assets/img/clients/client-3.png")}
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../../assets/img/clients/client-4.png")}
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../../assets/img/clients/client-5.png")}
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={require("../../assets/img/clients/client-6.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
