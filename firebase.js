import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4VkweT_CuULqpia-54M5wL0TLq7GWec0",
    authDomain: "clone-sami-ae262.firebaseapp.com",
    projectId: "clone-sami-ae262",
    storageBucket: "clone-sami-ae262.appspot.com",
    messagingSenderId: "335679903862",
    appId: "1:335679903862:web:32c0e3a7a175351e732757",
    measurementId: "G-H2V1EECKXF"
  };

  const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();
  const db=app.firestore();
  export default db;