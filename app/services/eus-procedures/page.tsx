import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Zap, Microscope, Activity, Shield, Scan, Target } from "lucide-react"
import Link from "next/link"

export default function EUSProceduresPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-32 px-4 bg-gradient-to-b from-primary/10 to-background">
                <div className="container mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                        <Zap className="w-5 h-5 text-accent" />
                        <span className="text-accent font-semibold text-sm">ADVANCED IMAGING</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        Endoscopic Ultrasound (EUS)
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Cutting-edge endoscopic ultrasound technology for precise diagnostic imaging and
                        minimally invasive therapeutic interventions
                    </p>
                    <Link href="/contact">
                        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                            Schedule EUS Procedure
                        </Button>
                    </Link>
                </div>
            </section>

            {/* What is EUS */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-accent font-semibold mb-2">PIONEERING TECHNOLOGY</p>
                            <h2 className="text-4xl font-bold text-foreground mb-6">What is Endoscopic Ultrasound?</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Endoscopic Ultrasound (EUS) is an advanced minimally invasive procedure that combines endoscopy
                                with ultrasound imaging. A specialized endoscope with an ultrasound probe at its tip allows us
                                to obtain detailed images of the digestive tract wall and surrounding organs including the
                                pancreas, bile ducts, and lymph nodes.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                <strong>Dr. Zubin Sharma performed the first-ever Endoscopic Ultrasound in Sri Ganganagar
                                    in April 2016</strong>, bringing this revolutionary technology to the region. With the largest
                                individual experience in EUS in the area and international training from Academic Medical
                                Centre, Amsterdam, our team delivers world-class diagnostic and therapeutic EUS services.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                EUS provides superior imaging compared to traditional methods, allowing for earlier detection
                                of cancers, precise staging of tumors, and guided tissue sampling with exceptional accuracy.
                            </p>
                        </div>
                        <div>
                            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                                <h3 className="text-2xl font-bold text-foreground mb-6">Advantages of EUS</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Superior image resolution compared to CT/MRI",
                                        "Real-time guided tissue sampling (FNA/FNB)",
                                        "Minimally invasive with no external incisions",
                                        "Accurate staging of GI and pancreatic cancers",
                                        "Same-day procedure with rapid recovery",
                                        "Therapeutic interventions possible",
                                        "Lower risk than surgical alternatives"
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

            {/* Conditions Diagnosed */}
            <section className="py-20 px-4 bg-secondary/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">DIAGNOSTIC CAPABILITIES</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Conditions Diagnosed with EUS</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            EUS provides unparalleled accuracy in diagnosing a wide range of conditions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Pancreatic Cancer",
                                description: "Early detection and accurate staging of pancreatic tumors with EUS-guided biopsy"
                            },
                            {
                                title: "Bile Duct Stones",
                                description: "Precise visualization of bile duct stones and assessment of biliary obstruction"
                            },
                            {
                                title: "Chronic Pancreatitis",
                                description: "Detailed evaluation of pancreatic changes and complications"
                            },
                            {
                                title: "Pancreatic Cysts",
                                description: "Characterization of pancreatic cysts and assessment of malignancy risk"
                            },
                            {
                                title: "Submucosal Tumors",
                                description: "Evaluation of abnormal growths in the GI tract wall (GISTs, leiomyomas)"
                            },
                            {
                                title: "Esophageal Cancer",
                                description: "Accurate staging of esophageal tumors for treatment planning"
                            },
                            {
                                title: "Gastric Cancer",
                                description: "Staging of stomach cancer and assessment of lymph node involvement"
                            },
                            {
                                title: "Rectal Cancer",
                                description: "Precise staging of rectal tumors to guide surgical planning"
                            },
                            {
                                title: "Lymph Node Assessment",
                                description: "Evaluation and sampling of enlarged lymph nodes near the GI tract"
                            },
                            {
                                title: "Ampullary Tumors",
                                description: "Detailed imaging of tumors at the junction of bile and pancreatic ducts"
                            },
                            {
                                title: "Mediastinal Masses",
                                description: "Assessment of masses in the chest through the esophagus"
                            },
                            {
                                title: "Portal Hypertension",
                                description: "Evaluation of varices and portal vein thrombosis"
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

            {/* EUS Procedures */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">THERAPEUTIC INTERVENTIONS</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">EUS-Guided Procedures</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Beyond diagnosis, EUS enables minimally invasive therapeutic interventions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "EUS-Guided Fine Needle Aspiration (FNA)",
                                description: "Precise tissue sampling from pancreatic masses, lymph nodes, and other lesions under real-time ultrasound guidance for accurate diagnosis without surgery."
                            },
                            {
                                icon: Microscope,
                                title: "EUS-Guided Fine Needle Biopsy (FNB)",
                                description: "Advanced tissue sampling technique providing larger specimens for comprehensive pathological analysis and molecular testing."
                            },
                            {
                                icon: Activity,
                                title: "EUS-Guided Drainage",
                                description: "Minimally invasive drainage of pancreatic pseudocysts, abscesses, and bile duct obstructions using EUS guidance."
                            },
                            {
                                icon: Scan,
                                title: "EUS-Guided Celiac Plexus Block",
                                description: "Pain management for chronic pancreatitis and pancreatic cancer through targeted nerve block under EUS guidance."
                            },
                            {
                                icon: Shield,
                                title: "EUS-Guided Biliary Drainage",
                                description: "Alternative drainage route for bile duct obstruction when ERCP is not possible or has failed."
                            },
                            {
                                icon: Zap,
                                title: "EUS-Guided Vascular Assessment",
                                description: "Detailed evaluation of blood vessels around the pancreas and assessment of tumor vascular invasion."
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
                        <p className="text-accent font-semibold mb-2">UNMATCHED EXPERTISE</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Aditya Hospital for EUS</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-8 text-center">
                            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-10 h-10 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Regional Pioneer</h3>
                            <p className="text-muted-foreground">
                                First EUS performed in Sri Ganganagar (April 2016) with the largest individual experience
                                in the region
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Microscope className="w-10 h-10 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">International Training</h3>
                            <p className="text-muted-foreground">
                                Dr. Zubin Sharma trained at Academic Medical Centre, Amsterdam under Prof. Paul Fockens,
                                a world leader in EUS
                            </p>
                        </Card>

                        <Card className="p-8 text-center">
                            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">Advanced Equipment</h3>
                            <p className="text-muted-foreground">
                                Latest generation EUS equipment with high-definition imaging and advanced therapeutic
                                capabilities
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <Card className="p-12 bg-gradient-to-br from-accent to-accent/90 text-white text-center">
                        <h2 className="text-4xl font-bold mb-4">Need an EUS Procedure?</h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            Trust the region's most experienced EUS specialist for accurate diagnosis and
                            minimally invasive treatment. Schedule your consultation today.
                        </p>
                        <Link href="/contact">
                            <Button className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-6">
                                Schedule EUS Consultation
                            </Button>
                        </Link>
                    </Card>
                </div>
            </section>
        </main>
    )
}
