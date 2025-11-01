"use client";

import { useState, useEffect } from "react";

interface CarouselItem {
  title: string;
  description: string;
  icon?: string;
}

interface AutoCarouselProps {
  items: CarouselItem[];
}

export default function AutoCarousel({ items }: AutoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full px-2 sm:px-4"
            >
              {/* Modern Card Design */}
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-zinc-100 hover:border-orange-200 transition-all duration-500 hover:shadow-orange-100/50">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                  {/* Icon */}
                  {item.icon && (
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-600 text-4xl text-white shadow-xl hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6 leading-tight">{item.title}</h3>
                  
                  {/* Description */}
                  <p className="text-zinc-600 leading-8 text-base sm:text-lg max-w-2xl">{item.description}</p>
                  
                  {/* Decorative accent */}
                  <div className="mt-8 h-1 w-24 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Enhanced */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-white shadow-2xl hover:bg-orange-600 hover:text-white text-zinc-900 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-zinc-100 hover:border-orange-600"
        aria-label="Previous"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-white shadow-2xl hover:bg-orange-600 hover:text-white text-zinc-900 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-zinc-100 hover:border-orange-600"
        aria-label="Next"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator - Enhanced */}
      <div className="flex justify-center gap-3 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-10 h-2.5 bg-orange-600 shadow-lg"
                : "w-2.5 h-2.5 bg-zinc-300 hover:bg-orange-400 hover:w-6"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

