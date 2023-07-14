import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC8IXxyL98sVEfv1ZQjtIH10RA2AcD4G7U",
  authDomain: "sweet-home-els.firebaseapp.com",
  projectId: "sweet-home-els",
  storageBucket: "sweet-home-els.appspot.com",
  messagingSenderId: "414630378821",
  appId: "1:414630378821:web:95cb327447fe3feddb922c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)