
export const registerWithEmail = (email, password) => {  
  return (dispatch, state, {getFirebase})=> {

    let firebase = getFirebase()
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    });
      }
}


export const logInWithEmail = (email, password) => {
    return (dispatch, state, { getFirebase}) => {
  
      let firebase = getFirebase()
      firebase.auth().signInWithEmailAndPassword(email, password)  
        .then((response) => {
          console.log(response);
        })
        .catch((error) =>{
            console.log(error)
        });
    };
  };

  export const logInWithGoogle = () =>{
    return (dispatch, state, {getFirebase}) =>{
      let firebase =getFirebase()
       let provider = new firebase.auth.GoogleAuthProvider();
       firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
          console.log(res)
        })
        .catch((err) =>{console.log(err)
        })
  }
};

export const logOutUser  =( )=>{
  return(dispatch, state,{getFirebase})=>{
    let firebase = getFirebase();
  
  firebase
    .auth()
    .signOut()
    .then((user) => {
    console.log(user)
  })
  .catch((error) => {
    console.log(error)
  });
}
}