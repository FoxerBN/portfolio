"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ColorSwitcher from "./ColorSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full py-4 px-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold relative overflow-hidden shiny-text">
          Richard Tekula
        </h1>
        <nav className="space-x-2 flex items-center">
        <Link href="https://github.com/FoxerBN" target="_blank"><FontAwesomeIcon className="text-2xl" icon={faGithub} /></Link>
        <LanguageSwitcher />
        <ColorSwitcher />
        </nav>
      </div>
    </header>
  );
}
