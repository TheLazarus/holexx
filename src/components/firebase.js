import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdhiWy8jEJv6AMDLWx1nAcSngtaRZ50f8",
  authDomain: "holxx-a57f6.firebaseapp.com",
  projectId: "holxx-a57f6",
  storageBucket: "holxx-a57f6.appspot.com",
  messagingSenderId: "232138613196",
  appId: "1:232138613196:web:65a5186be749fa6110fd69",
  measurementId: "G-3J60HKPMC7",
};

const holxx = initializeApp(firebaseConfig);
const db = getFirestore(holxx);

export default db;
