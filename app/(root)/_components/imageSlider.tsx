"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type iAppProps ={
  images: string[];
}
function ImageSlider({ images }: iAppProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  function handleNext() {
    setMainImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  function handlePrev() {
    setMainImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }
  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }
  return (
    <div className="grid gap-6 md:gap-3 items-start">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={images[mainImageIndex]}
          width={600}
          height={600}
          alt="Product images"
          className="object-cover w-[600] h-[600] rounded-lg"
        />
        <div className="absolute inset-0 flex items-center mb-32 justify-between px-4">
          <Button onClick={handlePrev} variant="ghost" size="icon">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button onClick={handleNext} variant="ghost" size="icon">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-4 my-3">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(index)} className={cn(index===mainImageIndex 
            ? "border-2 border-primary"
            : "border border-gray-200 ","relative cursor-pointer overflow-hidden rounded-lg")}>
              <Image
                src={images[index]}
                width={100}
                height={100}
                alt="Product images"
                className="object-cover w-[100] h-[100] "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
