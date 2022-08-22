// import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoPxFS3_Wyc5tGSPjjOLNIcl18PAyVNus",
  authDomain: "blog-bc269.firebaseapp.com",
  projectId: "blog-bc269",
  storageBucket: "blog-bc269.appspot.com",
  messagingSenderId: "884007780124",
  appId: "1:884007780124:web:3ea7836dea7fd48f8d44d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
