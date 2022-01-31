import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSuYhl1J-baVlDTX8IMFk2jEVc9hZUbJs",
  authDomain: "linked-clone-e94af.firebaseapp.com",
  projectId: "linked-clone-e94af",
  storageBucket: "linked-clone-e94af.appspot.com",
  messagingSenderId: "760576240210",
  appId: "1:760576240210:web:91be1fed3f62da34a20d8b",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
