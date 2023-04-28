import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDm_9ClR6sZcx_BKyhpdhUr-NWeBAVvVIQ",
  authDomain: "mbti-7277e.firebaseapp.com",
  projectId: "mbti-7277e",
  storageBucket: "mbti-7277e.appspot.com",
  messagingSenderId: "630349084528",
  appId: "1:630349084528:web:dee6ec0a8c9b2dc6d9c1b5"
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase_app)

export { db }
