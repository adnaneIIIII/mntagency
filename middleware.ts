import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow access to the homepage ("/") without authentication
  if (pathname === "/") {
    return NextResponse.next();
  }

  return withAuth(req);
}

export const config = {
  matcher: [
    /**
     * This skips:
     * - _next (Next.js internals)
     * - static files
     * - all /api/auth/* routes (Kinde)
     */
    '/((?!_next|api/auth|favicon.ico|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ]
};
