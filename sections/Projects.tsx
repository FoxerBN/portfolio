"use client";
import React, { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import Slideshow from "../components/Slideshow";
import { galleries } from "../consts/projects";
export default function Projects() {
  const { t } = useTranslation();
  const [openGallery, setOpenGallery] = useState<string | null>(null);

  return (
    <>
      <h2 className="text-xl mb-2">{t("projects.title")}</h2>
      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link href="https://github.com/FoxerBN/back-ex" target="_blank">
              <strong className="underline text-sm">
                {"> "}
                {t("projects.backex.name")}
              </strong>
            </Link>
            <br />
            {t("projects.backex.desc")}
            <a
              href="#"
              className="underline font-bold cursor-pointer ml-2"
              onClick={(e) => {
                e.preventDefault();
                setOpenGallery("project1");
              }}
            >
              {"> "} Gallery {" <"}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link href="https://github.com/FoxerBN/onepass" target="_blank">
              <strong className="underline text-sm">
                {"> "}
                {t("projects.onepas.name")}
              </strong>
            </Link>
            <br />
            {t("projects.onepas.desc")}
            <a
              href="#"
              className="underline font-bold cursor-pointer ml-2"
              onClick={(e) => {
                e.preventDefault();
                setOpenGallery("project2");
              }}
            >
              {"> "} Gallery {" <"}
            </a>
            <br />
            <a
              className="underline font-bold cursor-pointer ml-2"
              href="https://github.com/FoxerBN/onepass/releases/download/1.0.0/onepass.apk"
            >
              {"> "}APK Android{" <"}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link
              href="https://github.com/FoxerBN/socketio-support"
              target="_blank"
            >
              <strong className="underline text-sm">
                {"> "}
                {t("projects.chatApp.name")}
              </strong>
            </Link>
            <br />
            {t("projects.chatApp.desc")}
            <a
              href="#"
              className="underline font-bold cursor-pointer ml-2"
              onClick={(e) => {
                e.preventDefault();
                setOpenGallery("project3");
              }}
            >
              {"> "} Gallery {" <"}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link href="https://github.com/FoxerBN/school" target="_blank">
              <strong className="underline text-sm">
                {"> "}
                {t("projects.school.name")}
              </strong>
            </Link>
            <br />
            {t("projects.school.desc")}
            <a
              className="underline font-bold cursor-pointer ml-2"
              href="https://school-production-5d53.up.railway.app/"
            >
              {"> "} Demo {" <"}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link
              href="https://github.com/FoxerBN/ambient-simulator"
              target="_blank"
            >
              <strong className="underline text-sm">
                {"> "}
                {t("projects.ambientSim.name")}
              </strong>
            </Link>
            <br />
            {t("projects.ambientSim.desc")}
            <a
              href="#"
              className="underline font-bold cursor-pointer ml-2"
              onClick={(e) => {
                e.preventDefault();
                setOpenGallery("project4");
              }}
            >
              {"> "} Gallery {" <"}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link href="https://github.com/FoxerBN/web-scraper" target="_blank">
              <strong className="underline text-sm">
                {"> "}
                {t("projects.webscraper.name")}
              </strong>
            </Link>
            <br />
            {t("projects.webscraper.desc")}
            <a
              className="underline font-bold cursor-pointer ml-2"
              href="https://web-scraper-production-f717.up.railway.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"> "} Demo {" <"}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link href="https://github.com/FoxerBN/fyltr" target="_blank">
              <strong className="underline text-sm">
                {"> "}
                {t("projects.fyltr.name")}
              </strong>
            </Link>
            <br />
            {t("projects.fyltr.desc")}
            <a
              className="underline font-bold cursor-pointer ml-2"
              href="https://github.com/FoxerBN/fyltr/releases/download/v1.0/fyltr.exe"
            >
              {"> "} Download .exe {" <"}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link href="https://github.com/FoxerBN/mailSender" target="_blank">
              <strong className="underline text-sm">
                {"> "}
                {t("projects.emailSender.name")}
              </strong>
            </Link>
            <br />
            {t("projects.emailSender.desc")}
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link
              href="https://github.com/FoxerBN/login-template"
              target="_blank"
            >
              <strong className="underline text-sm">
                {"> "}
                {t("projects.loginTemplate.name")}
              </strong>
            </Link>
            <br />
            {t("projects.loginTemplate.desc")}
            <a
              className="underline font-bold cursor-pointer ml-2"
              href="https://login-template-ecru.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"> "} Demo {" <"}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link
              href="https://github.com/FoxerBN/java-auth"
              target="_blank"
            >
              <strong className="underline text-sm">
                {"> "}
                {t("projects.javaAuth.name")}
              </strong>
            </Link>
            <br />
            {t("projects.javaAuth.desc")}
            <a
              className="underline font-bold cursor-pointer ml-2"
              href="https://react-auth-henna.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"> "} Demo {" <"}
            </a>
          </li>
        </ul>
      </div>
      
      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link
              href="https://github.com/FoxerBN/discord-bot"
              target="_blank"
            >
              <strong className="underline text-sm">
                {"> "}
                {t("projects.discordBot.name")}
              </strong>
            </Link>
            <br />
            {t("projects.discordBot.desc")}
          </li>
        </ul>
      </div>
      
      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link
              href="https://github.com/FoxerBN/python-services"
              target="_blank"
            >
              <strong className="underline text-sm">
                {"> "}
                {t("projects.pythonServices.name")}
              </strong>
            </Link>
            <br />
            {t("projects.pythonServices.desc")}
          </li>
        </ul>
      </div>

      <Slideshow
        photos={openGallery ? galleries[openGallery] : []}
        folder={openGallery ?? ""}
        open={!!openGallery}
        onClose={() => setOpenGallery(null)}
      />
    </>
  );
}
