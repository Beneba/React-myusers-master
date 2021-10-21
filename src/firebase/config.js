// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZdL1IgyIyV4EfnrPT3UNaeOfzc-A06Ws",
  authDomain: "myusers-a71b6.firebaseapp.com",
  projectId: "myusers-a71b6",
  storageBucket: "myusers-a71b6.appspot.com",
  messagingSenderId: "504215342705",
  appId: "1:504215342705:web:93eb2b58f77907e73b15d0"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig)
  firebase.firestore();

  export default firebase;