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

    type Country = typeof countries[number]

    type MarqueeItem =
        | { type: 'badge'; content: string }
        | { type: 'countries'; content: Country[] }
        | { type: 'phone'; content: string }
        | { type: 'cta'; content: string }

    // Create multiple items for the circular loop
    const items: MarqueeItem[] = [
        { type: 'badge', content: 'Immigration Medical Centre For' },
        { type: 'countries', content: countries },
        { type: 'phone', content: '+91 95099 40525' },
        { type: 'cta', content: '📞 Book Your Appointment Today' },
    ]

    // Duplicate items to create seamless loop
    const allItems = [...items, ...items, ...items]

    return (
        <div className="w-full bg-gradient-to-r from-accent via-accent/95 to-accent text-accent-foreground py-8 overflow-hidden relative z-20 border-y-2 border-accent-foreground/20">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            </div>

            {/* Circular rotating container */}
            <div className="relative h-20 flex items-center justify-center">
                <div className="animate-circular-marquee">
                    <div className="flex items-center gap-12">
                        {allItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-12">
                                {item.type === 'badge' && (
                                    <div className="flex items-center gap-4 bg-white/15 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-white/30 shadow-lg whitespace-nowrap">
                                        <Plane className="w-6 h-6 text-white" />
                                        <span className="uppercase text-base font-bold tracking-wider text-white">
                                            {item.content}
                                        </span>
                                    </div>
                                )}

                                {item.type === 'countries' && (
                                    <div className="flex items-center gap-4">
                                        {(item.content as typeof countries).map((country, countryIdx) => (
                                            <div key={country.name} className="flex items-center gap-4">
                                                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all shadow-md whitespace-nowrap">
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
                                                {countryIdx < (item.content as typeof countries).length - 1 && (
                                                    <div className="w-2 h-2 rounded-full bg-white/50 shadow-sm" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {item.type === 'phone' && (
                                    <div className="flex items-center gap-4 bg-white text-accent rounded-full px-6 py-3 shadow-xl border-2 border-white/50 hover:scale-105 transition-transform whitespace-nowrap">
                                        <div className="bg-accent text-white rounded-full p-2">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-xl tracking-tight">{item.content}</span>
                                    </div>
                                )}

                                {item.type === 'cta' && (
                                    <div className="bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full border-2 border-white/30 shadow-lg whitespace-nowrap">
                                        <span className="text-base uppercase tracking-widest font-bold text-white">
                                            {item.content}
                                        </span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

