import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIbQK8eFOlW6ISEKjjcCIuTWv3vjLDb84",
  authDomain: "todo-app-9e0e2.firebaseapp.com",
  projectId: "todo-app-9e0e2",
  storageBucket: "todo-app-9e0e2.appspot.com",
  messagingSenderId: "673055266517",
  appId: "1:673055266517:web:ac6f9d30832142b7c5745c",
});

const db = firebaseApp.firestore();
export default db;
