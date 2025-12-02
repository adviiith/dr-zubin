"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("")

    const formDataObj = new FormData(event.currentTarget)
    formDataObj.append("access_key", "60bbc07a-e2eb-4227-8676-15769d0861b5")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Message sent successfully! We'll get back to you soon.")
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        setResult("Something went wrong. Please try again.")
      }
    } catch (error) {
      setResult("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <p className="text-accent font-semibold mb-2">GET IN TOUCH</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Reach out to schedule an appointment or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-card">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+917726804920" className="hover:text-accent">
                      +91 7726 804920
                    </a>
                    <br />
                    <a href="tel:01542442705" className="hover:text-accent text-red-600 font-semibold">
                      Emergency: 0154 2442705
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="mailto:contact@drzubinsharma.in" className="hover:text-accent">
                      contact@drzubinsharma.in
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    30, Public Park, near MATKA CHOWK
                    <br />
                    Old Dhan Mandi, Sri Ganganagar
                    <br />
                    Rajasthan 335001
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: Closed
                    <br />
                    <span className="text-red-600 font-semibold">24/7 Emergency</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {result && (
                  <p className={`text-center font-medium ${result.includes("success") ? "text-green-600" : "text-red-600"}`}>
                    {result}
                  </p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
