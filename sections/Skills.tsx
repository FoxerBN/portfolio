'use client';
import React from 'react';
import { useTranslation } from "../hooks/useTranslation";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-xl mb-2">{t('skills.title')}</h2>
      <ul className="mb-6">
        <li>• {t('skills.frontend')}</li>
        <li>• {t('skills.backend')}</li>
        <li>• {t('skills.languages')}</li>
        <li>• {t('skills.frameworks')}</li>
        <li>• {t('skills.testing')}</li>
        <li>• {t('skills.notes')}</li>
      </ul>
    </>
  );
}