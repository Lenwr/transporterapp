import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAD3_lBREn2mj9hdNVG_oXmWAXpylFzI3o",
    authDomain: "aarontravelgestion.firebaseapp.com",
    projectId: "aarontravelgestion",
    storageBucket: "aarontravelgestion.appspot.com",
    messagingSenderId: "251921548029",
    appId: "1:251921548029:web:936a9dc35f715ae401f494",
    measurementId: "G-99L11P6DYT"
};

let app;

const initializeFirebase = () => {
    if (!getApps().length) {
        app = initializeApp(firebaseConfig);
    } else {
        app = getApps()[0];
    }
    return app;
};

export const getFirebaseAuth = () => {
    const initializedApp = initializeFirebase();
    return getAuth(initializedApp);
};