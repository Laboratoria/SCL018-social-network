import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

// import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const provider = new GoogleAuthProvider(app);

document.getElementById("signup").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("created");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
});

const analytics = getAnalytics(app);
