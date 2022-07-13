// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyA_xL_KtfqYuWTVk3O9m7UVrCplnlmi7YY",

  authDomain: "sproutchefs-315e6.firebaseapp.com",

  databaseURL: "https://sproutchefs-315e6-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "sproutchefs-315e6",

  storageBucket: "sproutchefs-315e6.appspot.com",

  messagingSenderId: "256528511256",

  appId: "1:256528511256:web:e2600c69cb88e819e3ee6d",

  measurementId: "G-DJ29BM3FTL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);