import React from "react";
import AddUserForm from "../AddUserForm";
import Users from "../Users";
import Nav from "../Nav";

import { Container, Row, Col } from "react-bootstrap";


const Home = () => {
  return (
    <div>
      <Nav />
      <Container fluid style={{ marginTop: "2rem" }}>
        <Row>
          <Col md="4">
            <AddUserForm />
          </Col>

          <Col>
            <Users />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
