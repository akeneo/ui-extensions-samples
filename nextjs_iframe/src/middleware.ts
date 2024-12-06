import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    if(!request.cookies.has('weak-session'))
    {
        return NextResponse.redirect(new URL('/private/login', request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: '/private/dashboard/:path*',
}