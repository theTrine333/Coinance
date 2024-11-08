// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaEPngh4aehSxatcc-5jPY72KcbacV19o",
  authDomain: "coinance-12e88.firebaseapp.com",
  projectId: "coinance-12e88",
  storageBucket: "coinance-12e88.firebasestorage.app",
  messagingSenderId: "378577697408",
  appId: "1:378577697408:web:b7815444b578be5c020465",
  measurementId: "G-PTH6T72KGH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const analytics = getAnalytics(app);
