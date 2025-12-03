"use client"

import { Phone } from "lucide-react"

export default function ImmigrationMarquee() {
    return (
        <div className="w-full bg-accent text-accent-foreground py-4 overflow-hidden relative z-20 border-b border-accent-foreground/10">
            <div className="animate-marquee-mobile md:animate-marquee whitespace-nowrap flex items-center gap-16">
                {/* Content repeated to ensure smooth infinite scroll */}
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-12 text-lg font-medium tracking-wide">
                        <div className="flex items-center gap-4">
                            <span className="uppercase text-sm font-bold tracking-wider opacity-90">Immigration Medical Centre For</span>
                            <div className="flex items-center gap-6 bg-white/10 px-6 py-2 rounded-full border border-white/10">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://flagcdn.com/w40/au.png"
                                        srcSet="https://flagcdn.com/w80/au.png 2x"
                                        width="28"
                                        height="28"
                                        alt="Australia"
                                        className="object-cover rounded-full shadow-sm aspect-square"
                                    />
                                    <span>Australia</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-accent-foreground/40" />
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://flagcdn.com/w40/nz.png"
                                        srcSet="https://flagcdn.com/w80/nz.png 2x"
                                        width="28"
                                        height="28"
                                        alt="New Zealand"
                                        className="object-cover rounded-full shadow-sm aspect-square"
                                    />
                                    <span>New Zealand</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-accent-foreground/40" />
                                <div className="flex items-center gap-3">
                                    <img
                                        src="https://flagcdn.com/w40/cy.png"
                                        srcSet="https://flagcdn.com/w80/cy.png 2x"
                                        width="28"
                                        height="28"
                                        alt="Cyprus"
                                        className="object-cover rounded-full shadow-sm aspect-square"
                                    />
                                    <span>Cyprus</span>
                                    <span>  </span>
                                    <span>  </span>

                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-white text-accent rounded-full p-1.5">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">+91 95099 40525</span>
                        </div>

                        <span className="text-sm uppercase tracking-widest opacity-75 border-l border-white/20 pl-6">Book Your Appointment Today</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
