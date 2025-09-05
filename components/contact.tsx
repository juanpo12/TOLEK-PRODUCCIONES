"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Loader2, CheckCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const openSocialMedia = (platform: string) => {
    const urls = {
      instagram: "https://instagram.com/photostudio",
      facebook: "https://facebook.com/photostudio",
      twitter: "https://twitter.com/photostudio",
    }
    window.open(urls[platform as keyof typeof urls], "_blank")
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Trabajemos juntos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tu historia y ayudarte a capturarla
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">
                {isSubmitted ? "¡Mensaje enviado!" : isSubmitting ? "Enviando mensaje..." : "Envíame un mensaje"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">Gracias por tu mensaje. Te responderé pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+34 600 000 000"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Tipo de servicio
                      </label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        placeholder="Fitness, Retrato, Boda..."
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar mensaje"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Información de contacto</h3>
                <div className="space-y-4">
                  <button
                    className="flex items-center space-x-3 w-full text-left hover:text-primary transition-colors"
                    onClick={() => window.open("mailto:hola@photostudio.com")}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">hola@photostudio.com</span>
                  </button>
                  <button
                    className="flex items-center space-x-3 w-full text-left hover:text-primary transition-colors"
                    onClick={() => window.open("tel:+34600123456")}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+34 600 123 456</span>
                  </button>
                  <button
                    className="flex items-center space-x-3 w-full text-left hover:text-primary transition-colors"
                    onClick={() => window.open("https://maps.google.com/?q=Madrid,España", "_blank")}
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Madrid, España</span>
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Sígueme en redes</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 bg-transparent"
                    onClick={() => openSocialMedia("instagram")}
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 bg-transparent"
                    onClick={() => openSocialMedia("facebook")}
                  >
                    <Facebook className="h-4 w-4" />
                    <span>Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 bg-transparent"
                    onClick={() => openSocialMedia("twitter")}
                  >
                    <Twitter className="h-4 w-4" />
                    <span>Twitter</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Horarios de atención</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>Solo citas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
