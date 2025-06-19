// SliderInfinite.jsx
import React from 'react';
import Image from 'next/image';

interface SliderInfiniteProps {
  images: string[]; // Definimos que 'images' es un array de strings
  speed?: number;   // 'speed' es opcional y de tipo número
}

export function SliderInfinite({ images, speed = 20 }: SliderInfiniteProps) {
  // Duplicamos el array para que el bucle sea continuo
  const imgs = [...images, ...images];

  return (
    <div
      className="slider-wrapper"
      style={{maxWidth: '400px' }}
    >
      <div className="slider-track" style={{animation: `scroll ${speed}s linear infinite`}}>
        {imgs.map((src, i) => (
          <div className="slide" key={i}>
            {/* <img src={src} alt={`slide-${i}`} /> */}
            <Image
              src={src}
              alt={`slide-${i}`}
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
