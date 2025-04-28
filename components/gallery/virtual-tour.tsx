'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

interface VirtualTourProps {
  images: {
    id: string;
    src: string;
    alt: string;
    description?: string;
  }[];
  title: string;
}

export function VirtualTour({ images, title }: VirtualTourProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Reset loading state when image changes
    setIsLoading(true);
    setZoom(1);
    setRotation(0);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const currentImage = images[currentImageIndex];

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">
          Navigate through our gallery using the controls below
        </p>
      </div>

      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
        <div
          className="w-full h-full flex items-center justify-center transition-all duration-300"
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
          }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            onLoad={() => setIsLoading(false)}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {currentImage.description && (
        <p className="text-center text-muted-foreground mb-6">
          {currentImage.description}
        </p>
      )}

      <div className="flex justify-center gap-2 mb-8">
        <Button variant="outline" size="icon" onClick={handleZoomIn} title="Zoom in">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleZoomOut} title="Zoom out">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleRotate} title="Rotate">
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentImageIndex(index)}
            className={`aspect-square rounded-md overflow-hidden border-2 ${
              index === currentImageIndex ? 'border-primary' : 'border-transparent'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
