import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAuv4B2W5ZMc4EZeaa8jilRATF2zgCqig",
  authDomain: "carboncopy-85fda.firebaseapp.com",
  projectId: "carboncopy-85fda",
  storageBucket: "carboncopy-85fda.appspot.com",
  messagingSenderId: "903816824570",
  appId: "1:903816824570:web:30cc57784a4336f1a9eb43",
  measurementId: "G-W8BMEM0JXZ",
};

// initializes the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

//  db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
