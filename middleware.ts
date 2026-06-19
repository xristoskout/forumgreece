import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const KEPT_EL_ROUTES = ['/contact', '/about', '/privacy-policy', '/promotion'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const match = pathname.match(/^\/el(\/.*)?$/);
  if (match) {
    const elPath = match[1] || '/';
    if (KEPT_EL_ROUTES.includes(elPath)) {
      const res = NextResponse.next();
      res.headers.set('x-pathname', pathname);
      return res;
    }
    const encoded = new URL(`/en${elPath}`, request.url);
    return NextResponse.redirect(encoded, 308);
  }

  const res = NextResponse.next();
  res.headers.set('x-pathname', pathname);
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|images/|favicon.ico).*)'],
};
