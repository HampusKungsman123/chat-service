import React from "react";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import * as firebase from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQGkvgK59cbn2-1QmHxYup36v4gbQnd1g",
  authDomain: "chat-60e57.firebaseapp.com",
  projectId: "chat-60e57",
  storageBucket: "chat-60e57.appspot.com",
  messagingSenderId: "850493471606",
  appId: "1:850493471606:web:cca4e3eea617acd7565857",
  measurementId: "G-D9JJ3JEXW8",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Test chat app med firebase</h1>
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </header>
    </div>
  );
}

function SignIn() {
  const signInWithEmail = async () => {
    await auth.signInWithPopup(new EmailAuthProvider());

    // Create a new user document in firestore
    const user = auth.currentUser;
    const userRef = firestore.collection("users").doc(user.uid);
    await userRef.set({
      uid: user.uid,
      email: user.emial,
      pfp: user.photoURL,
      displayName: user.displayName,
    });
  }
}

export default App;
