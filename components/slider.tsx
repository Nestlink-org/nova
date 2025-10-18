"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AutoImageSliderProps {
  images: string[];
  interval?: number;
  className?: string;
}

export const ImageSlider: React.FC<AutoImageSliderProps> = ({
  images,
  interval = 7000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={` ${className} min-h-[45vh]`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};
