/* eslint-disable import/no-unresolved */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-template */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
// Este es el punto de entrada de tu aplicacion
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
// import { myFunction } from './lib/index.js';
// myFunction();

const firebaseConfig = {
    apiKey: "AIzaSyAzfGqeX103yaOJ2nZuZuIu33UPNPPvwrA",
    authDomain: "red-social-coders-scl018.firebaseapp.com",
    projectId: "red-social-coders-scl018",
    storageBucket: "red-social-coders-scl018.appspot.com",
    messagingSenderId: "520088243760",
    appId: "1:520088243760:web:5ac140eb0cdbe2b21e67f5",
    measurementId: "G-9WBF6DXL6X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

// let createAccountBtn = document.getElementById("create-account");
let signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let signUpEmail = document.querySelector("#signup-email").value;
    let signUpPassword = document.querySelector("#signup-password").value;
    // console.log(signUpEmail, signUpPassword);

    firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((userCredential) => {
    // Signed in
    // let user = userCredential.user;
    signUpForm.reset();
    console.log("signed up");
    // ...
  });
//     .catch((error) => {
//     let errorCode = error.code;
//     let errorMessage = error.message;
//     // ..
//   });
});

