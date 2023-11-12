import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr6FPFnfsfc4NQbmbdMoNb8_XB23FOpsY",
  authDomain: "crwn-clothing-db-33281.firebaseapp.com",
  projectId: "crwn-clothing-db-33281",
  storageBucket: "crwn-clothing-db-33281.appspot.com",
  messagingSenderId: "1001799900512",
  appId: "1:1001799900512:web:ab27998605bab91d95d205",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log(error.message);
    }
  }
};
