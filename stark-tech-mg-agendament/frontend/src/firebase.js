// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDct4eqDhMs94OYnGyyytQUIMGpf82ZSL4",
    authDomain: "starktechmg-cdc3a.firebaseapp.com",
    projectId: "starktechmg-cdc3a",
    storageBucket: "starktechmg-cdc3a.appspot.com",
    messagingSenderId: "823449666052",
    appId: "1:823449666052:web:4864e568f6632f101c6b51",
    measurementId: "G-R4RK73BP8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
