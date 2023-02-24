import { NextApiRequest, NextApiResponse } from 'next';

export default async function Hello(req: NextApiRequest, res: NextApiResponse) {
    return res.json({ hello: 'world' });
}
