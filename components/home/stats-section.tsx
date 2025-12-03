"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Users, Smile, Bed, Award } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  number: number
  label: string
  suffix: string
}

const stats: Stat[] = [
  { icon: <Award className="w-8 h-8" />, number: 10, label: "Years of Experience", suffix: "+" },
  { icon: <Smile className="w-8 h-8" />, number: 2000, label: "Happy Patients", suffix: "+" },
]

function CountUpNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000
          const steps = 60
          const stepValue = target / steps
          let current = 0

          const interval = setInterval(() => {
            current += stepValue
            if (current >= target) {
              setCount(target)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}</span>
}

export default function StatsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-12 sm:gap-16 md:gap-32">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                <CountUpNumber target={stat.number} />
                {stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
