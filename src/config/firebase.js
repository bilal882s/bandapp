import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
    apiKey: "AIzaSyBTDu0XiKEC_7C69_NnxB1f8x8z7oGRdpw",
    authDomain: "ecommerance882.firebaseapp.com",
    projectId: "ecommerance882",
    storageBucket: "ecommerance882.appspot.com",
    messagingSenderId: "270222563905",
    appId: "1:270222563905:web:93307abbcce37cb9a984c0",
    measurementId: "G-YKBWTC3JG7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();
export { db, auth, analytics, provider, facebookprovider }