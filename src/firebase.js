import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
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

export const userLogin = () => {
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
};

export const loginWithGoogle = () => {
  document.getElementById("googleLogin").addEventListener("click", function () {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("logged in with Google");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  });
};
// const analytics = getAnalytics(app);
