import { Award } from "lucide-react"

export default function AccreditationSection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-emerald-50 to-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16">
          {/* WEO Logo */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="flex-shrink-0">
              <img
                src="/images/weo-logo.png"
                alt="World Endoscopy Organization Logo"
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Accredited Centre of ADVANCED ENDOSCOPY</h3>
              <p className="text-sm sm:text-base text-foreground/70 font-semibold">by World Endoscopy Organization</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-16 w-px bg-foreground/20"></div>

          {/* SGI Accreditation */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="flex-shrink-0">
              <img
                src="/images/design-mode/image.png"
                alt="Society of Gastrointestinal Endoscopy Logo"
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Accredited Centre of ADVANCED ENDOSCOPY</h3>
              <p className="text-sm sm:text-base text-foreground/70 font-semibold">by Society of Gastrointestinal Endoscopy, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
