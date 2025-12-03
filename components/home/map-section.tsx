"use client"

import { useEffect, useRef } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function MapSection() {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (mapContainer.current) {
      // Initialize map with iframe - in production you'd use Google Maps API
      mapContainer.current.innerHTML = `
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=30+Public+Park+near+MATKA+CHOWK+Old+Dhan+Mandi+Sri+Ganganagar+Rajasthan+335001&zoom=15"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      `
    }
  }, [])

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">LOCATION & HOURS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Visit Our State-of-the-Art Facility
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-96 lg:h-full min-h-96">
            <div ref={mapContainer} className="w-full h-full" />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    30, Public Park, near MATKA CHOWK
                    <br />
                    Old Dhan Mandi, Sri Ganganagar
                    <br />
                    Rajasthan 335001, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+917726804920" className="hover:text-accent">
                      +91 7726 804920
                    </a>
                    <br />
                    <a href="tel:+918949988509" className="hover:text-accent">
                      +91 8949 988509
                    </a>
                    <br />
                    <a href="tel:01542442705" className="hover:text-accent text-red-600 font-semibold">
                      Emergency: 0154 3575599
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:contact@drzubinsharma.in" className="hover:text-accent">
                      contact@drzubinsharma.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM
                    <br />
                    Sun: Closed
                    <br />
                    <span className="text-red-600 font-semibold">24/7 Emergency</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
