import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = require('../firebase-credentials.json');
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
