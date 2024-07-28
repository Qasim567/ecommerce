import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAorSAreHUgRgEqL4XvDlnoNrS0QHKIgOg",
  authDomain: "myfirstwebsite-d2c6a.firebaseapp.com",
  projectId: "myfirstwebsite-d2c6a",
  storageBucket: "myfirstwebsite-d2c6a.appspot.com",
  messagingSenderId: "887125197784",
  appId: "1:887125197784:web:ec3c5620bd928cd92468ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB, auth}