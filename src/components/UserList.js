
import React from "react";
import User from "./User";
import { connect } from "react-redux";

const UserList = ({ users, deleteUser }) => {
  const userList = users.map((user) => {
    return (
      <User
        user={user}
        key={user.id}
        deleteUser={deleteUser}
       
      />
    );
  });
  return <div className="user-list">{userList}</div>;
};
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
export default connect (mapStateToProps) (UserList);
