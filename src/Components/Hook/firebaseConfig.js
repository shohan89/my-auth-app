// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxHmA7ITxo4hHEE-LLyvLXzN7fcqgm9D4",
  authDomain: "my-auth-app-19cdd.firebaseapp.com",
  projectId: "my-auth-app-19cdd",
  storageBucket: "my-auth-app-19cdd.appspot.com",
  messagingSenderId: "581718822950",
  appId: "1:581718822950:web:b2d1b94ade94c4b5f616e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app