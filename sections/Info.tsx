'use client';
import React from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function Info() {
  const { t } = useTranslation();
  const monthsSinceStart = new Date().getMonth() - 2 + (new Date().getFullYear() - 2024) * 12;
  return (
    <>
      <h2 className="text-xl mb-2">{t('info.title')}</h2>
      <ul className="mb-6">
        <li>{">"} {t('info.age')}</li>
        <li>{">"} {t('info.location')}</li>
        <li>{">"} {t('info.programming')} (~{monthsSinceStart} months)</li>
        <li>{">"} {t('info.english')}</li>
        <li>{">"} {t('info.focus')}</li>
        <li>{">"} {t('info.hobby')}</li>
        <li>{">"} <a className="hover:font-extrabold underline" target="_blank" href="https://leetcode.com/problem-list/v96js4fr/">{"> "}My leetcode {"<"}</a></li>
      </ul>
    </>
  );
}
