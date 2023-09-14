import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWvPOYoz8XRWBRQpe9hJNfvF8phM16NjU",
    authDomain: "sgsuite-ddec4.firebaseapp.com",
    projectId: "sgsuite-ddec4",
    storageBucket: "sgsuite-ddec4.appspot.com",
    messagingSenderId: "752505235879",
    appId: "1:752505235879:web:f977a67fca64c1529f2e82"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)