import React, { Component } from "react";
// import { connect } from 'react-redux';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";

class App extends Component {
  
  handleAddUser =(newUser) => {
    newUser.id =Math.random().toString();
    this.setState({
      users: [...this.state.users, newUser]
    })
  }
 
  // addNewUser = (user) => {
  //   this.props.addUser(user)
   
  // };
  // deleteUser = user_id => { 
  //   this.props.deleteUser(user_id)
  // };
  handleDeleteUser = (userId) => {
    const savedusers = this.state.users.filter((user) => {
      return user.id !== userId;
    });
    this.setState({ users: savedusers });
  };
  handleEditUser = (id, updateUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updateUser : user
      ),
    });
  };





  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddUserForm addUser={this.handleAddUser} />
            
            </Col>

            <Col>
              <Users
                usersData={this.props.users}
                deleteUser={this.handleDeleteUser}
                editUser={this.handleEditUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
// users: state.users
// });

// const mapDispatchToprops = { 
//   addUser: addUser,
//   DeleteUser: DeleteUser,  
//   getAllUsers: getAllUsers 
// };
 
export default App;
