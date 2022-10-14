// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {db} from '../../firebase/index';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const docRef = db.collection('test').doc('new-dic');

  console.log(req.body.data);

  await docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815
  });

  res.status(200).json({ name: 'John Doe' })

}
