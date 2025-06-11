'use client';
import React from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function Info() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-xl mb-2">{t('info.title')}</h2>
      <ul className="mb-6">
        <li>{">"} {t('info.age')}</li>
        <li>{">"} {t('info.location')}</li>
        <li>{">"} {t('info.programming')}</li>
        <li>{">"} {t('info.english')}</li>
        <li>{">"} {t('info.focus')}</li>
        <li>{">"} {t('info.hobby')}</li>
      </ul>
    </>
  );
}
