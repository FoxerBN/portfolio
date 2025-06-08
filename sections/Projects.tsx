'use client';
import React from 'react';
import { useTranslation } from "../hooks/useTranslation";
import Link from 'next/link';

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-xl mb-2">{t('projects.title')}</h2>
      <div className='border-l-2 pl-4 mb-6'>
      <ul className="mb-6">
        <li>
          <Link href="https://github.com/FoxerBN/back-ex" target="_blank"><strong className='underline text-sm'>{"> "}{t('projects.backex.name')}</strong></Link>
          <br />
          {t('projects.backex.desc')}
        </li>
      </ul>
      </div>

      <div className='border-l-2 pl-4 mb-6'>
      <ul className="mb-6">
        <li>
          <Link href="https://github.com/FoxerBN/back-ex" target="_blank"><strong className='underline text-sm'>{"> "}{t('projects.backex.name')}</strong></Link>
          <br />
          {t('projects.backex.desc')}
        </li>
      </ul>
      </div>

      <div className='border-l-2 pl-4 mb-6'>
      <ul className="mb-6">
        <li>
          <Link href="https://github.com/FoxerBN/back-ex" target="_blank"><strong className='underline text-sm'>{"> "}{t('projects.backex.name')}</strong></Link>
          <br />
          {t('projects.backex.desc')}
        </li>
      </ul>
      </div>
    </>
  );
}
