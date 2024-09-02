"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function DidYouKnow() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="flex justify-center bg-teal-950 pt-11 pb-11 grid grid-cols-2 gap-6">
      <div className="pr-8">
      <div className="text-6xl flex justify-center text-green-300">
      𝓟𝓵𝓪𝓷𝓽𝓼 𝓪𝓷𝓭 𝓗𝓮𝓻𝓫𝓼
      </div>
      <div className="flex justify-center">
        <Image
        src="/assets/images/logo.png"
        height={250}
        width={250}
        alt="logo"></Image>
      </div>
      <p className="flex justify-center pl-4 pr-4 pt-11 text-center text-2xl text-neutral-400 font-sans tracking-wide">Medicinal plants have been integral to human health and healing practices across various cultures for
         centuries. These plants are valued for their therapeutic properties, derived from naturally 
         occurring bioactive compounds that can support the body in fighting diseases, alleviating 
         symptoms, and promoting overall wellness. As interest in natural and 
        holistic health solutions grows, medicinal plants remain a vital component of both traditional and modern 
        medicine.</p>
      </div>
        <Carousel
      plugins={[plugin.current]}
      className="w-full h-full max-w-lg bg-teal-950 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    <Image
                    src={`/assets/images/${index}.jpg`}
                    height={512}
                    width={512}
                    alt="carousel"></Image>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </div>   
)
}
