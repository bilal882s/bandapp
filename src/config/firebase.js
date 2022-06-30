// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTDu0XiKEC_7C69_NnxB1f8x8z7oGRdpw",
    authDomain: "ecommerance882.firebaseapp.com",
    projectId: "ecommerance882",
    storageBucket: "ecommerance882.appspot.com",
    messagingSenderId: "270222563905",
    appId: "1:270222563905:web:d57e6f95ba1ecc29a984c0",
    measurementId: "G-MPJDWBLGTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, analytics }