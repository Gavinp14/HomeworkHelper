// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBFsnqtEQe8CefFEcQ5xJDNyMpxSPuFwTY",
  authDomain: "homework-planner-4d7c9-89b6b.firebaseapp.com",
  projectId: "homework-planner-4d7c9",
  storageBucket: "homework-planner-4d7c9.appspot.com",
  messagingSenderId: "776709377964",
  appId: "1:776709377964:web:3e29879a7bc2aba64fb409",
  measurementId: "G-GVRCL36G4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
