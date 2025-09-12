"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoPlay from "embla-carousel-autoplay"

// Logos de marcas reales con las que hemos trabajado
const brands = [
  {
    name: "Cliente 1",
    logo: "/logo/1_20250912_102942_0000.png",
    alt: "Logo Cliente 1"
  },
  {
    name: "Cliente 2", 
    logo: "/logo/2_20250912_102942_0001.png",
    alt: "Logo Cliente 2"
  },
  {
    name: "Cliente 3",
    logo: "/logo/3_20250912_102942_0002.png", 
    alt: "Logo Cliente 3"
  },
  {
    name: "Cliente 4",
    logo: "/logo/4_20250912_102942_0003.png",
    alt: "Logo Cliente 4"
  },
  {
    name: "Cliente 5",
    logo: "/logo/5_20250912_102942_0004.png",
    alt: "Logo Cliente 5"
  },
  {
    name: "Cliente 6",
    logo: "/logo/6_20250912_102942_0005.png",
    alt: "Logo Cliente 6"
  },
  {
    name: "Cliente 7",
    logo: "/logo/7_20250912_102943_0006.png",
    alt: "Logo Cliente 7"
  },
  {
    name: "Cliente 8",
    logo: "/logo/8_20250912_102943_0007.png",
    alt: "Logo Cliente 8"
  }
]

export function BrandsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      slidesToScroll: 1,
      containScroll: "trimSnaps"
    },
    [AutoPlay({ delay: 3000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Los mejores confían en nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Marcas reconocidas que han elegido nuestros servicios fotográficos para sus proyectos más importantes.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {brands.map((brand, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] px-4">
                <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 h-32">
                  <div className="flex items-center justify-center h-full">
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                      style={{ maxWidth: '160px', maxHeight: '100px' }}
                      onError={(e) => {
                        console.log(`❌ Error loading: ${brand.logo}`);
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const container = target.parentElement;
                        if (container) {
                          container.innerHTML = `<div class="flex items-center justify-center w-full h-full bg-muted rounded-lg text-muted-foreground text-sm font-medium">${brand.name}</div>`;
                        }
                      }}
                      onLoad={() => {
                        console.log(`✅ Loaded: ${brand.logo}`);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 space-x-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}