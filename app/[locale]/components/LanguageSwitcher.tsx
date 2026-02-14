"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex gap-4 text-sm font-medium mb-4">
      <Link
        href={pathname}
        locale="en"
        className={`${
          locale === "en"
            ? "font-bold underline"
            : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
        }`}
      >
        English
      </Link>
      <span className="text-gray-300">|</span>
      <Link
        href={pathname}
        locale="de"
        className={`${
          locale === "de"
            ? "font-bold underline"
            : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
        }`}
      >
        Deutsch
      </Link>
    </div>
  );
}
