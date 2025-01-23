import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    if(request.nextUrl.pathname.startsWith('/private/dashboard') && !request.cookies.has('weak-session'))
    {
        return NextResponse.redirect(new URL('/private/login', request.url))
    }

    const cspHeader = `
      frame-ancestors 'self' http://localhost:8080 https://*.akeneo.com;
      upgrade-insecure-requests;
  `
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
      .replace(/\s{2,}/g, ' ')
      .trim()

    const response = NextResponse.next()

    response.headers.set(
      'Content-Security-Policy',
      contentSecurityPolicyHeaderValue
    )

    return response
}