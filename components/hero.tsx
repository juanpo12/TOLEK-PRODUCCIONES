"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroImages = [
  {
    src: "/professional-fitness-photography-session-with-athl.jpg",
    alt: "Sesión de fitness profesional",
    title: "Fotografía Fitness",
    subtitle: "Capturando la fuerza y determinación",
  },
  {
    src: "/elegant-portrait-photography-with-dramatic-lightin.jpg",
    alt: "Retrato elegante con iluminación dramática",
    title: "Retratos Profesionales",
    subtitle: "Revelando la esencia de cada persona",
  },
  {
    src: "/beautiful-wedding-ceremony-photography.jpg",
    alt: "Ceremonia de boda hermosa",
    title: "Fotografía de Bodas",
    subtitle: "Inmortalizando momentos únicos",
  },
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const scrollToPortfolio = () => {
    const portfolioElement = document.querySelector("#portfolio")
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactElement = document.querySelector("#contact")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">{heroImages[currentImage].title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">{heroImages[currentImage].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToPortfolio}
            >
              Ver Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              onClick={scrollToContact}
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentImage ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
