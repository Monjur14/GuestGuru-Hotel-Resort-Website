// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB50GeXTcUL6rASrvXxkgnja_-M6SKCofM",
  authDomain: "assignment-9-98276.firebaseapp.com",
  projectId: "assignment-9-98276",
  storageBucket: "assignment-9-98276.appspot.com",
  messagingSenderId: "897162518109",
  appId: "1:897162518109:web:1403783c799bb81acdb7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;