import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only redirect root path
  if (pathname === "/") {
    // Set your default locale here
    return NextResponse.redirect(new URL("/en", request.url));
  }

  return NextResponse.next();
}

// Optionally, specify matcher if you want to limit middleware scope
export const config = {
  matcher: ["/"],
};