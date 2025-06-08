"use client";

import ColorSwitcher from "./ColorSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Header() {
  return (
    <header className="w-full py-4 px-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold relative overflow-hidden shiny-text">
          Richard Tekula
        </h1>
        <nav className="space-x-4 flex items-center">
        <LanguageSwitcher />
        <ColorSwitcher />
        </nav>
      </div>
    </header>
  );
}
