// src/middleware.ts
import { auth } from "./auth"; // <- make sure this is from `next-auth`
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export default auth((req: NextRequest & { auth: any }) => {
    const isLoginPage = req.nextUrl.pathname.startsWith("/login");
    const isAuthenticated = req.auth ? true : false;


    if (!isAuthenticated && !isLoginPage) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (isAuthenticated && isLoginPage) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
});

// it defines that in these routes, Middleware will apply.
export const config = {
    matcher: [
        "/",
        "/login",
        "/editor/:path*"
    ]
}
