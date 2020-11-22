import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAfcqhvR9Zx5WM7Gxqlnqmorin82NUd00c",
  authDomain: "holexx-road.firebaseapp.com",
  databaseURL: "https://holexx-road.firebaseio.com",
  projectId: "holexx-road",
  storageBucket: "holexx-road.appspot.com",
  messagingSenderId: "935256338705",
  appId: "1:935256338705:web:3a8dbef2bd849f110b9cb0",
  measurementId: "G-0J7V3Y0EQV",
};

const holxx = firebase.initializeApp(firebaseConfig);
const db = holxx.firestore();

export default db;
