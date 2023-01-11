// import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
// import { useState } from "react";
// import Teamimg1 from "../../assets/img/team/team-1.jpg";
// import Teamimg2 from "../../assets/img/team/team-2.jpg";
// import Teamimg3 from "../../assets/img/team/team-3.jpg";
// import Teamimg4 from "../../assets/img/team/team-4.jpg";

const Team = (props) => {
  // const [users, setusers] = useState([]);
  // const getUsers = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );
  //   setusers(await response.json());
  //    //const checkdata = await response.json();
  //   console.log(response);
    // const getUsers = () => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res) => res.json())
    //     .then((res) => {
    //       // console.log(res);
    //       setusers(res);
    //     });
    // };
    // useEffect(() => {
    //   getUsers();
    // }, []);
  return (
    <>
      {/* <section>
        <h2>Testing</h2>
        <div className="container-fluid mt-5">
          <div className="row text-center">
            {users.map((cruElem, index) => {
              if (index < 6) {
                return (
                  <div className="col-10 col-md-4 mt-5" key={cruElem.id}>
                    <div className="card p-2">
                      <div className="d-flex align-item-center">
                        <div className="image">
                          <img
                            src="http://localhost:3000/static/media/team-1.30c859cd9a02bb5dcc9a.jpg"
                            className="rounded"
                            width="155"
                            alt="img not found"
                          />
                        </div>
                        <div className="ml-3 w-100">
                          <h4 className="mb-0 mt-0 textLeft">{cruElem.name}</h4>
                          <span className="textLeft">{cruElem.email}</span>
                          <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column">
                              <span className="articles">{cruElem.address.street}</span>
                              <span className="number1">20</span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="followers">Followers</span>
                              <span className="number2">ssdsjhk</span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="rating">Rating</span>
                              <span className="number3">8.9</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section> */}
      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <h3>
              Our Hardworking <span>Team</span>
            </h3>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row">
            <TeamCard
              imgsrc={require("../../assets/img/team/team-1.jpg")}
              name="Walter White"
              profile="Chief Executive Officer"
            />
            <TeamCard
              imgsrc={require("../../assets/img/team/team-2.jpg")}
              name="Sarah Jhonson"
              profile="Product Manager"
            />
            <TeamCard
              imgsrc={require("../../assets/img/team/team-3.jpg")}
              name="William Anderson"
              profile="CTO"
            />
            <TeamCard
              imgsrc={require("../../assets/img/team/team-4.jpg")}
              name="Amanda Jepson"
              profile="Accountent"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
