"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoWithFallback() {
  const [play, setPlay] = useState(false);

  const demoVideoId = "HXLIHr2iBe0";

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg cursor-pointer bg-surface-light dark:bg-surface-dark">
      {!play ? (
        <>
          <Image
            src={`https://img.youtube.com/vi/${demoVideoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            fill
            className="object-cover"
            onClick={() => setPlay(true)}
            style={{ cursor: "pointer" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            priority={true}
          />
          <div
            onClick={() => setPlay(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-black bg-opacity-50 rounded-full p-4">
              <svg
                className="w-12 h-12 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${demoVideoId}?autoplay=1&rel=0`}
          title="Advertising Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
}
