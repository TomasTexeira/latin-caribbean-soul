import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

function getLocale(request: NextRequest): string {
  const accept = request.headers.get("accept-language");
  if (accept) {
    // Take the first language tag, match its primary subtag against supported locales.
    const preferred = accept
      .split(",")
      .map((part) => part.split(";")[0].trim().toLowerCase().split("-")[0]);
    for (const lang of preferred) {
      if ((locales as readonly string[]).includes(lang)) return lang;
    }
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and any path with a file extension (static assets, images).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
