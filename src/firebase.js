import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdmDqYDkezfRhJrt7pmehtU_k2VguC3n4",
  authDomain: "blog-c188e.firebaseapp.com",
  projectId: "blog-c188e",
  storageBucket: "blog-c188e.firebasestorage.app",
  messagingSenderId: "639640778974",
  appId: "1:639640778974:web:70fc252a3eb1e13facaa4f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new googleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };