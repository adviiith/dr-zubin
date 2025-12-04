import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Heart, Activity, Shield, Zap, Pill, Scan } from "lucide-react"
import Link from "next/link"

export default function HepatologyPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-32 px-4 bg-gradient-to-b from-primary/10 to-background">
                <div className="container mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                        <Heart className="w-5 h-5 text-accent" />
                        <span className="text-accent font-semibold text-sm">LIVER CARE</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        Hepatology Services
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Specialized liver disease treatment, hepatitis management, and comprehensive hepatic care
                        with advanced diagnostics and personalized treatment plans
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
                            <p className="text-accent font-semibold mb-2">EXPERT LIVER CARE</p>
                            <h2 className="text-4xl font-bold text-foreground mb-6">Comprehensive Hepatology</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Hepatology is the specialized field of medicine dedicated to the study, diagnosis, and treatment
                                of liver, gallbladder, biliary tree, and pancreas disorders. Our hepatology department provides
                                state-of-the-art care for all liver-related conditions, from acute hepatitis to chronic liver
                                disease and cirrhosis.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Dr. Zubin Sharma brings extensive international training from Kings College Hospital, London,
                                one of the world's leading liver transplant centers. This expertise, combined with advanced
                                diagnostic technology, ensures our patients receive world-class hepatology care right here
                                in Sri Ganganagar.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We offer comprehensive services including viral hepatitis management, fatty liver disease treatment,
                                cirrhosis care, and liver transplant evaluation, all delivered with compassion and clinical excellence.
                            </p>
                        </div>
                        <div>
                            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                                <h3 className="text-2xl font-bold text-foreground mb-6">Our Expertise</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Advanced FibroScan technology for liver assessment",
                                        "Viral hepatitis (B & C) treatment programs",
                                        "Fatty liver disease management",
                                        "Cirrhosis and complications management",
                                        "Liver transplant evaluation and preparation",
                                        "International training and expertise"
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

            {/* Conditions Treated */}
            <section className="py-20 px-4 bg-secondary/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-accent font-semibold mb-2">LIVER CONDITIONS</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Conditions We Treat</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Expert diagnosis and management of all liver-related disorders
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Hepatitis B & C",
                                description: "Comprehensive antiviral therapy and monitoring for chronic viral hepatitis with latest treatment protocols"
                            },
                            {
                                title: "Fatty Liver Disease (NAFLD)",
                                description: "Management of non-alcoholic fatty liver disease through lifestyle modification and medical therapy"
                            },
                            {
                                title: "Alcoholic Liver Disease",
                                description: "Treatment and counseling for alcohol-related liver damage and cirrhosis"
                            },
                            {
                                title: "Liver Cirrhosis",
                                description: "Comprehensive care for cirrhosis and its complications including ascites and varices"
                            },
                            {
                                title: "Autoimmune Hepatitis",
                                description: "Diagnosis and immunosuppressive therapy for autoimmune liver conditions"
                            },
                            {
                                title: "Primary Biliary Cholangitis",
                                description: "Management of chronic cholestatic liver disease with specialized treatment"
                            },
                            {
                                title: "Wilson's Disease",
                                description: "Diagnosis and copper-chelation therapy for this genetic liver disorder"
                            },
                            {
                                title: "Hemochromatosis",
                                description: "Management of iron overload disorders affecting the liver"
                            },
                            {
                                title: "Portal Hypertension",
                                description: "Treatment of elevated portal pressure and prevention of variceal bleeding"
                            },
                            {
                                title: "Hepatic Encephalopathy",
                                description: "Management of brain dysfunction caused by liver disease"
                            },
                            {
                                title: "Ascites",
                                description: "Treatment of fluid accumulation in the abdomen due to liver disease"
                            },
                            {
                                title: "Liver Tumors",
                                description: "Evaluation and management of benign and malignant liver lesions"
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
                        <h2 className="text-4xl font-bold text-foreground mb-4">Comprehensive Liver Assessment</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Scan,
                                title: "FibroScan (Transient Elastography)",
                                description: "Non-invasive assessment of liver stiffness and fat content, providing accurate staging of liver fibrosis without the need for biopsy. Quick, painless procedure with immediate results."
                            },
                            {
                                icon: Activity,
                                title: "Liver Function Tests",
                                description: "Comprehensive blood work including liver enzymes, bilirubin, albumin, and coagulation studies to assess liver health and function."
                            },
                            {
                                icon: Pill,
                                title: "Viral Hepatitis Screening",
                                description: "Complete testing for Hepatitis A, B, C, D, and E including viral load quantification and genotyping for treatment planning."
                            },
                            {
                                icon: Zap,
                                title: "Advanced Imaging",
                                description: "Ultrasound, CT, and MRI imaging for detailed liver assessment, tumor detection, and evaluation of liver architecture and blood flow."
                            },
                            {
                                icon: Shield,
                                title: "Liver Biopsy",
                                description: "When needed, safe and accurate liver tissue sampling for definitive diagnosis and staging of liver disease."
                            },
                            {
                                icon: Heart,
                                title: "Endoscopic Evaluation",
                                description: "Upper GI endoscopy for screening and treatment of esophageal varices in patients with portal hypertension."
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
                        <p className="text-accent font-semibold mb-2">COMPREHENSIVE CARE</p>
                        <h2 className="text-4xl font-bold text-foreground mb-4">Treatment Options</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4">Antiviral Therapy</h3>
                            <p className="text-muted-foreground mb-4">
                                Latest direct-acting antivirals for Hepatitis C with cure rates exceeding 95%, and effective
                                antiviral therapy for Hepatitis B to prevent disease progression.
                            </p>
                        </Card>

                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4">Lifestyle Modification</h3>
                            <p className="text-muted-foreground mb-4">
                                Personalized diet and exercise programs for fatty liver disease, weight management support,
                                and alcohol cessation counseling when needed.
                            </p>
                        </Card>

                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4">Cirrhosis Management</h3>
                            <p className="text-muted-foreground mb-4">
                                Comprehensive care for cirrhosis complications including ascites management, variceal screening
                                and treatment, and hepatic encephalopathy control.
                            </p>
                        </Card>

                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4">Immunosuppressive Therapy</h3>
                            <p className="text-muted-foreground mb-4">
                                Specialized treatment for autoimmune liver diseases using corticosteroids and other
                                immunosuppressive agents with careful monitoring.
                            </p>
                        </Card>

                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4">Transplant Evaluation</h3>
                            <p className="text-muted-foreground mb-4">
                                Assessment and preparation for liver transplantation when needed, with coordination with
                                leading transplant centers.
                            </p>
                        </Card>

                        <Card className="p-8">
                            <h3 className="text-xl font-bold text-foreground mb-4">Preventive Care</h3>
                            <p className="text-muted-foreground mb-4">
                                Hepatitis B vaccination, screening for at-risk populations, and regular monitoring to
                                prevent disease progression and complications.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <Card className="p-12 bg-gradient-to-br from-accent to-accent/90 text-white text-center">
                        <h2 className="text-4xl font-bold mb-4">Protect Your Liver Health</h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            Early detection and treatment of liver disease can prevent serious complications.
                            Schedule your hepatology consultation today.
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
