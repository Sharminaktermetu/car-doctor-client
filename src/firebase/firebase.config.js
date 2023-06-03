// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk_OFf9_nC25zXk5zYPexuAZkOsYEhUgU",
  authDomain: "car-doctor-93c2b.firebaseapp.com",
  projectId: "car-doctor-93c2b",
  storageBucket: "car-doctor-93c2b.appspot.com",
  messagingSenderId: "318859600742",
  appId: "1:318859600742:web:9dd333c8e2c93de27e5ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;