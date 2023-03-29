
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Q6SSFAeWmcogYFknOFKjWffaXMyDjLk",
  authDomain: "react-hooks-blog-1e7c1.firebaseapp.com",
  projectId: "react-hooks-blog-1e7c1",
  storageBucket: "react-hooks-blog-1e7c1.appspot.com",
  messagingSenderId: "744202662686",
  appId: "1:744202662686:web:b94d0bf1e88cb891450f0f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();