import { NextResponse } from 'next/server';

export function proxy(request) {
  // Only apply to /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check for the secure authentication cookie
    const authCookie = request.cookies.get('admin_auth');
    
    if (!authCookie || authCookie.value !== 'authenticated') {
      // If no valid cookie, redirect to login page
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
