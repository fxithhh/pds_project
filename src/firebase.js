// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "../node_modules/firebase/database"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGivvcbc6v0YCI4IaLzS1hGIAqQUePJzc",
  authDomain: "pdsarduino.firebaseapp.com",
  databaseURL: "https://pdsarduino-default-rtdb.firebaseio.com",
  projectId: "pdsarduino",
  storageBucket: "pdsarduino.appspot.com",
  messagingSenderId: "167516175293",
  appId: "1:167516175293:web:b5cf56c1371b024e5130d4",
  measurementId: "G-6RCJB4721S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)