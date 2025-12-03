"use client"

import { Phone, Plane } from "lucide-react"

export default function ImmigrationMarquee() {
    const countries = [
        {
            name: "Australia",
            flag: "https://flagcdn.com/w40/au.png",
            flagSet: "https://flagcdn.com/w80/au.png 2x"
        },
        {
            name: "New Zealand",
            flag: "https://flagcdn.com/w40/nz.png",
            flagSet: "https://flagcdn.com/w80/nz.png 2x"
        },
        {
            name: "Cyprus",
            flag: "https://flagcdn.com/w40/cy.png",
            flagSet: "https://flagcdn.com/w80/cy.png 2x"
        }
    ]

    return (
        <div className="w-full bg-gradient-to-r from-accent via-accent/95 to-accent text-accent-foreground py-6 overflow-hidden relative z-20 border-y-2 border-accent-foreground/20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            <div className="animate-marquee-mobile md:animate-marquee whitespace-nowrap flex items-center gap-20 relative">
                {/* Content repeated to ensure smooth infinite scroll */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-12 text-lg font-medium">
                        {/* Immigration Medical Centre Badge */}
                        <div className="flex items-center gap-4 bg-white/15 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-white/30 shadow-lg">
                            <Plane className="w-6 h-6 text-white" />
                            <span className="uppercase text-base font-bold tracking-wider text-white">
                                Immigration Medical Centre For
                            </span>
                        </div>

                        {/* Countries Section */}
                        <div className="flex items-center gap-4">
                            {countries.map((country, idx) => (
                                <div key={country.name} className="flex items-center gap-4">
                                    <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all shadow-md">
                                        <img
                                            src={country.flag}
                                            srcSet={country.flagSet}
                                            width="32"
                                            height="32"
                                            alt={country.name}
                                            className="object-cover rounded-full shadow-lg aspect-square ring-2 ring-white/40"
                                        />
                                        <span className="font-bold text-white">{country.name}</span>
                                        <span> </span>
                                        <span> </span>
                                    </div>
                                    {idx < countries.length - 1 && (
                                        <div className="w-2 h-2 rounded-full bg-white/50 shadow-sm" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center gap-4 bg-white text-accent rounded-full px-6 py-3 shadow-xl border-2 border-white/50 hover:scale-105 transition-transform">
                            <div className="bg-accent text-white rounded-full p-2">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">+91 95099 40525</span>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full border-2 border-white/30 shadow-lg">
                            <span className="text-base uppercase tracking-widest font-bold text-white">
                                📞 Book Your Appointment Today
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

