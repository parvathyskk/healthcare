// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY8Ie3NaNjDwGx-ubO8UWepeaAbq_095o",
  authDomain: "healthcare-7833c.firebaseapp.com",
  projectId: "healthcare-7833c",
  storageBucket: "healthcare-7833c.firebasestorage.app",
  messagingSenderId: "33245263047",
  appId: "1:33245263047:web:d2876face947d021477ae2",
  measurementId: "G-KG6YZC6E17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);