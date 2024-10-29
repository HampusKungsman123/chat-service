import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQGkvgK59cbn2-1QmHxYup36v4gbQnd1g",
  authDomain: "chat-60e57.firebaseapp.com",
  projectId: "chat-60e57",
  storageBucket: "chat-60e57.appspot.com",
  messagingSenderId: "850493471606",
  appId: "1:850493471606:web:cca4e3eea617acd7565857",
  measurementId: "G-D9JJ3JEXW8",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
