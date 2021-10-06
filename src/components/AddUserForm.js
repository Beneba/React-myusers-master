import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import {addUser,getAllUsers } from '../Actions/UserAction'
import { connect } from 'react-redux';

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
      id: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
      
    };

    this.props.addUser(newUser);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    // console.log('submitted' ,this.state);
  };

  componentDidMount(){
    this.props.getAllUsers( );
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Text>
          <h1>Add Details Here </h1>
        </Form.Text>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            onChange={this.handleChange}
            value ={this.state.name} 
            required
          />
        </Form.Group>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
              value ={this.state.email}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicGen">
            <Form.Label>Gen</Form.Label>
            <Form.Control
              type="number"
              placeholder="Gen"
              name="gen"
              onChange={this.handleChange}
              value ={this.state.gen}
              required
            />
          </Form.Group>
          <br />
        </Form>

        <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
const mapDispatchToprops = { 
  addUser: addUser,
  getAllUsers: getAllUsers
   
} 
export default connect(null, mapDispatchToprops ) (AddUserForm);
