import React from "react";
import Data from "./db.jsx";

const EmpData = () => {
  return (
    <>
      {Data.map((db, index) => {
        if (index < 5) {
          return (
            <div key={db.id} className="" style={{ marginTop: `20px`,marginBottom: `20px`, flexBasis: `33.333%` }}>
              <span>{db.id}</span>
              <br></br>
              {/* <input type="text"  ref={inputbox} /> */}
              <span>{db.name}</span>

              <br></br>
              <span>{db.desc}</span>
              <br></br>
              <span>{db.designation}</span>
            </div>
          );
        }
      })}
    </>
  );
};
export default EmpData;
