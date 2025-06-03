"use client";
import { useParams } from "next/navigation";
import en from "../public/locales/en.json";
import sk from "../public/locales/sk.json";

const translations: Record<string, any> = { en, sk };

export function useTranslation() {
  const { locale } = useParams() as { locale: string };
  const t = (key: string) => {
    const lang = translations[locale] ? locale : "en";
    return translations[lang][key] || key;
  };
  return { t, locale };
}