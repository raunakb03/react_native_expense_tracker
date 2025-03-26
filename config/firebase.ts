import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVeM7rPBl1zKx8LMBA8lZoZMyAkPWunaA",
    authDomain: "react-native-expense-tra-5cd40.firebaseapp.com",
    projectId: "react-native-expense-tra-5cd40",
    storageBucket: "react-native-expense-tra-5cd40.firebasestorage.app",
    messagingSenderId: "786964429713",
    appId: "1:786964429713:web:773133232dbba7c9f53830"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
