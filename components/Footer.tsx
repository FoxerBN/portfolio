'use client';
import { useTranslation } from "../hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-4 px-6 text-center text-sm mt-auto">
      © {new Date().getFullYear()} {t('footer')}
      <span>
        
        <a href="/Richard-Tekula.pdf" download target="_blank" rel="noopener noreferrer">{"->Download CV-<"}
        </a>
      </span>
    </footer>
  );
}
