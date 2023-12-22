// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-da7by3MddGZOsoOTR1hG42K2x7woEu8",
    authDomain: "smrtambsys.firebaseapp.com",
    projectId: "smrtambsys",
    storageBucket: "smrtambsys.appspot.com",
    messagingSenderId: "62573057731",
    appId: "1:62573057731:web:423c9ddb9e40516c79f476",
    measurementId: "G-8FTRS5QVDN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
