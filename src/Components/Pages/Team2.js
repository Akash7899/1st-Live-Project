import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Team2 = (props) => {
  const [user, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log("test", res);
        setUsers(res);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    
    <section>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <h1>Demo Test</h1>
        </div>
        {user.map((test) => {
          return (
            <>
              <div className="container " key={test.id}>
                <Card  border="primary" style={{ width: "18rem" }}>
                  <Card.Header>{test.name}</Card.Header>
                  <Card.Body>
                    <Card.Title>{test.username}</Card.Title>
                    <Card.Text>{test.company.catchPhrase}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Team2;
