import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyAin_y7ZD6H3q64RcYvzHmHRyWNA3--Ad0",
    authDomain: "bank-882.firebaseapp.com",
    projectId: "bank-882",
    storageBucket: "bank-882.appspot.com",
    messagingSenderId: "325479759071",
    appId: "1:325479759071:web:4c1a32f814acfdc1957d6a",
    measurementId: "G-JLB6L90RCH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);