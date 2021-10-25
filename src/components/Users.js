import React from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User";
import { connect } from 'react-redux';

const Users = (props) => {
  return (
    <Container>
      <Row>
        {props.users.map((user) => {
          return (
            <User 
            userInfo={user} 
            key={user.id} 
            deleteUser={props.deleteUser} 
            editUser = {props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return{
    users:state.usersState.users,
  }
}

export default connect(mapStateToProps) (Users);
