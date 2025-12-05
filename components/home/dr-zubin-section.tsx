import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DrZubinSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full rounded-xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZUBIN1-FusWusyb3BHd7atvL5oLJrr2oYNj4P.jpg"
              alt="Dr. Zubin Sharma"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold mb-2">MEET THE EXPERT</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">Dr. Zubin Sharma</h2>
            <p className="text-accent font-semibold text-lg mb-4">
              MD, MRCP (UK), FRCPI (IRELAND), FRCP (EDINBURGH), FASGE, European Board of Gastroenterology & Hepatology
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              Senior Consultant, G.I. Endoscopist, and Endosonologist with the largest individual experience in
              Endoscopic Ultrasound in the region. Dr. Zubin Sharma performed the first-ever Endoscopic Ultrasound in
              Sri Ganganagar in April 2016.
            </p>

            <p className="text-foreground/80 leading-relaxed mb-6">
              After completing his M.D. in Internal Medicine, he pursued Fellowship in Gastroenterology and Endoscopy
              from Tata Memorial Hospital, Mumbai. He has passed the European Board of Gastroenterology & Hepatology
              and holds a Speciality Certificate in Gastroenterology from the U.K. He subsequently completed his ESGE
              Fellowship in ERCP and Endoscopic Ultrasound at Academic Medical Centre, Amsterdam under Prof. Paul Fockens,
              trained in Hepatology at Kings College Hospital, London, and underwent advanced training in Third Space
              Endoscopy from Japan.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Expert in Endoscopic Ultrasound (EUS)",
                "ESGE Trained ERCP Specialist",
                "Hepatology & Transplant Experience",
                "Trained at International Centers",
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Read More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
