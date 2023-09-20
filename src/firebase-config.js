import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { getStorage, ref } from "firebase/storage";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyACCj3pb7TCbohkdMp0sZt_b8iAahjNVcg",
//   authDomain: "moedevelops.firebaseapp.com",
//   projectId: "moedevelops",
//   storageBucket: "moedevelops.appspot.com",
//   messagingSenderId: "319955006674",
//   appId: "1:319955006674:web:21f1cb783cd71fe809290b",
//   measurementId: "G-2S8LN0R0BT",
// };

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

export { app, db };
