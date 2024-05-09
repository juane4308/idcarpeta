
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8jBuKIE-AUCckF3eI2blXT_c8zhGWt-c",
  authDomain: "escobar-juan.firebaseapp.com",
  projectId: "escobar-juan",
  storageBucket: "escobar-juan.appspot.com",
  messagingSenderId: "591780509738",
  appId: "1:591780509738:web:da8567140b60835487eb53"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db
