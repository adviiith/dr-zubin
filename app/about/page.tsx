"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function AboutPage() {
  const [expandedCert, setExpandedCert] = useState<string | null>(null)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <p className="text-accent font-semibold mb-2">WHO WE ARE</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Sri Ganganagar's #1 Medical Centre
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Setting new standards in gastroenterology and advanced endoscopy care
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold mb-2">ADITYA HOSPITAL</p>
            <h2 className="text-4xl font-bold text-foreground mb-6">Excellence in Healthcare</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Aditya Hospital stands as a distinguished super-specialty hospital, under the supervision of Dr. Zubin Sharma.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nestled in the heart of Sri Ganganagar city, this visionary project is the brainchild of Dr. Zubin Sharma, a dynamic
              and devoted healthcare professional hailing from Rajasthan, driven by a profound passion for
              Gastroenterology and Hepatology.
            </p>
            <div className="space-y-3 mb-8">
              {[
                "WEO Accredited Facility",
                "SGEI Accredited Facility",
                "World Class Services",
                "Advanced Diagnostic Equipment",
                "Experienced Medical Team",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Schedule Appointment</Button>
            </Link>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/facility.jpg"
              alt="Hospital facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-accent/50 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver comprehensive, cutting-edge care for a broad spectrum of gastroentestinal, pancreatic, and
                liver disorders using the latest technology and evidence-based practices.
              </p>
            </Card>

            <Card className="p-8 bg-card border-accent/50 hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the leading gastroenterology center in the region, providing exemplary patient care
                while advancing medical knowledge and training the next generation of specialists.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="/fac2.jpg"
                alt="Dr. Zubin Sharma"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-accent font-semibold mb-2">PATIENT CARE</p>
              <h3 className="text-3xl font-bold text-foreground mb-4">Patient-First Philosophy</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Aditya Hospital, we believe that every patient deserves personalized attention and the highest standard of care. Our team is dedicated to listening to your concerns, understanding your needs, and developing tailored treatment plans.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We combine clinical expertise with compassion to ensure that your journey to recovery is as comfortable and effective as possible. Your health and well-being are our top priorities.
              </p>
              <Link href="/about">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Read More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations & Certifications */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">RECOGNITION</p>
            <h2 className="text-4xl font-bold text-foreground mb-4">Accreditations & Certifications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our commitment to excellence is recognized by leading national and international medical organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WEO Certification */}
            <Card className="p-8 bg-card border-accent/50 hover:border-accent transition-colors">
              <div
                className="mb-6 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setExpandedCert('/c2.jpg')}
                title="Click to expand"
              >
                <div className="relative w-full" style={{ paddingBottom: '70.7%' }}>
                  <img
                    src="/c2.jpg"
                    alt="WEO Accreditation Certificate"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                World Endoscopy Organization (WEO)
              </h3>
              <p className="text-accent font-semibold mb-3">Accredited Centre of Advanced Endoscopy</p>
              <p className="text-muted-foreground leading-relaxed">
                Recognized by the World Endoscopy Organization as an accredited center for advanced endoscopic procedures. This prestigious certification validates our expertise in performing complex endoscopic interventions and our commitment to maintaining the highest international standards in gastrointestinal endoscopy.
              </p>
            </Card>

            {/* SGEI Certification */}
            <Card className="p-8 bg-card border-accent/50 hover:border-accent transition-colors">
              <div
                className="mb-6 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setExpandedCert('/c1.jpg')}
                title="Click to expand"
              >
                <div className="relative w-full" style={{ paddingBottom: '141.4%' }}>
                  <img
                    src="/c1.jpg"
                    alt="SGEI Accreditation Certificate"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Society of Gastrointestinal Endoscopy of India (SGEI)
              </h3>
              <p className="text-accent font-semibold mb-3">National Accreditation for Excellence</p>
              <p className="text-muted-foreground leading-relaxed">
                Accredited by the Society of Gastrointestinal Endoscopy of India, the premier national body for endoscopy excellence. This certification recognizes our facility's adherence to rigorous quality standards, advanced infrastructure, and our team's expertise in delivering world-class gastrointestinal care.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal for expanded certificate */}
      {expandedCert && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedCert(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setExpandedCert(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={expandedCert}
              alt="Certificate"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  )
}
