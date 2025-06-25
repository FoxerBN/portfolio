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
          </li>
        </ul>
      </div>

      <div className="border-l-2 pl-4 mb-6">
        <ul className="mb-6">
          <li>
            <Link href="https://github.com/FoxerBN/socketio-support" target="_blank">
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
            <Link href="https://github.com/FoxerBN/socketio-support" target="_blank">
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
            <Link href="https://github.com/FoxerBN/socketio-support" target="_blank">
              <strong className="underline text-sm">
                {"> "}
                {t("projects.school.name")}
              </strong>
            </Link>
            <br />
            {t("projects.school.desc")}
            <a className="underline font-bold cursor-pointer ml-2" 
              href="https://school-production-5d53.up.railway.app/">
              {"> "} Demo {" <"}</a>
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
