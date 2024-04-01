import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextRequest, NextResponse, userAgent } from 'next/server'
import { headers } from 'next/headers';
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  // console.log(url.pathname);
  const { device } = userAgent(request)
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  url.searchParams.set('viewport', viewport)
  NextResponse.next()
}