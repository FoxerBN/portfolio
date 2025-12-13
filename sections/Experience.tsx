'use client';
import React from 'react';
import { useTranslation } from "../hooks/useTranslation";

export default function Experience() {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-xl mb-2">{t('experience.title')}</h2>
      <ul className="mb-6">
        <li>{">"} {t('experience.crm')}</li>
        <li>{">"} {t('experience.chatbot')}</li>
        <li>{">"} {t('experience.mcp')}</li>
        <li>{">"} {t('experience.automation')}</li>
        <li>{">"} {t('experience.selfHosting')}</li>
      </ul>
    </>
  );
}
