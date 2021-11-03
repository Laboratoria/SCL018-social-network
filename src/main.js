/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-spacing */
/* eslint-disable import/newline-after-import */
/* eslint-disable comma-spacing */
/* eslint-disable space-in-parens */
/* eslint-disable no-restricted-globals */
/* eslint-disable eol-last */
/* eslint-disable object-curly-newline */
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
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

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
const provider = new GoogleAuthProvider(app);

// template sign-up

const signUpTemplate = `<h1 class="coders-title">CODERS</h1>
  <section class="logo-container">
    <img
      class="logo-coders"
      src="./images/logo_principal.png"
      alt="logo CODERS"
    />
  </section>
  <input
    type="email"
    id="signup-email"
    class="input-box"
    name=""
    placeholder="Ingrese su email"
  />
  <input
    title="Debe tener 6 caracteres mínimo"
    type="password"
    id="signup-password"
    class="input-box"
    placeholder="Ingrese una contraseña"
  />
  <button class="login-button create-account">Crear cuenta</button>`;
const rootHTML = document.getElementById("root");



document.querySelector("#create-account-link").addEventListener("click", ()=>{
    
    rootHTML.innerHTML = ``;
    rootHTML.innerHTML += signUpTemplate;
    history.pushState(null, "","sign-up")


})

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

// document.querySelector(".create-account").addEventListener("click", () => {
//     history.pushState(null, "","login")
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

// document.querySelector(".login-google").addEventListener("click", () => {
//     signInWithRedirect(auth, provider);
//     getRedirectResult(auth)
//         .then((result) => {
//             // This gives you a Google Access Token. You can use it to access Google APIs.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;

//             // The signed-in user info.
//             const user = result.user;
//             console.log("logged in with google");
//         }).catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//             console.log(errorMessage);
//         });

// })