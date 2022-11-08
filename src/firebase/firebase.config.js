import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB4qF15XHduIV0MO2Yf5XDAwBy4RCvIZ0g",
    authDomain: "professor360-13eac.firebaseapp.com",
    projectId: "professor360-13eac",
    storageBucket: "professor360-13eac.appspot.com",
    messagingSenderId: "896882300131",
    appId: "1:896882300131:web:b9c71c6ac927f57290e1d6"
};

const app = initializeApp(firebaseConfig);

export default app;