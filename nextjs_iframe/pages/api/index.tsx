import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
  endpoints: object
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    res.status(200).json({
      message: 'Use following endpoints for testing purpose',
      endpoints: { 
        success: '/api/success',
        error: '/api/error',
        not_found: '/api/not_found',
        timeout: '/api/wait_for_height_seconds',
      } 
    })
}