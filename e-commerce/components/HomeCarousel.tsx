import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function HomeCarousel() {
  return (
    <div className="relative w-full h-full">
      {/* Carousel container */}
      <Carousel className="w-full h-full flex justify-center items-center">
        {/* Carousel controls */}
        <CarouselPrevious className="bg-white text-black p-2 rounded-full absolute top-1/2 left-0 transform -translate-y-1/2 z-10" />
        <CarouselNext className="bg-white text-black p-2 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2 z-10" />
        
        {/* Carousel content */}
        <CarouselContent className="flex justify-center items-center w-full">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
