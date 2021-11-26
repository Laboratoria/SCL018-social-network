/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,

} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCOgBS0CawN0G1YbGD9y-Yd8Fx1AyWfQl0',
  authDomain: 'kambalache-scl018.firebaseapp.com',
  projectId: 'kambalache-scl018',
  storageBucket: 'kambalache-scl018.appspot.com',
  messagingSenderId: '885086818843',
  appId: '1:885086818843:web:3778a32b3a0f5888dbdebe',
  measurementId: 'G-ZFMM9GB4C3',
};

// Método para registrar un usuario nuevo
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { // aquí en el then debería ir lo que sucede luego de registrarse
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });

// Método para loguear un usuario ya registrado

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
  // window.location.hash = '#/login';
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });

export const provider = new GoogleAuthProvider();
export const googleSignIn = () => {
signInWithRedirect(auth, provider);
};


export const redirection = () => {
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/home';
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
