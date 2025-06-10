"use client";
import React, { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import Link from "next/link";
import Slideshow from "../components/Slideshow";

export default function Projects() {
  const { t } = useTranslation();
  const [openGallery, setOpenGallery] = useState<string | null>(null);

  // Define photos for each project
  const galleries: Record<string, string[]> = {
    project1: ["photo1.png", "photo2.png", "photo3.png", "photo4.png", "photo5.png"],
    project2: ["photo1.png", "photo2.png"],
    project3: ["photo1.png", "photo2.png"],
  };

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
              className="underline text-blue-600 cursor-pointer ml-2"
              onClick={(e) => {
                e.preventDefault();
                setOpenGallery("project1");
              }}
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>

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
              className="underline text-blue-600 cursor-pointer ml-2"
              onClick={(e) => {
                e.preventDefault();
                setOpenGallery("project2");
              }}
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>

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
              className="underline text-blue-600 cursor-pointer ml-2"
              onClick={(e) => {
                e.preventDefault();
                setOpenGallery("project3");
              }}
            >
              Gallery
            </a>
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
