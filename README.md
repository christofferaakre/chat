# chat
This is a realtime chat application written in [Next.js](https://nextjs.org/).
[The Firebase Firestore](https://firebase.google.com/docs/firestore)
is used as the database.

The app is deployed at https://chat-tau-bay.vercel.app/.

## Development instructions
1. Clonse repository
2. Create a new [Firebase](https://firebase.google.com/) project and
download the configuration object
3. Create a `.env.local` file with the following contents:
     ```
     NEXT_PUBLIC_HOSTNAME=http://localhost:3000
     NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING\_SENDER\_ID
     NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_FIREBASE_MEASUREMENT_ID
     NEXT_PUBLIC_HOSTNAME=http://localhost:3000
    ```
    Note that exposing the API key and all of this information to the client is fine, and in fact
    necessary for the client to communicate with the Firestore. Many services
    give you an API key that you must keep secret, but all of this information is safe to share with
    the client, thus we can prefix these environment variables with `NEXT_PUBLIC` without worry
    so that they can be used on the client to create the database instance
4. `yarn install`
5. `yarn dev` will start the development server on `localhost:3000`.
