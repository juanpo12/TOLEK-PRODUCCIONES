"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Award, Users, Heart, Download, ExternalLink } from "lucide-react"

const stats = [
  { icon: Camera, label: "Sesiones realizadas", value: "500+" },
  { icon: Award, label: "Años de experiencia", value: "8" },
  { icon: Users, label: "Clientes satisfechos", value: "300+" },
  { icon: Heart, label: "Proyectos apasionantes", value: "150+" },
]

export function About() {
  const [animatedStats, setAnimatedStats] = useState(false)

  const scrollToContact = () => {
    const contactElement = document.querySelector("#contact")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    alert("Descargando CV... (Demo)")
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Sobre mí</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Soy un fotógrafo profesional especializado en capturar momentos únicos y auténticos. Mi pasión por la
                fotografía comenzó hace más de 8 años, y desde entonces he tenido el privilegio de trabajar con cientos
                de clientes increíbles.
              </p>
              <p>
                Mi enfoque se centra en crear imágenes que no solo sean visualmente impactantes, sino que también
                cuenten una historia. Ya sea capturando la intensidad de una sesión de fitness, la elegancia de un
                retrato o la emoción de una boda, mi objetivo es siempre el mismo: crear recuerdos que perduren para
                toda la vida.
              </p>
              <p>
                Creo firmemente que cada persona tiene una historia única que contar, y mi trabajo es ayudar a revelar
                esa historia a través de la lente de mi cámara.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" onClick={scrollToContact}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Trabajemos juntos
              </Button>
              <Button size="lg" variant="outline" onClick={downloadCV}>
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Fotógrafo profesional en estudio"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">8+ años</p>
              <p className="text-sm opacity-90">de experiencia</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => setAnimatedStats(!animatedStats)}
            >
              <CardContent className="p-0">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
