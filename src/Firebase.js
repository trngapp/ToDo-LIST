//const firebaseConfig = {
  //  apiKey: "AIzaSyCUwhTPw3nGuYLAc5LDGjd4H058YkQqhNU",
  /*  authDomain: "todo-app-cp-1104b.firebaseapp.com",
    projectId: "todo-app-cp-1104b",
    storageBucket: "todo-app-cp-1104b.appspot.com",
    messagingSenderId: "743080387969",
    appId: "1:743080387969:web:f3eaff5cb9237229dcb480",
    measurementId: "G-GHZ2D6Z0XJ"
  };*/

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBSix4XDEMiMB5s7frMjxCt7GinefNezWQ",
  authDomain: "todo-8409a.firebaseapp.com",
  projectId: "todo-8409a",
  storageBucket: "todo-8409a.appspot.com",
  messagingSenderId: "690043629379",
  appId: "1:690043629379:web:a2567ef5041a6a8ccb09f6",
  measurementId: "G-5FJYSGCHQ5"

  });
  const db =firebaseApp.firestore();

  export default db;
