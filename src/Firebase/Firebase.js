import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCVCBALRJ3LDlJMxH_AQ18naHYb5Lj90sQ",
  authDomain: "student-auth-49e8c.firebaseapp.com",
  projectId: "student-auth-49e8c",
  storageBucket: "student-auth-49e8c.appspot.com",
  messagingSenderId: "8163238752",
  appId: "1:8163238752:web:ec3383203041db7305b405"
};

// Initialize Firebase
const MyFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(MyFirebase);

export const db = getFirestore(MyFirebase);