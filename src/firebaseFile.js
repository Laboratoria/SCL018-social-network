/* eslint-disable padded-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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
const db = getFirestore(app);

console.log(app);
const provider = new GoogleAuthProvider(app);

export const signUp = (signUpEmail, signUpPassword) => {
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
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
}

export const loginWithEmail = (loginEmail, loginPassword) => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.hash = "#/timeline";
            console.log("logged in");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage);
        });
}

export const loginWithGoogle = () => {
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            window.location.hash = "#/timeline";
            console.log("logged in with google");
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(errorMessage);
        });
}


export const postear = async (input) => {
    const docRef = await addDoc(collection(db, "publicaciones"), {
        titulo: input
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
}
export const leerData = async () => {
    const querySnapshot = await getDocs(collection(db, "publicaciones"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}

