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
    measurementId: "G-9WBF6DXL6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);