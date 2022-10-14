import admin from 'firebase-admin';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

const serviceAccount = require('../firebase-credentials.json');

if(admin.apps.length === 0)
    initializeApp({
        credential: cert(serviceAccount)
    });

export const db = getFirestore();
