import React from "react";
import Servicescard from "./Services-card";
const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <h3>
              Check our <span>Services</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row">
            <Servicescard
              icon="bx bxl-dribbble"
              name="Lorem Ipsum"
              text="Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi"
            />
            <Servicescard
              icon="bx bx-file"
              name="Sed ut perspiciatis"
              text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
            />
            <Servicescard
              icon="bx bx-tachometer"
              name="Magni Dolores"
              text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
            />
            <Servicescard
              icon="bx bx-world"
              name="Nemo Enim"
              text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
            />
            <Servicescard
              icon="bx bx-slideshow"
              name="Dele cardo"
              text="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"
            />
            <Servicescard
              icon="bx bx-arch"
              name="Divera don"
              text="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
