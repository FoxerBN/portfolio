"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export default function ColorSwitcher() {
  const [background, setBackground] = useState("#ffffff");
  const [foreground, setForeground] = useState("#171717");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedBg = localStorage.getItem("background") || "#000000;";
    const savedFg = localStorage.getItem("foreground") || "#adab0a";

    setBackground(savedBg);
    setForeground(savedFg);

    document.documentElement.style.setProperty("--background", savedBg);
    document.documentElement.style.setProperty("--foreground", savedFg);
  }, []);

  const updateColor = (type: "background" | "foreground", value: string) => {
    if (type === "background") {
      setBackground(value);
      document.documentElement.style.setProperty("--background", value);
      localStorage.setItem("background", value);
    } else {
      setForeground(value);
      document.documentElement.style.setProperty("--foreground", value);
      localStorage.setItem("foreground", value);
    }
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="p-3 rounded-full">
        <FontAwesomeIcon className="text-2xl" icon={faPalette} />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-neutral-800  p-6 rounded shadow-lg">
            <h2 className="font-semibold mb-4">Customize Colors</h2>

            <div className="space-y-4">
              <label className="flex items-center gap-2">
                Background:
                <input
                  type="color"
                  value={background}
                  onChange={(e) => updateColor("background", e.target.value)}
                />
              </label>

              <label className="flex items-center gap-2">
                Text:
                <input
                  type="color"
                  value={foreground}
                  onChange={(e) => updateColor("foreground", e.target.value)}
                />
              </label>

              <button
                onClick={() => setOpen(false)}
                className="w-full mt-4 px-4 py-2 rounded bg-[{foreeground}]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}