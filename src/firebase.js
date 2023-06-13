// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY_2Qc-sfX1Kw9QHeX73Rx2UB9E3IPp0M",
  authDomain: "reacttest-c9ec6.firebaseapp.com",
  projectId: "reacttest-c9ec6",
  storageBucket: "reacttest-c9ec6.appspot.com",
  messagingSenderId: "605658096608",
  appId: "1:605658096608:web:6d12b1af16d48b4b814185",
  measurementId: "G-HSRE10YER3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;
export {auth,provider};