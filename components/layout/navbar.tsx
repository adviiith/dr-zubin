"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ]

  const handleEmergencyCall = () => {
    window.location.href = "tel:01542442705"
  }

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 7726 804920</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>30, Public Park, near MATKA CHOWK, Sri Ganganagar</span>
            </div>
          </div>
          <button
            onClick={handleEmergencyCall}
            className="text-sm font-semibold bg-red-600 px-3 py-1 rounded-full hover:bg-red-700 transition-colors cursor-pointer"
          >
            🚨 Emergency: 0154 3575599
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: '#F5C33A' }} className="border-b border-border sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <img src="/logo.png" alt="Aditya Hospital Logo" className="w-10 h-10 object-contain" />
            <span className="hidden sm:inline">Aditya Hospital & Gastro Center</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
                Book Appointment
              </Button>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ backgroundColor: '#F5C33A' }} className="md:hidden border-t border-border p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                Book Appointment
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
