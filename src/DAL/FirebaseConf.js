import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";
import { residentConverter } from "../DTO/ResidentDTO";

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // Other configuration options, such as the Realtime Database / Firestore details...
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(config);
const db = getFirestore(app);

// Collections
const residentRef = collection(db, "Residents").withConverter(residentConverter);


export const auth = getAuth(app);
export {db};
export {residentRef};
