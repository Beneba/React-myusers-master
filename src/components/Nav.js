import React from "react";
import { Container, Button, Navbar } from "react-bootstrap";
import {connect} from 'react-redux';
import {logOutUser} from '../Actions/authActions';


 function Nav (props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.connectlogOutUser()
  };

  return (
    <Navbar>
        <Container>
          <Navbar.Brand href="#home">UsersApp </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {/* logout button */}
              <Button variant="danger"  onClick={props.logOutUser} >
                Logout
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}
const mapStateToProps =() =>{
    
}
 

const mapDispatchToProps ={
  logOutUser
  
}

export default  connect (mapStateToProps, mapDispatchToProps) (Nav);