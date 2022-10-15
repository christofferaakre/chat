import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// NOTE: It is okay for the client to see
// the firebase API key and this other information. In fact,
// it is necessary. This is not like the API key for many other services
// where it must be kept secret. Exposing this information to the client
// is 100% fine and necessary.
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
