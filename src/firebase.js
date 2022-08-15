// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6UVQ9IDbZ236OAGB0XUvmzErfAjWUcdk",
  authDomain: "linkedin-clone-gerard.firebaseapp.com",
  projectId: "linkedin-clone-gerard",
  storageBucket: "linkedin-clone-gerard.appspot.com",
  messagingSenderId: "788125474195",
  appId: "1:788125474195:web:2afac48a90e5baa25c1c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }