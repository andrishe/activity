import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZvrxnKkfl87kp2rm2WijGN30SW8KPb0w",
  authDomain: "activity-62b89.firebaseapp.com",
  projectId: "activity-62b89",
  storageBucket: "activity-62b89.appspot.com",
  messagingSenderId: "1063260782533",
  appId: "1:1063260782533:web:1b86b4e6685feb45e0d5ac",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
