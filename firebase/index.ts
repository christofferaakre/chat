import admin from 'firebase-admin';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';

if(admin.apps.length === 0)
    initializeApp();

export const db = getFirestore();
