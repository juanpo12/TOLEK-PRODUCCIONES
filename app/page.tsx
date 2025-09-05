import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Portfolio } from "@/components/portfolio"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="fitness">
        <Portfolio />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </main>
  )
}
