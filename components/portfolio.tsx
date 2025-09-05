"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Eye, Grid, X } from "lucide-react"

const categories = [
  { id: "fitness", name: "Fitness", count: 12 },
  { id: "retratos", name: "Retratos", count: 18 },
  { id: "eventos", name: "Eventos", count: 24 },
  { id: "bodas", name: "Bodas", count: 15 },
]

const allCategories = [
  ...categories,
  { id: "naturaleza", name: "Naturaleza", count: 20 },
  { id: "arquitectura", name: "Arquitectura", count: 16 },
  { id: "street", name: "Street Photography", count: 22 },
  { id: "comercial", name: "Comercial", count: 14 },
]

const portfolioImages = {
  fitness: [
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Entrenamiento con pesas" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Sesión de yoga" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Entrenamiento CrossFit" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Atleta corriendo" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Entrenamiento de boxeo" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Natación profesional" },
  ],
  retratos: [
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Retrato corporativo" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Retrato artístico" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Retrato familiar" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Retrato de moda" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Retrato senior" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Retrato infantil" },
  ],
  eventos: [
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Evento corporativo" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Fiesta de cumpleaños" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Ceremonia de graduación" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Concierto en vivo" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Inauguración de galería" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Gala benéfica" },
  ],
  bodas: [
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Ceremonia de boda" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Recepción de boda" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Retrato de novia" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Anillos de boda" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Ramo de novia" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Pareja al atardecer" },
  ],
  naturaleza: [
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Paisaje montañoso" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Atardecer en el bosque" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Cascada natural" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Vida silvestre" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Flores macro" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Cielo estrellado" },
  ],
  arquitectura: [
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Edificio moderno" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Arquitectura clásica" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Detalles urbanos" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Puente icónico" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Interior minimalista" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Geometría urbana" },
  ],
  street: [
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Vida urbana" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Momentos espontáneos" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Arte callejero" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Mercado local" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Transporte público" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Noche urbana" },
  ],
  comercial: [
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Producto de lujo" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Campaña publicitaria" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Fotografía gastronómica" },
    { src: "/professional-fitness-photography-session-with-athl.jpg", alt: "Moda comercial" },
    { src: "/elegant-portrait-photography-with-dramatic-lightin.jpg", alt: "Tecnología" },
    { src: "/beautiful-wedding-ceremony-photography.jpg", alt: "Lifestyle brand" },
  ],
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("fitness")
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [isExpandedView, setIsExpandedView] = useState(false)

  useEffect(() => {
    const handleCategoryChange = (event: CustomEvent) => {
      const { category } = event.detail
      console.log("[v0] Portfolio received category change:", category)
      setActiveCategory(category)
    }

    window.addEventListener("changePortfolioCategory", handleCategoryChange as EventListener)

    return () => {
      window.removeEventListener("changePortfolioCategory", handleCategoryChange as EventListener)
    }
  }, [])

  const openImageModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handleCategoryChange = (categoryId: string) => {
    console.log("[v0] Changing category to:", categoryId)
    setActiveCategory(categoryId)
    const portfolioElement = document.querySelector("#portfolio")
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const toggleExpandedView = () => {
    setIsExpandedView(!isExpandedView)
  }

  const closeExpandedView = () => {
    setIsExpandedView(false)
  }

  return (
    <section id="portfolio" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Mi Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Explora mi trabajo a través de diferentes especialidades fotográficas
          </p>
        </div>

        {!isExpandedView ? (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.id)}
                  className="text-sm font-medium"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioImages[activeCategory as keyof typeof portfolioImages]?.map((image, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openImageModal(image)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="secondary" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        Ver más
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" onClick={toggleExpandedView}>
                <Grid className="w-4 h-4 mr-2" />
                Ver galería completa
              </Button>
            </div>
          </>
        ) : (
          <div className="space-y-16">
            <div className="flex items-center justify-between">
              <h3 className="text-3xl font-bold text-foreground">Galería Completa</h3>
              <Button variant="outline" onClick={closeExpandedView}>
                <X className="w-4 h-4 mr-2" />
                Cerrar
              </Button>
            </div>

            {allCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-semibold text-foreground">{category.name}</h4>
                  <span className="text-sm text-muted-foreground">{category.count} fotos</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {portfolioImages[category.id as keyof typeof portfolioImages]?.map((image, index) => (
                    <Card
                      key={index}
                      className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                      onClick={() => openImageModal(image)}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button variant="secondary" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />
              <Button variant="secondary" size="sm" className="absolute top-4 right-4" onClick={closeModal}>
                ✕
              </Button>
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium bg-black/50 px-4 py-2 rounded">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
