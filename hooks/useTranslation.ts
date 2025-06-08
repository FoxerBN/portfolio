"use client";
import { useParams } from "next/navigation";
import en from "@/locales/en.json";
import sk from "@/locales/sk.json";


const translations: Record<string, any> = { en, sk };

export function useTranslation() {
  const { locale } = useParams() as { locale: string };
  
  const t = (key: string) => {
    const lang = translations[locale] ? locale : "en";
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
  
  return { t, locale };
}