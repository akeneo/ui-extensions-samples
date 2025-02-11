import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    res.status(404).json({ message: 'Destination of this call is do not exists.' })
  } else {
    res.status(404).json({ message: 'Demo endpoint which returns 404 not found on POST' })
  }
}