import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    if(request.nextUrl.pathname.startsWith('/private/dashboard') && !request.cookies.has('weak-session'))
    {
        return NextResponse.redirect(new URL('/private/login', request.url))
    }

    const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
    const cspHeader = `
      frame-ancestors 'self' http://localhost:8080;
      upgrade-insecure-requests;
  `
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
      .replace(/\s{2,}/g, ' ')
      .trim()
   
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-nonce', nonce)
   
    requestHeaders.set(
      'Content-Security-Policy',
      contentSecurityPolicyHeaderValue
    )
   
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
    response.headers.set(
      'Content-Security-Policy',
      contentSecurityPolicyHeaderValue
    )

    return response
}