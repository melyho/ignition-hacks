import { useState } from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[];
  current: number;
};

export default function Carousel({ images, current }: CarouselProps) {
  return (
    <div className="relative mt-[8%] w-[76%] mx-auto aspect-[1.8/1] overflow-hidden rounded-2xl border-[8px] border-[#494575]">
      <Image
        src={images[current]}
        alt={`Slide ${current + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
        priority
      />

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
