// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AI",
    // authDomain: "loan-mana",
    // projectId: "loan-mana",
    // storageBucket: "loan-mana",
    // messagingSenderId: "78",
    // appId: "1:7",
    // measurementId: "G"
    apiKey: "AIzaSyBNXpZql4ENTKdammJ0WBT-a4-geSM7T_k",
  authDomain: "loan-management-system-623bb.firebaseapp.com",
  projectId: "loan-management-system-623bb",
  storageBucket: "loan-management-system-623bb.firebasestorage.app",
  messagingSenderId: "925056605297",
  appId: "1:925056605297:web:7c68e66ba54b6feae68fd0",
  measurementId: "G-T788GF8TTY"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider(auth);

provider.setCustomParameters({
    prompt: "select_account"
});

const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const db = getFirestore(app);

// const analytics = getAnalytics(app);

export { auth, signInWithGooglePopup, db };