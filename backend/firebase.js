import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDMPdgGiAvJoMA0NUiOiX5IAZWawP8DNZ4",
    authDomain: "projeto-crud-77ce1.firebaseapp.com",
    projectId: "projeto-crud-77ce1",
    storageBucket: "projeto-crud-77ce1.firebasestorage.app",
    messagingSenderId: "218710839782",
    appId: "1:218710839782:web:e10ed2304e5e74ea61c627"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;