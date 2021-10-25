import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import {registerWithEmail, logInWithGoogle, logOutUser} from '../Actions/authActions';


 function Register(props) {
  const handleSubmit = (e) => {

    if(!props.auth.isLoaded) return null
  //redireacts back to the homepage
  if(props.auth.uid) props.history.push('/');

    e.preventDefault();
    let email = e.target.elements.email.value // TO GET THE USER INPUT
    let password= e.target.elements.password.value
    props.registerWithEmail(email, password)  // TO SUBMIT TO FIREBASE AUTH
    props.logInWithGoogle()
  
  };

  return (
    <div>
      <Container fluid style={{ marginTop: "2rem", Width: "20rem" }}>
        <Row>
          <Col md="12">
            <h1>Register Now</h1>
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
                Join
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
  registerWithEmail,
  logInWithGoogle,
  logOutUser
  
}

export default  connect (mapStateToProps, mapDispatchToProps) (Register)