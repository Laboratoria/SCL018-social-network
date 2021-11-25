/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { // aquí debería ir lo que sucede luego de registrarse
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

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
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
  });
