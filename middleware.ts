// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const host = req.headers.get("host") || "";
    const url = req.nextUrl;

    if (host.startsWith("curso.")) {
        // Mantém a URL, mas serve o conteúdo de /curso
        url.pathname = `/curso${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/:path*"],
};
