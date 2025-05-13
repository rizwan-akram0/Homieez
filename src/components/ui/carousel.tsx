import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

interface CarouselProps {
  images: string[];
  className?: string;
}

export function Carousel({ images, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Main Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm"
            onClick={goToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={cn(
              "relative aspect-[16/9] overflow-hidden rounded-md transition-all",
              currentIndex === index
                ? "ring-2 ring-primary-600"
                : "opacity-70 hover:opacity-100"
            )}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 