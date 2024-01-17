import { getApp, getApps, initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfKReQUoOcA2EICaeM0GJ6Eb8NPvBDDWs",
    authDomain: "linguify-saas-translator-app.firebaseapp.com",
    projectId: "linguify-saas-translator-app",
    storageBucket: "linguify-saas-translator-app.appspot.com",
    messagingSenderId: "425896909313",
    appId: "1:425896909313:web:51fe93d430e2e440adbe00"
};

const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };