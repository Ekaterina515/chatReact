// import firebase from "firebase/compat/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjDw8VETBlEJ_qiG6_ycUktbnkKvouc38",
  authDomain: "react-chat-25ac9.firebaseapp.com",
  databaseURL:
    "https://react-chat-25ac9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-chat-25ac9",
  storageBucket: "react-chat-25ac9.appspot.com",
  messagingSenderId: "784284082532",
  appId: "1:784284082532:web:d5ed66959aa84649e8da71",
};

// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const db = firebaseApp.database();
firebase.initializeApp(firebaseConfig);