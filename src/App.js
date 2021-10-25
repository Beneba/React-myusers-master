import React, { Component } from "react";
// import { connect } from 'react-redux';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Router  from '../src/Router';

class App extends Component {
  
  // handleAddUser =(newUser) => {
  //   newUser.id =Math.random().toString();
  //   this.setState({
  //     users: [...this.state.users, newUser]
  //   })
  // }
 
  // // addNewUser = (user) => {
  // //   this.props.addUser(user)
   
  // // };
  // // deleteUser = user_id => { 
  // //   this.props.deleteUser(user_id)
  // // };
  
  // handleDeleteUser = (userId) => {
  //   const savedusers = this.state.users.filter((user) => {
  //     return user.id !== userId;
  //   });
  //   this.setState({ users: savedusers });
  // };
  // handleEditUser = (id, updateUser) => {
  //   this.setState({
  //     users: this.state.users.map((user) =>
  //       user.id === id ? updateUser : user
  //     ),
  //   });
  // };





  render() {
    return (
      <>
      <Router />
        
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
