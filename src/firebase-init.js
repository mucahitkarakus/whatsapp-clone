// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3lIjgBx1cmh2AdZm7FIu-zV-jf0PGAKo",
    authDomain: "whatsapp-clone-2-99165.firebaseapp.com",
    projectId: "whatsapp-clone-2-99165",
    storageBucket: "whatsapp-clone-2-99165.firebasestorage.app",
    messagingSenderId: "64913328652",
    appId: "1:64913328652:web:64577ef7bd89dc216c7c29",
    measurementId: "G-7W603RKWS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export { db }