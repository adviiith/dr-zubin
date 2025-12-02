import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Happy Aulakh",
    text: "I'm very pleased with the visa medical team. I had a visa medical examination, and the hospital staff and team guided me and cooperated with me during the full medical process. Thank you so much, Aditya Hospital.",
    rating: 5,
    timeAgo: "3 months ago",
  },
  {
    name: "Harmeet",
    text: "Dr. Sharma and team were very cooperative. Easy and fast Australia visa medical. Same day submission of documents. Thanks!",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "Harsh Preet",
    text: "Thanks for everything! Their visa staff is very good and friendly, and their doctors are fabulous. I appreciate the way they provide their services.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    name: "Gagan Chahal",
    text: "Thank you, Aditya Hospital, for the Australia medical visa. The staff is very good and provides excellent service.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    name: "Mohobat Singh Gill",
    text: "Visa medical at Aditya Gastro Hospital in Rajasthan is very good. Nice guidance and a helpful visa medical team.",
    rating: 5,
    timeAgo: "3 months ago",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-secondary/40">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">What Our Patients Say</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-8 bg-card hover:shadow-lg transition-all">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.timeAgo}</p>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                </div>
              </div>
              <p className="text-foreground leading-relaxed">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
