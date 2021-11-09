/* eslint-disable import/no-unresolved */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUzfV8SD5NXc-_42hUIkpmmrO-NugQnLs",
  authDomain: "gamer-girl-scl018.firebaseapp.com",
  projectId: "gamer-girl-scl018",
  storageBucket: "gamer-girl-scl018.appspot.com",
  messagingSenderId: "59327930943",
  appId: "1:59327930943:web:7ddf2c82611ea43950ce8a",
  measurementId: "G-MC38L54242",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app);
const provider = new GoogleAuthProvider(app);

export const signUp = () => {
  const signUpEmail = document.getElementById("emailSignUp").value;
  const signUpPassword = document.getElementById("passwordSignUp").value;

  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return errorCode + errorMessage;
    });
};

export const userLogin = () => {
  const loginEmail = document.getElementById("emailLogin").value;
  const loginPassword = document.getElementById("passLogin").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode + errorMessage;
    });
};

export const loginWithGoogle = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user + "logged in with google" + token;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      return errorMessage + email + credential;
    });
};
