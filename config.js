// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxP0GeSzcxqwoLvHZ9jOfhgvXvDR7h4CY",
  authDomain: "spectagram-89800.firebaseapp.com",
  projectId: "spectagram-89800",
  storageBucket: "spectagram-89800.appspot.com",
  messagingSenderId: "583806089164",
  appId: "1:583806089164:web:e83bf5ab6f26788a128f69"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseApp.auth();

