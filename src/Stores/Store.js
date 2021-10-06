
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import UsersReducer from "../Reducer/UsersReducer";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";


const Store = createStore(UsersReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase), 
    reduxReactFirebase(firebase)
    ));




export default Store;