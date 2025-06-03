"use client";
import { useEffect, useState } from "react";

const COLOR_VARS = {
  background: "--background",
  foreground: "--foreground",
};
const DEFAULTS = {
  background: "black",
  foreground: "white",
};

function setCSSVar(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}

export default function ColorSwitcher() {
  const [background, setBackground] = useState(DEFAULTS.background);
  const [foreground, setForeground] = useState(DEFAULTS.foreground);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedBg = localStorage.getItem("background");
    const storedFg = localStorage.getItem("foreground");
    setBackground(storedBg || DEFAULTS.background);
    setForeground(storedFg || DEFAULTS.foreground);
    setCSSVar(COLOR_VARS.background, storedBg || DEFAULTS.background);
    setCSSVar(COLOR_VARS.foreground, storedFg || DEFAULTS.foreground);
  }, []);

  const handleChange = (type: "background" | "foreground", value: string) => {
    if (type === "background") {
      setBackground(value);
      setCSSVar(COLOR_VARS.background, value);
      localStorage.setItem("background", value);
    } else {
      setForeground(value);
      setCSSVar(COLOR_VARS.foreground, value);
      localStorage.setItem("foreground", value);
    }
  };

  return (
    <>
      <button
        className="z-50 rounded-full p-3"
        onClick={() => setOpen(true)}
        aria-label="Open color switcher"
      >
        🎨
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-neutral-900 p-6 rounded shadow-lg min-w-[260px]">
            <h2 className="font-semibold mb-4">Customize Colors</h2>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                Background:
                <input
                  type="color"
                  value={background}
                  onChange={e => handleChange("background", e.target.value)}
                />
              </label>
              <label className="flex items-center gap-2">
                Text:
                <input
                  type="color"
                  value={foreground}
                  onChange={e => handleChange("foreground", e.target.value)}
                />
              </label>
              <button
                className="mt-4 px-4 py-2 rounded bg-gray-300 dark:bg-neutral-500"
                onClick={() => setOpen(false)}
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