import React, { useState } from "react";
import Image from "next/image";

type SlideshowProps = {
  photos: string[];
  folder: string; // <-- add this
  open: boolean;
  onClose: () => void;
};

const Slideshow: React.FC<SlideshowProps> = ({ photos, folder, open, onClose }) => {
  const [current, setCurrent] = useState(0);

  if (!open) return null;

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button className="absolute top-4 right-4 text-white text-2xl" onClick={onClose}>×</button>
      <button className="absolute left-4 text-white text-3xl" onClick={prev}>&lt;</button>
      <Image
        src={`/photos/${folder}/${photos[current]}`}
        alt=""
        width={800}
        height={600}
        className="max-h-[80vh] max-w-[80vw] rounded shadow-lg object-contain"
      />
      <button className="absolute right-4 text-white text-3xl" onClick={next}>&gt;</button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
        {current + 1} / {photos.length}
      </div>
    </div>
  );
};

export default Slideshow;