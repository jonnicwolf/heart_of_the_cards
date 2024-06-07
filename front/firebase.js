import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey:process.env.VITE_FIREBASE_API_KEY,
  authDomain:process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectID:process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.VITE_FIREBASE_APP_ID,
  measurementId:process.env.VITE_FIREBASE_MEASUREMENT_ID,
})

export const auth = app.auth();
export default app;