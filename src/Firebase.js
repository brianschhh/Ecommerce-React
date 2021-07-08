import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDly5mM4d2X8MgQz3hZO7CdR4xhqQrY844",
  authDomain: "ecommercecoderreact.firebaseapp.com",
  projectId: "ecommercecoderreact",
  storageBucket: "ecommercecoderreact.appspot.com",
  messagingSenderId: "981548252670",
  appId: "1:981548252670:web:48725b5e14199d22e714af",
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
