"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, Globe } from "lucide-react"

export default function ImmigrationServiceDetail() {
    return (
        <section className="py-12 px-4">
            <div className="container mx-auto">
                <Card className="overflow-hidden border-accent/20 shadow-lg">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-primary/5 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-accent/10 rounded-lg">
                                    <Globe className="w-8 h-8 text-accent" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Immigration Medical Examination Centre
                                </h2>
                            </div>

                            <p className="text-muted-foreground mb-8 text-lg">
                                We are an authorized medical examination centre for immigration visa applications.
                                Our streamlined process ensures a hassle-free experience for your medical clearance.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                                    <img
                                        src="https://flagcdn.com/w80/au.png"
                                        srcSet="https://flagcdn.com/w160/au.png 2x"
                                        width="48"
                                        height="32"
                                        alt="Australia Flag"
                                        className="object-contain rounded shadow-sm"
                                    />
                                    <div>
                                        <h3 className="font-bold text-foreground">Australia</h3>
                                        <p className="text-sm text-muted-foreground">Immigration Health Examinations</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                                    <img
                                        src="https://flagcdn.com/w80/nz.png"
                                        srcSet="https://flagcdn.com/w160/nz.png 2x"
                                        width="48"
                                        height="32"
                                        alt="New Zealand Flag"
                                        className="object-contain rounded shadow-sm"
                                    />
                                    <div>
                                        <h3 className="font-bold text-foreground">New Zealand</h3>
                                        <p className="text-sm text-muted-foreground">Immigration Health Examinations</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
                                    <img
                                        src="https://flagcdn.com/w80/cy.png"
                                        srcSet="https://flagcdn.com/w160/cy.png 2x"
                                        width="48"
                                        height="32"
                                        alt="Cyprus Flag"
                                        className="object-contain rounded shadow-sm"
                                    />
                                    <div>
                                        <h3 className="font-bold text-foreground">Cyprus</h3>
                                        <p className="text-sm text-muted-foreground">Immigration Health Examinations</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-card flex flex-col justify-center border-t md:border-t-0 md:border-l border-border">
                            <h3 className="text-xl font-bold text-foreground mb-6">Why Choose Us?</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">Authorized panel physicians</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">Complete e-Medical processing</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">Fast report submission</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                    <p className="text-muted-foreground">One-stop solution for X-ray and Lab tests</p>
                                </div>
                            </div>

                            <div className="bg-accent/5 p-6 rounded-xl border border-accent/20">
                                <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-accent" />
                                    Book Your Appointment
                                </h4>
                                <p className="text-muted-foreground mb-4">
                                    Appointments are mandatory. Please call our dedicated immigration line to schedule your visit.
                                </p>
                                <a href="tel:+919509940525">
                                    <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg">
                                        Call +91 95099 40525
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
