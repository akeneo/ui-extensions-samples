import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    res.status(200).json({ message: 'Action correctly triggered' })
  } else {
    res.status(404).json({ message: 'Demo endpoint which returns 200/OK on POST' })
  }
}