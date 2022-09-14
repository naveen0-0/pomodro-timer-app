import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9WzEXYlE-r2Oe8xLXqzSSkhf0P62i9o0",
  authDomain: "mtechzillaassignment.firebaseapp.com",
  projectId: "mtechzillaassignment",
  storageBucket: "mtechzillaassignment.appspot.com",
  messagingSenderId: "105599023808",
  appId: "1:105599023808:web:46c1b8b72c59b31427cb25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);