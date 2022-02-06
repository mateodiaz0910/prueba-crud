// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU_bngThF8nmZjOqpNBhZYBT1Q0i_mpZ4",
  authDomain: "prueba-bd-fire.firebaseapp.com",
  projectId: "prueba-bd-fire",
  storageBucket: "prueba-bd-fire.appspot.com",
  messagingSenderId: "1086542598098",
  appId: "1:1086542598098:web:def9ca6234ade65a49c20b"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);