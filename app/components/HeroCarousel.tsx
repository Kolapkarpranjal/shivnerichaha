"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroCarouselProps = {
  images: string[];         // e.g. ["/images/hero1.jpg", ...]
  tagline: string;          // overlay text
  interval?: number;        // autoplay interval in ms (default 5000)
};

export default function HeroCarousel({
  images,
  tagline,
  interval = 5000,
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  // Autoplay
  useEffect(() => {
    if (!images?.length) return;
    timerRef.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [images, interval]);

  const go = (i: number) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
              <h1 className="text-white text-3xl md:text-6xl font-bold text-center drop-shadow">
                {tagline}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10"
      >
        ◀
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
