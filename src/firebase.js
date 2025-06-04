// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrnOrtzp-XgUDo46z8qAJYEccaCFTj4Ho",
  authDomain: "ppartner-db.firebaseapp.com",
  projectId: "ppartner-db",
  storageBucket: "ppartner-db.firebasestorage.app",
  messagingSenderId: "867428021513",
  appId: "1:867428021513:web:98b5d72ff901edbfeccfd8",
  measurementId: "G-KZMF004TQP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 