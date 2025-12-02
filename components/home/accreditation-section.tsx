import { Award } from "lucide-react"

export default function AccreditationSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/design-mode/image.png"
              alt="Society of Gastrointestinal Endoscopy Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Text */}
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-accent flex-shrink-0" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Accredited Centre of ADVANCED ENDOSCOPY</h3>
              <p className="text-foreground/70 font-semibold">by Society of Gastrointestinal Endoscopy, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
