import { Award } from "lucide-react"

export default function AccreditationSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* WEO Logo */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <img
                src="/images/weo-logo.png"
                alt="World Endoscopy Organization Logo"
                className="h-24 w-24 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Accredited Centre of ADVANCED ENDOSCOPY</h3>
              <p className="text-foreground/70 font-semibold">by World Endoscopy Organization</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-16 w-px bg-foreground/20"></div>

          {/* SGI Accreditation */}
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <img
                src="/images/design-mode/image.png"
                alt="Society of Gastrointestinal Endoscopy Logo"
                className="h-20 w-auto"
              />
            </div>
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
