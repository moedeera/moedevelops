import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";

import { getStorage, ref } from "firebase/storage";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: "AIzaSyCH49nJNK0-SinR4VT6V0a-_FZsapLgtJ8",
  authDomain: "portfolio-33f0f.firebaseapp.com",
  projectId: "portfolio-33f0f",
  storageBucket: "portfolio-33f0f.appspot.com",
  messagingSenderId: "170316975789",
  appId: "1:170316975789:web:f8c5aaff8e7199f7920024",
  measurementId: "G-M0ZQL4395P",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    const idToken = await user.getIdToken();

    const displayName = user.displayName;
    const photoURL = user.photoURL;
    const email = user.email;

    const info = {
      name: displayName,
      pic: photoURL,
      email,
      idToken,
    };

    localStorage.setItem("user", JSON.stringify(info));
    console.log(info);
    return info;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { app, db, signInWithGoogle };
