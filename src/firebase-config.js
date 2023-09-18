import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyACCj3pb7TCbohkdMp0sZt_b8iAahjNVcg",
  authDomain: "moedevelops.firebaseapp.com",
  projectId: "moedevelops",
  storageBucket: "moedevelops.appspot.com",
  messagingSenderId: "319955006674",
  appId: "1:319955006674:web:21f1cb783cd71fe809290b",
  measurementId: "G-2S8LN0R0BT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
