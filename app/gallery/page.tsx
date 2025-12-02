"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/facility.jpg",
    alt: "Hospital interior",
    category: "Facility",
  },
  {
    src: "/fac2.jpg",
    alt: "Hospital interior",
    category: "Facility",
  },
  {
    src: "/hospital.jpg",
    alt: "Hospital Facility",
    category: "Facility",
  },
  {
    src: "/zubin.jpg",
    alt: "Dr Zubin",
    category: "Team",
  },
  {
    src: "/c1.jpg",
    alt: "Certificate",
    category: "Certification",
  },
  {
    src: "/c2.jpg",
    alt: "Certificate",
    category: "Certification",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <p className="text-accent font-semibold mb-2">OUR GALLERY</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">See Our Facilities</h1>
          <p className="text-xl max-w-2xl mx-auto text-foreground">Explore our state-of-the-art medical center and facilities</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          {/* Filter Buttons - Improved styling and text visibility */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-muted border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Better grid spacing and explicit content rendering */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.length > 0 ? (
              filteredImages.map((image, idx) => (
                <Card
                  key={idx}
                  className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 h-64"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative h-full overflow-hidden bg-muted">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white font-semibold text-center">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground text-lg">No images found in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img src={selectedImage || "/placeholder.svg"} alt="Gallery view" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </main>
  )
}
