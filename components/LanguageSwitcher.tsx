"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { locale } = useParams() as { locale: string };
  const pathname = usePathname();
  const router = useRouter();

  const [isSwitching, setIsSwitching] = useState(false);

  const otherLocale = locale === "en" ? "sk" : "en";
  const newPath =
    "/" +
    otherLocale +
    pathname.replace(/^\/(en|sk)/, "");

  const handleSwitch = () => {
    setIsSwitching(true);
    setTimeout(() => {
      router.push(newPath);
    }, 300); // match the animation duration
  };

  return (
    <button
      onClick={handleSwitch}
      className={`
        border-whitesmoke border-[1.5px] rounded px-4 py-2
        bg-transparent
        transition-colors duration-500 ease-in-out
        overflow-hidden
        relative
        disabled:opacity-50
        min-w-12 min-h-9
      `}
      disabled={isSwitching}
      style={{ minWidth: 48, minHeight: 36 }}
    >

      <span
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2
          font-semibold text-sm pointer-events-none
          transition-all duration-500 ease-in-out
          ${isSwitching
            ? "opacity-0 -translate-y-8"
            : "opacity-100 -translate-y-1/2"}
        `}
      >
        {locale.toUpperCase()}
      </span>
      <span
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2
           font-semibold text-sm pointer-events-none
          transition-all duration-500 ease-in-out
          ${isSwitching
            ? "opacity-100 -translate-y-1/2"
            : "opacity-0 translate-y-8"}
        `}
      >
        {otherLocale.toUpperCase()}
      </span>
    </button>
  );
}