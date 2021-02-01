import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyC7JQ7sVD8aTrOat9Vo02CUGiBrz_9YNa4",
    authDomain: "jfodesola1.firebaseapp.com",
    projectId: "jfodesola1",
    storageBucket: "jfodesola1.appspot.com",
    messagingSenderId: "545605148135",
    appId: "1:545605148135:web:d745010b45996913237142",
    measurementId: "G-WH823HKPTF"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
firebase.analytics();

export {firebase as default, auth, storage, firestore}