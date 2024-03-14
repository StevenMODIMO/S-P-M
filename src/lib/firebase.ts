import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyClQV9V10Ilajdo_A5UvQ6LNdOekEM7zBw",
  authDomain: "modimo-s-portfolio.firebaseapp.com",
  projectId:"modimo-s-portfolio",
  storageBucket: "modimo-s-portfolio.appspot.com",
  messagingSenderId: "54153846047",
  appId: "1:54153846047:web:5449259d3495a3126fa42a",
  measurementId: "G-WQ8M7N58LH",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export { app, db, storage };
