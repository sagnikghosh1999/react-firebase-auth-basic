// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyeOdtxI0_C1rfobM52VxalGiUwbHOe2c",
  authDomain: "fir-react-auth-1af6c.firebaseapp.com",
  projectId: "fir-react-auth-1af6c",
  storageBucket: "fir-react-auth-1af6c.appspot.com",
  messagingSenderId: "1038157332236",
  appId: "1:1038157332236:web:1d5547564a1648b50d5329",
  measurementId: "G-01WN3G4TNF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
