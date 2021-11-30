/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
  getAuth,
  // eslint-disable-next-line no-unused-vars
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  // getRedirectResult,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
  deleteDoc,
  doc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

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
export const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);

export const signUp = () => {
  const signUpEmail = document.getElementById("emailSignUp").value;
  const signUpPassword = document.getElementById("passwordSignUp").value;
  const signUpUserName = document.getElementById("userSignUp").value;
  if (
    signUpPassword.length < 6
    && signUpEmail === ""
    && signUpUserName === ""
  ) {
    alert("ingrese datos");
  } else if (signUpPassword.length < 6) {
    alert("contraseña debe ser mayor a 6 digitos");
  } else if (signUpEmail === "") {
    alert("ingrese email");
  } else if (signUpUserName === "") {
    alert("ingrese nombre de usuario");
  } else {
    createUserWithEmailAndPassword(
      auth,
      signUpEmail,
      signUpPassword,
      signUpUserName,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        alert("usuario creado");
        console.log(user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorCode + errorMessage;
      });
  }
};

export const userLogin = () => {
  const loginEmail = document.getElementById("emailLogin").value;
  const loginPassword = document.getElementById("passLogin").value;
  if (loginEmail === "" || loginPassword === "") {
    alert("email o contraseña no ingresados");
  } else {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        // const mail = userCredential.user.mail;
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorCode + errorMessage;
      });
  }
};

export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    // getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.displayName);
      console.log("usuario creado con google");
      return `${user} + logged in with google + ${token}`;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      console.log(error);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("usuario no creado");
      return errorMessage + errorCode + email + credential;
    });
};

export const postData = async (postTheme, postMessage) => {
  const docRef = await addDoc(collection(db, "publicaciones"), {
    username: auth.currentUser.displayName,
    userId: auth.currentUser.uid,
    theme: postTheme,
    message: postMessage,
    datePost: Date(Date.now()),
  });
  console.log("Document written with ID: ", docRef.id);
  return docRef;
};

export const readData = (callback, publicaciones) => {
  const q = query(collection(db, publicaciones), orderBy("datePost", "desc"));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((document) => {
      // console.log(document);
      const element = {};
      element.id = document.id;
      element.data = document.data();
      posts.push({ element });
      // console.log(element);
    });
    callback(posts);
  });
};

export const logOut = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = "#/landing";
      console.log(`bai bai`);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const observer = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.hash = "#/wall";
      const uid = user.uid;
      console.log(`bienvenida ${uid}`);
    } else if (!user) {
      if (window.location.hash !== "#/register") {
        logOut();
      }
    }
  });
};

export const deletePost = async (id) => {
  await deleteDoc(doc(db, "publicaciones", id));
  console.log(id);
};

export const updatePost = async (id, themeUpdate, messageUpdate) => {
  const uniquePost = doc(db, "publicaciones", id);
  await updateDoc(uniquePost, {
    // id: idUpdate,
    theme: themeUpdate,
    message: messageUpdate,
  });
};
