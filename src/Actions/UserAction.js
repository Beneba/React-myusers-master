export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = (user) => {
  // user.id = Math.random().toString();

  // return({
  //     type: "ADD_USER",
  //     payload: user,
  //   });

  console.log("addUser", user);

  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
      .then((docs) => {
        // dispatch({
        //   type: "ADD_USER",
        //   payload: user,
      });

    // console.log(docs);
    // }).catch(error => console.log(error));
  };
};

export const DeleteUser = (id) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore().collection("users").doc(id).delete().then();
  };
  // {
  //   type: "DELETE_USER",
  //   payload: id,
  // };
};

export const EditUser = (user_id, updatedUser) => {
  updatedUser.id = Math.random().toString();

  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(user_id) 
      .update(updatedUser)
      .then(() => {})
      .catch((err) => {});
  };
  // {
  //   type: "EDIT_USER",
  //   user_id: user_id,
  //   updatedUser: updatedUser,
  // };
}; 

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (snapshot) => {
          let users = [];
          snapshot.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id }); // Adding id from firebase that gets added when we add the user
          });

          console.log(users);
          dispatch({
            type: "SET_ALL_USERS",
            paylaod: users,
          });
        },
        (err) => {}
      );
  };
};
