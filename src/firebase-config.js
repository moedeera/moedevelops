import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const displayName = user.displayName;
      const photoURL = user.photoURL;
      const email = user.email;

      // Additional information from Firebase may include gender and age
      // These details are commonly not directly provided by Google Sign-In, but could be stored in Firebase Authentication custom claims or user metadata

      // You can customize this part based on where your additional user information is stored

      // Create an info object with extracted information
      const info = {
        name: displayName,
        pic: photoURL,
        email,
      };

      localStorage.setItem("user", JSON.stringify(info));
      console.log(info);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { app, db, signInWithGoogle };
