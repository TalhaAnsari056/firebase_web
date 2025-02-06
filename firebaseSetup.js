// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getAuth , GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByNhAhTBWl5X26JH0aSiQs6VJVaQXoEDY",
    authDomain: "connectfirebase-6b3cb.firebaseapp.com",
    projectId: "connectfirebase-6b3cb",
    storageBucket: "connectfirebase-6b3cb.firebasestorage.app",
    messagingSenderId: "753516825980",
    appId: "1:753516825980:web:dafcb1a3c2ecf3a48568f9"
  };
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);

const provider = new GoogleAuthProvider(); //

export { app, auth , db ,provider, GoogleAuthProvider }