// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCed_5qL5Nzl7LCBTVeNMu1VgdvEaEltvg",
  authDomain: "pinster-3aebf.firebaseapp.com",
  projectId: "pinster-3aebf",
  storageBucket: "pinster-3aebf.appspot.com",
  messagingSenderId: "270293153758",
  appId: "1:270293153758:web:05582161c33316cd010f4f",
  measurementId: "G-PLDQRE0PGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
})

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');

export const roomsRef = collection(db, 'rooms');
