/* eslint-disable padded-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

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
const auth = getAuth(app);
console.log(app);


// document.querySelector("#create-account").addEventListener("click", () => {
//     const signUpEmail = document.getElementById("signup-email").value;
//     const signUpPassword = document.getElementById("signup-password").value;

//     createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             // ...
//             console.log("created");
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//             console.log(errorCode + errorMessage);
//         });
// })

document.querySelector(".login-btn").addEventListener("click", () => {

    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("logged in");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
        });

});

