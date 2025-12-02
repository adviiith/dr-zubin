import Link from "next/link"
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Aditya Hospital</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Leading gastroenterology and advanced endoscopy center in Sri Ganganagar, Rajasthan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Endoscopy", "Gastroenterology", "Hepatology", "ERCP"].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 7726 804920</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@drzubinsharma.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>30, Public Park, Sri Ganganagar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © 2025 Aditya Hospital & Gastro Center. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
