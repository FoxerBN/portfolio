'use client';
import React from 'react';
import { useTranslation } from "../hooks/useTranslation";

export default function Tools() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-xl mb-2">{t('tools.title')}</h2>
      <ul className="mb-6">
        <li>{">"} {t('tools.projectControl')}</li>
        <li>{">"} {t('tools.apiTesting')}</li>
        <li>{">"} {t('tools.ide')}</li>
        <li>{">"} {t('tools.databases')}</li>
      </ul>
    </>
  );
}