"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Camera } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#hero", type: "scroll" },
    { name: "Fitness", href: "#portfolio", type: "portfolio", category: "fitness" },
    { name: "Retratos", href: "#portfolio", type: "portfolio", category: "retratos" },
    { name: "Eventos", href: "#portfolio", type: "portfolio", category: "eventos" },
    { name: "Bodas", href: "#portfolio", type: "portfolio", category: "bodas" },
    { name: "Sobre mí", href: "#about", type: "scroll" },
    { name: "Contacto", href: "#contact", type: "scroll" },
  ]

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (item.type === "portfolio" && item.category) {
      const portfolioElement = document.querySelector("#portfolio")
      if (portfolioElement) {
        portfolioElement.scrollIntoView({ behavior: "smooth" })
        // Wait for scroll to complete before changing category
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent("changePortfolioCategory", {
              detail: { category: item.category },
            }),
          )
        }, 800) // Wait for smooth scroll to complete
      }
    } else {
      // Regular scroll behavior
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">TOLEK PRODUCCIONES</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
