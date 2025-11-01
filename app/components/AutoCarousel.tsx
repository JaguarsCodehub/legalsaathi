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
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full w-full shrink-0"
              style={{ width: '100%', flexShrink: 0 }}
            >
              {/* Modern Card Design */}
              <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 shadow-lg sm:shadow-xl md:shadow-2xl border-2 border-zinc-100 hover:border-orange-200 transition-all duration-500 hover:shadow-orange-100/50 w-full box-border mx-0">
                <div className="flex flex-col items-center text-center w-full">
                  {/* Icon */}
                  {item.icon && (
                    <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8 flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 items-center justify-center rounded-xl sm:rounded-2xl md:rounded-3xl bg-orange-600 text-2xl sm:text-3xl md:text-4xl text-white shadow-lg sm:shadow-xl hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                  )}
                  
                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-zinc-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight w-full px-3 sm:px-4 md:px-6 overflow-wrap-anywhere hyphens-auto">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-zinc-600 leading-relaxed sm:leading-7 md:leading-8 text-xs sm:text-sm md:text-base lg:text-lg w-full px-3 sm:px-4 md:px-6 overflow-wrap-anywhere hyphens-auto">
                    {item.description}
                  </p>
                  
                  {/* Decorative accent */}
                  <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 h-1 w-16 sm:w-20 md:w-24 bg-orange-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Enhanced with better mobile handling */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full bg-white backdrop-blur-sm shadow-xl hover:bg-orange-600 hover:text-white text-zinc-900 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-zinc-200 hover:border-orange-600"
        aria-label="Previous"
      >
        <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full bg-white backdrop-blur-sm shadow-xl hover:bg-orange-600 hover:text-white text-zinc-900 flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-zinc-200 hover:border-orange-600"
        aria-label="Next"
      >
        <svg className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator - Enhanced */}
      <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mt-3 sm:mt-4 md:mt-6 lg:mt-8 px-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 sm:w-8 md:w-10 h-1.5 sm:h-2 md:h-2.5 bg-orange-600 shadow-lg"
                : "w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 bg-zinc-300 hover:bg-orange-400 hover:w-3 sm:hover:w-4 md:hover:w-6"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

