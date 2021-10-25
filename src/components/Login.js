import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import {logInWithEmail, logInWithGoogle} from '../Actions/authActions';

 function Login (props) {

  if(!props.auth.isLoaded) return null
  //redireacts back to the homepage
  if(props.auth.uid) props.history.push('/');
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password= e.target.elements.password.value;
    props.logInWithEmail(email, password);
  };

  return (
    <div>
      <Container fluid style={{ marginTop: "2rem", Width: "20rem" }}>
        <Row>
          <Col md="12">
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Button onClick ={props.logInWithGoogle} >
               <img src = "https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"
                width = "200px" alt="google"/>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
const mapStateToProps =(state) =>{
    return {
      auth:state.firebase.auth
    } 
}
 

const mapDispatchToProps ={
  logInWithEmail,
  logInWithGoogle 
  
}

export default  connect (mapStateToProps, mapDispatchToProps) (Login);