import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const KEPT_EL_ROUTES = ['/contact', '/about', '/privacy-policy'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const match = pathname.match(/^\/el(\/.*)?$/);
  if (match) {
    const elPath = match[1] || '/';
    if (KEPT_EL_ROUTES.includes(elPath)) {
      return NextResponse.next();
    }
    const encoded = new URL(`/en${elPath}`, request.url);
    return NextResponse.redirect(encoded, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/el/:path*',
};
