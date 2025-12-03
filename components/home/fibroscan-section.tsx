"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Activity, Clock, Award, Zap, Shield, CheckCircle2 } from "lucide-react"

export default function FibroscanSection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                        EXCLUSIVE TECHNOLOGY
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        FibroScan EchoSense
                    </h2>
                    <p className="text-xl text-accent font-semibold mb-2">
                        The Only Machine in This Zone
                    </p>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Advanced non-invasive liver diagnostic technology, available 24/7 for your convenience
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Main Info Card */}
                    <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-accent/10 rounded-lg">
                                <Activity className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">
                                    What is FibroScan?
                                </h3>
                                <p className="text-muted-foreground">
                                    FibroScan is a revolutionary, non-invasive diagnostic device that measures liver stiffness and fat content
                                    using advanced ultrasound technology. It's the gold standard for comprehensive liver health assessment,
                                    providing accurate results without the need for painful biopsies.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-foreground">Painless & Quick</p>
                                    <p className="text-sm text-muted-foreground">Complete examination in just 5-7 minutes</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-foreground">Immediate Results</p>
                                    <p className="text-sm text-muted-foreground">Get your liver health assessment on the spot</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-foreground">No Hospitalization</p>
                                    <p className="text-sm text-muted-foreground">Walk-in, get tested, and walk out the same day</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                            <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                                <Clock className="w-6 h-6 text-accent" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">24/7 Availability</h4>
                            <p className="text-sm text-muted-foreground">
                                Access this advanced diagnostic technology any time, day or night, for your convenience
                            </p>
                        </Card>

                        <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                            <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                                <Award className="w-6 h-6 text-accent" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">Exclusive in Zone</h4>
                            <p className="text-sm text-muted-foreground">
                                The only FibroScan EchoSense machine available in this entire region
                            </p>
                        </Card>

                        <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                            <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                                <Zap className="w-6 h-6 text-accent" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">Advanced Technology</h4>
                            <p className="text-sm text-muted-foreground">
                                Guided VCTE™ technology for enhanced accuracy and reliability in liver assessments
                            </p>
                        </Card>

                        <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
                            <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                                <Shield className="w-6 h-6 text-accent" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">Safe & Accurate</h4>
                            <p className="text-sm text-muted-foreground">
                                Non-invasive alternative to liver biopsy with no risks, pain, or recovery time
                            </p>
                        </Card>
                    </div>
                </div>

                {/* What It Detects */}
                <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                        Comprehensive Liver Health Assessment
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Activity className="w-8 h-8 text-accent" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">Liver Fibrosis</h4>
                            <p className="text-sm text-muted-foreground">
                                Measures liver stiffness to detect and stage fibrosis and cirrhosis
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Activity className="w-8 h-8 text-accent" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">Liver Steatosis</h4>
                            <p className="text-sm text-muted-foreground">
                                Assesses fat content in the liver to diagnose fatty liver disease
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Activity className="w-8 h-8 text-accent" />
                            </div>
                            <h4 className="font-bold text-foreground mb-2">Disease Monitoring</h4>
                            <p className="text-sm text-muted-foreground">
                                Track progression of chronic liver diseases over time
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
