// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../firebase/index';
import Message from '../../messages/Message';


interface ApiRequest<T> extends NextApiRequest {
    body: T
}

export default async function handler(
    req: ApiRequest<Message>,
    res: NextApiResponse
) {

    const message = req.body;
    const docRef = db.collection(message.roomId).doc(message.messageId);
    await docRef.set(message);

    const response = {data: "Pushed message to firestore"};

    res.status(200).json(response);

}
