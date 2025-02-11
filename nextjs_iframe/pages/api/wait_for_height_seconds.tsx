import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    sleep(8000).then(() => { res.status(200).json({ message: 'Action correctly triggered' }); });
  } else {
    res.status(404).json({ message: 'Demo endpoint which waits 8sec before responding 200/OK on POST' });
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}