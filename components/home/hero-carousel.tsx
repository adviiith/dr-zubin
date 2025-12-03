"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  cta: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Advanced Gastroenterology Care",
    subtitle: "Expert Treatment",
    description:
      "Experience cutting-edge endoscopy and gastroenterology services with our specialized team of doctors.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide1-BpTK2Qx6nE1gWNW3VxaIyKkGrTvC8y.jpg",
    cta: "Schedule Consultation",
  },
  {
    id: 2,
    title: "State-of-the-Art Facilities",
    subtitle: "Modern Medical Center",
    description: "Our facility features advanced diagnostic and therapeutic equipment for comprehensive healthcare.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide2-b1YZql3fcXw4vlT7ZuKvkVAqNHFAOX.jpg",
    cta: "Learn More",
  },
  {
    id: 3,
    title: "24/7 Emergency Services",
    subtitle: "Always Available",
    description: "Round-the-clock emergency care with specialized gastroenterology support when you need it most.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide3-jCFQ9GlnZpt9n5OKtj5BFgguUBML1V.jpg",
    cta: "Emergency Call",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  const slide = slides[current]

  return (
    <div
      className="relative h-[600px] md:h-[700px] overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Slide */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `url(${slide.image})`,
          opacity: 1,
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 text-white">
        <div className="max-w-2xl">
          <p className="text-sky-300 font-medium mb-2 text-lg tracking-wide">{slide.subtitle}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">{slide.title}</h1>
          <p className="text-lg text-white/90 mb-8 max-w-xl text-balance">{slide.description}</p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base">{slide.cta}</Button>
            </Link>
            <a href="https://www.facebook.com/p/Aditya-Gastro-Centre-100057311924759/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Play className="w-4 h-4 mr-2" />
                Visit Facebook
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`transition-all ${idx === current ? "bg-accent w-8 h-2" : "bg-white/50 hover:bg-white/70 w-2 h-2"
              } rounded-full`}
          />
        ))}
      </div>
    </div>
  )
}
