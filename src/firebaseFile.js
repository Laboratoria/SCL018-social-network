/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
  deleteDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAzfGqeX103yaOJ2nZuZuIu33UPNPPvwrA',
  authDomain: 'red-social-coders-scl018.firebaseapp.com',
  projectId: 'red-social-coders-scl018',
  storageBucket: 'red-social-coders-scl018.appspot.com',
  messagingSenderId: '520088243760',
  appId: '1:520088243760:web:5ac140eb0cdbe2b21e67f5',
  measurementId: 'G-9WBF6DXL6X',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);
// const user = auth.currentUser;

export const signUp = (signUpEmail, signUpPassword) => {
  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
      // Signed in
      window.location.hash = '#/login';
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log('created');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
    });
};

export const loginWithEmail = (loginEmail, loginPassword) => {
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in
      window.location.hash = '#/postWall';
      const user = userCredential.user;

      console.log('logged in');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};

export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/postWall';
      console.log('logged in with google');
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
};
export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = '#/login';
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
};
export const authState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (window.location.hash !== '#/timeline') {
        // User is signed out
        window.location.hash = '#/postWall';
      } 
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else if (!user) {
      if (window.location.hash !== '#/createUser') {
        // User is signed out
        window.location.hash = '#/login';
      } else {
        console.log('Crea tu cuenta');
      }
    }
  });
};

export const addData = async (title, description, link) => {
  const docRef = await addDoc(collection(db, 'publicaciones'), {
    username: auth.currentUser.displayName,
    userId: auth.currentUser.uid,
    headerPost: title,
    content: description,
    referenceLink: link,
    likes: [],
    likesCounter: 0,
    datePosted: Timestamp.fromDate(new Date()),
  });
  return docRef;
};
export const readData = (callback, publicaciones) => {
  const q = query(collection(db, publicaciones), orderBy('datePosted', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((document) => {
      const element = {};
      element.id = document.id;
      element.data = document.data();
      posts.push({ element });
    });
    console.log(posts);
    callback(posts);
  });
};
export const deleteDocData = async (id) => {
  await deleteDoc(doc(db, 'publicaciones', id));
};

export const updateData = async (id, titleUpdate, descriptionUpdate, linkUpdate) => {
  const postRef = doc(db, 'publicaciones', id);
  await updateDoc(postRef, {
    headerPost: titleUpdate,
    content: descriptionUpdate,
    referenceLink: linkUpdate,
  });
};

export const updateLikes = async (id, likesUpdate) => {
  const postRef = doc(db, 'publicaciones', id);
  const docSnap = await getDoc(postRef);
  const postData = docSnap.data();
  const likesCount = postData.likesCounter;

  if ((postData.likes).includes(likesUpdate)) {
    await updateDoc(postRef, {
      likes: arrayRemove(likesUpdate),
      likesCounter: likesCount - 1,
    });
  } else {
    await updateDoc(postRef, {
      likes: arrayUnion(likesUpdate),
      likesCounter: likesCount + 1,
    });
  }
};
