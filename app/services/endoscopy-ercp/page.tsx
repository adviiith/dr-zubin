import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Microscope, Zap, Shield, Activity } from "lucide-react"
import Link from "next/link"

export default function EndoscopyERCPPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-32 px-4 bg-gradient-to-b from-primary/10 to-background">
                <div className="container mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                        <Microscope className="w-5 h-5 text-accent" />
                        <span className="text-accent font-semibold text-sm">ADVANCED ENDOSCOPY</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        Endoscopy & ERCP Services
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        State-of-the-art diagnostic and therapeutic endoscopic procedures using the latest technology
                        for comprehensive gastrointestinal care
                    </p>
                    <Link href="/contact">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                            Schedule a Consultation
                        </Button>
                    </Link>
                </div>
            </section>

            {/* What is Endoscopy & ERCP */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-accent font-semibold mb-2">UNDERSTANDING THE PROCEDURE</p>
                            <h2 className="text-4xl font-bold text-foreground mb-6">What is Endoscopy & ERCP?</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Endoscopy</strong> is a minimally invasive diagnostic procedure that allows our specialists
                                to examine the digestive tract using a flexible tube with a camera and light. This advanced
                                technology enables us to visualize the esophagus, stomach, and upper small intestine with
                                exceptional clarity.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>ERCP (Endoscopic Retrograde Cholangiopancreatography)</strong> is a specialized endoscopic
                                procedure that combines endoscopy with X-ray imaging to diagnose and treat problems in the bile
                                ducts, pancreatic duct, and gallbladder. It's particularly effective for removing stones, placing
                                stents, and treating obstructive jaundice.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                At Aditya Hospital, we utilize cutting-edge endoscopic equipment and techniques to ensure accurate
                                diagnosis and effective treatment with minimal discomfort and rapid recovery.
                            </p>
                        </div>
                        <div className="relative">
                            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                                <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Minimally invasive with no external incisions",
                                        "Same-day procedure with quick recovery",
                                        "High diagnostic accuracy",
                                        "Immediate therapeutic intervention possible",
                                        "Reduced risk compared to traditional surgery",
                                        "Performed by highly experienced specialists"
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditions Treated */}
            <section className="py-20 px-4 bg-secondary/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">COMPREHENSIVE CARE</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Conditions We Treat</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Our endoscopy and ERCP services address a wide range of gastrointestinal conditions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "GERD & Acid Reflux",
                                description: "Diagnosis and treatment of gastroesophageal reflux disease and chronic heartburn"
                            },
                            {
                                title: "Peptic Ulcers",
                                description: "Detection and management of stomach and duodenal ulcers"
                            },
                            {
                                title: "Barrett's Esophagus",
                                description: "Screening and surveillance for precancerous changes in the esophagus"
                            },
                            {
                                title: "Bile Duct Stones",
                                description: "Removal of stones causing obstructive jaundice and pain"
                            },
                            {
                                title: "Pancreatic Disorders",
                                description: "Diagnosis and treatment of pancreatitis and pancreatic duct problems"
                            },
                            {
                                title: "GI Bleeding",
                                description: "Identification and treatment of bleeding sources in the digestive tract"
                            },
                            {
                                title: "Strictures & Blockages",
                                description: "Dilation and stenting of narrowed areas in the digestive system"
                            },
                            {
                                title: "Tumors & Polyps",
                                description: "Detection, biopsy, and removal of abnormal growths"
                            },
                            {
                                title: "Swallowing Difficulties",
                                description: "Evaluation and treatment of dysphagia and esophageal disorders"
                            }
                        ].map((condition, idx) => (
                            <Card key={idx} className="p-6 hover:shadow-lg transition-all hover:border-accent">
                                <h3 className="text-lg font-bold text-foreground mb-2">{condition.title}</h3>
                                <p className="text-muted-foreground text-sm">{condition.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Procedures Offered */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">OUR EXPERTISE</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Advanced Procedures</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Activity,
                                title: "Upper GI Endoscopy (OGD)",
                                description: "Comprehensive examination of the esophagus, stomach, and duodenum using high-definition endoscopes. Includes diagnostic biopsies, polyp removal, and treatment of bleeding lesions."
                            },
                            {
                                icon: Zap,
                                title: "Therapeutic ERCP",
                                description: "Advanced treatment for bile duct stones, strictures, and obstructive jaundice. Includes sphincterotomy, stone extraction, stent placement, and drainage procedures."
                            },
                            {
                                icon: Shield,
                                title: "Variceal Band Ligation",
                                description: "Treatment of esophageal and gastric varices to prevent life-threatening bleeding in patients with liver disease and portal hypertension."
                            },
                            {
                                icon: Microscope,
                                title: "Polypectomy",
                                description: "Safe removal of polyps and early cancerous lesions from the digestive tract using advanced endoscopic techniques including EMR and ESD."
                            }
                        ].map((procedure, idx) => {
                            const Icon = procedure.icon
                            return (
                                <Card key={idx} className="p-8 hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-all">
                                        <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{procedure.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{procedure.description}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 bg-secondary/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">EXCELLENCE IN CARE</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Aditya Hospital</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 text-center">
                            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Microscope className="w-10 h-10 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Latest Technology</h3>
                            <p className="text-muted-foreground">
                                High-definition endoscopes, advanced imaging systems, and state-of-the-art therapeutic equipment
                                for superior outcomes
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Expert Team</h3>
                            <p className="text-muted-foreground">
                                Led by Dr. Zubin Sharma with extensive international training and the largest individual
                                experience in advanced endoscopy in the region
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-10 h-10 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Proven Results</h3>
                            <p className="text-muted-foreground">
                                Thousands of successful procedures with high patient satisfaction, minimal complications,
                                and excellent clinical outcomes
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <Card className="p-12 bg-gradient-to-br from-accent to-accent/90 text-white text-center">
                        <h2 className="text-4xl font-bold mb-4">Ready to Schedule Your Procedure?</h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            Our expert team is here to provide you with the highest quality endoscopic care.
                            Contact us today to schedule your consultation.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-6">
                                Book Appointment
                            </Button>
                        </Link>
                    </Card>
                </div>
            </section>
        </main>
    )
}
