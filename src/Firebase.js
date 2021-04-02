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
    apiKey: "AIzaSyCUwhTPw3nGuYLAc5LDGjd4H058YkQqhNU",
      authDomain: "todo-app-cp-1104b.firebaseapp.com",
      projectId: "todo-app-cp-1104b",
      storageBucket: "todo-app-cp-1104b.appspot.com",
      messagingSenderId: "743080387969",
      appId: "1:743080387969:web:f3eaff5cb9237229dcb480",
      measurementId: "G-GHZ2D6Z0XJ"

  });
  const db =firebaseApp.firestore();

  export default db;