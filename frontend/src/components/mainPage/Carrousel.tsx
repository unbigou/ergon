import React, { ReactNode, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PropType = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

const Carrousel = (props: PropType) => {
  const { options, slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="overflow-hidden h-full relative" ref={emblaRef}>
      <div className="flex h-full">
        {slides?.map((slide, index) => (
          <div className="min-w-0 flex-[0_0_20%]" key={index}>
            {slide}
          </div>
        ))}
      </div>
      <div className="flex justify-between absolute w-full bottom-1/2">
        <Button
          onClick={scrollPrev}
          variant={"outline"}
          className="rounded-full p-2 ml-1"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={scrollNext}
          variant={"outline"}
          className="rounded-full p-2 mr-1"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Carrousel;
