import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Stethoscope, Heart, Activity, Shield, Pill } from "lucide-react"
import Link from "next/link"

export default function GastroenterologyPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-32 px-4 bg-gradient-to-b from-primary/10 to-background">
                <div className="container mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                        <Stethoscope className="w-5 h-5 text-accent" />
                        <span className="text-accent font-semibold text-sm">DIGESTIVE HEALTH</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        Gastroenterology Services
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Comprehensive care for all digestive system disorders with expert diagnosis, advanced treatment,
                        and personalized patient care
                    </p>
                    <Link href="/contact">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                            Schedule Consultation
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-accent font-semibold mb-2">EXPERT DIGESTIVE CARE</p>
                            <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Gastroenterology</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Gastroenterology is the branch of medicine focused on the digestive system and its disorders.
                                Our gastroenterology department provides comprehensive diagnostic and therapeutic services for
                                conditions affecting the esophagus, stomach, small intestine, colon, rectum, pancreas, gallbladder,
                                bile ducts, and liver.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                At Aditya Hospital, we combine cutting-edge technology with compassionate care to deliver
                                exceptional outcomes for our patients. Our team, led by Dr. Zubin Sharma, brings international
                                expertise and extensive experience in managing complex gastrointestinal conditions.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We offer a full spectrum of services from routine screening and prevention to advanced diagnostic
                                procedures and complex therapeutic interventions, all under one roof.
                            </p>
                        </div>
                        <div>
                            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                                <h3 className="text-2xl font-bold text-foreground mb-6">Our Approach</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Evidence-based treatment protocols",
                                        "Personalized care plans for each patient",
                                        "State-of-the-art diagnostic technology",
                                        "Multidisciplinary team collaboration",
                                        "Focus on preventive care and screening",
                                        "Comprehensive follow-up and monitoring"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Conditions */}
            <section className="py-20 px-4 bg-secondary/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">CONDITIONS WE TREAT</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Gastrointestinal Disorders</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Expert diagnosis and treatment for a wide range of digestive system conditions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Irritable Bowel Syndrome (IBS)",
                                description: "Comprehensive management of IBS symptoms including abdominal pain, bloating, and altered bowel habits"
                            },
                            {
                                title: "Inflammatory Bowel Disease",
                                description: "Expert care for Crohn's disease and ulcerative colitis with advanced medical and biological therapies"
                            },
                            {
                                title: "Acid Reflux & GERD",
                                description: "Treatment of gastroesophageal reflux disease and chronic heartburn with lifestyle and medical interventions"
                            },
                            {
                                title: "Peptic Ulcer Disease",
                                description: "Diagnosis and treatment of stomach and duodenal ulcers, including H. pylori eradication"
                            },
                            {
                                title: "Celiac Disease",
                                description: "Screening, diagnosis, and dietary management of gluten sensitivity and celiac disease"
                            },
                            {
                                title: "Colorectal Cancer Screening",
                                description: "Early detection through colonoscopy and advanced imaging for prevention and early treatment"
                            },
                            {
                                title: "Chronic Constipation",
                                description: "Evaluation and treatment of chronic constipation and motility disorders"
                            },
                            {
                                title: "Chronic Diarrhea",
                                description: "Comprehensive workup and management of persistent diarrheal conditions"
                            },
                            {
                                title: "Abdominal Pain",
                                description: "Thorough evaluation and treatment of acute and chronic abdominal pain syndromes"
                            },
                            {
                                title: "Dyspepsia",
                                description: "Management of indigestion, bloating, and upper abdominal discomfort"
                            },
                            {
                                title: "Diverticular Disease",
                                description: "Treatment and prevention of diverticulitis and its complications"
                            },
                            {
                                title: "Food Intolerances",
                                description: "Diagnosis and dietary management of lactose intolerance and other food sensitivities"
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

            {/* Diagnostic Services */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">ADVANCED DIAGNOSTICS</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Comprehensive Testing</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Activity,
                                title: "Endoscopic Procedures",
                                description: "Upper GI endoscopy, colonoscopy, and advanced endoscopic techniques for accurate diagnosis and therapeutic interventions"
                            },
                            {
                                icon: Stethoscope,
                                title: "Clinical Evaluation",
                                description: "Comprehensive physical examination, detailed medical history, and symptom assessment by experienced gastroenterologists"
                            },
                            {
                                icon: Pill,
                                title: "Laboratory Testing",
                                description: "Complete blood work, stool studies, H. pylori testing, celiac panels, and specialized GI biomarkers"
                            },
                            {
                                icon: Shield,
                                title: "Imaging Studies",
                                description: "Ultrasound, CT scans, MRI, and specialized GI imaging for detailed anatomical and functional assessment"
                            }
                        ].map((service, idx) => {
                            const Icon = service.icon
                            return (
                                <Card key={idx} className="p-8 hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-all">
                                        <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Treatment Approaches */}
            <section className="py-20 px-4 bg-secondary/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">PERSONALIZED TREATMENT</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Our Treatment Philosophy</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We believe in a holistic, patient-centered approach to digestive health
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Medical Management</h3>
                            <p className="text-muted-foreground mb-4">
                                Latest medications and biological therapies tailored to your specific condition
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Acid suppressants and proton pump inhibitors</li>
                                <li>• Anti-inflammatory medications</li>
                                <li>• Biological therapies for IBD</li>
                                <li>• Antibiotics for infections</li>
                            </ul>
                        </Card>

                        <Card className="p-8">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                                <Activity className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Lifestyle Modifications</h3>
                            <p className="text-muted-foreground mb-4">
                                Evidence-based dietary and lifestyle recommendations for optimal digestive health
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Personalized dietary plans</li>
                                <li>• Stress management techniques</li>
                                <li>• Exercise recommendations</li>
                                <li>• Sleep hygiene guidance</li>
                            </ul>
                        </Card>

                        <Card className="p-8">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Interventional Procedures</h3>
                            <p className="text-muted-foreground mb-4">
                                Advanced endoscopic and minimally invasive procedures when needed
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Therapeutic endoscopy</li>
                                <li>• Polyp removal</li>
                                <li>• Stricture dilation</li>
                                <li>• Bleeding control</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <Card className="p-12 bg-gradient-to-br from-accent to-accent/90 text-white text-center">
                        <h2 className="text-4xl font-bold mb-4">Take Control of Your Digestive Health</h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            Schedule a consultation with our expert gastroenterology team today.
                            We're here to help you achieve optimal digestive wellness.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-6">
                                Book Consultation
                            </Button>
                        </Link>
                    </Card>
                </div>
            </section>
        </main>
    )
}
