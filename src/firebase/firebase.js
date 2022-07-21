import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAM5xPNVrg311sazv84zxlOdXbIG4bFkrM",
  authDomain: "tienda-react-371a0.firebaseapp.com",
  projectId: "tienda-react-371a0",
  storageBucket: "tienda-react-371a0.appspot.com",
  messagingSenderId: "459357652949",
  appId: "1:459357652949:web:6810357abf71f9293c9f5c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)