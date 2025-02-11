import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    res.status(500).json({ message: 'Destination of this call is not in good shape.' })
  } else {
    res.status(404).json({ message: 'Demo endpoint which returns 500 error' })
  }
}