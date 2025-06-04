'use client';
import React from 'react';
import { useTranslation } from "../hooks/useTranslation";

export default function Interests() {
  const { t } = useTranslation();
  
  // Debug: Skontrolujte celý objekt
  console.log('Current locale:', t('locale')); // Ak máte locale v JSON
  console.log('Interests object:', t('interests'));
  console.log('Title specifically:', t('interests.title'));

  return (
    <>
      <h2 className="text-xl mb-2">{t('interests.title')}</h2>
      <ul className="mb-6">
        <li>• {t('interests.frameworks')}</li>
        <li>• {t('interests.focus')}</li>
        <li>• {t('interests.ai')}</li>
        <li>• {t('interests.growth')}</li>
        <li>• {t('interests.problemSolving')}</li>
      </ul>
    </>
  );
}