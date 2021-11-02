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
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { firebaseConfig } from "./lib/firebase";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app);


document.getElementById("create-account").addEventListener("click", () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("created");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode + errorMessage);
        });

})

