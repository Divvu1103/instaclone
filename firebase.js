// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import {getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRRpyDU5nJd4NqcNqcraKoi8Sa8b7NAhs",
  authDomain: "insta-7db13.firebaseapp.com",
  projectId: "insta-7db13",
  storageBucket: "insta-7db13.appspot.com",
  messagingSenderId: "317773281858",
  appId: "1:317773281858:web:58382ada81c056683a4bdb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();
const db =getFirestore();
const storage= getStorage();
export {app,db,storage};