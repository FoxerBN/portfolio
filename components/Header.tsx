"use client";

import {useTranslation} from "../hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="w-full py-4 px-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">Richard Tekula</h1>
        <nav className="space-x-4">
        <LanguageSwitcher />
          <a href="">lang</a>
        </nav>
      </div>
    </header>
  );
}
