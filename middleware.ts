// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const host = req.headers.get("host") || "";
    const url = req.nextUrl;

    // Não mexe nos assets estáticos
    if (
        url.pathname.startsWith("/_next") ||
        url.pathname.startsWith("/favicon.ico") ||
        url.pathname.startsWith("/assets") || // caso use pasta /public/assets
        url.pathname.match(/\.(.*)$/) // qualquer arquivo com extensão (css, js, img)
    ) {
        return NextResponse.next();
    }

    if (host.startsWith("curso.")) {
        url.pathname = `/curso${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"],
};
