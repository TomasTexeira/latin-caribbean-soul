"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({
  current,
  variant = "light",
}: {
  current: Locale;
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();

  const swap = (locale: Locale) => {
    const segments = pathname.split("/");
    // segments[0] is "" (leading slash), segments[1] is the current locale.
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  };

  const base =
    variant === "light"
      ? "text-white/70 hover:text-white"
      : "text-muted hover:text-foreground";
  const active =
    variant === "light" ? "text-white" : "text-foreground";

  return (
    <div className="flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em]">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span className={base}>·</span>}
          <Link
            href={swap(locale)}
            aria-current={locale === current ? "true" : undefined}
            className={
              locale === current
                ? `${active} underline underline-offset-4`
                : `${base} transition-colors`
            }
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
