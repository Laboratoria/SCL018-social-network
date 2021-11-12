// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDs1DSRW6_kwqsLzPZWUUtUxUdL8-ZDFf8',
  authDomain: 'mewple.firebaseapp.com',
  projectId: 'mewple',
  storageBucket: 'mewple.appspot.com',
  messagingSenderId: '796773484437',
  appId: '1:796773484437:web:e3e0968973725fff71d89c',
  measurementId: 'G-8S82JZCCV4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log(app);

console.log(document.getElementById("register"));


export const createUser = (emailSignup, passwordSignup) => {
    createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      // ...
      console.log('creado');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
    });}
// [END auth_signup_password_modular]