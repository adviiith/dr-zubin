"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Stethoscope, Ambulance } from "lucide-react"

export default function ChatbotButton() {
    const [isOpen, setIsOpen] = useState(false)

    const options = [
        {
            id: 1,
            label: "Medical Examination",
            icon: Stethoscope,
            phone: "+917726804920",
            color: "bg-blue-500 hover:bg-blue-600",
        },
        {
            id: 2,
            label: "Emergency",
            icon: Ambulance,
            phone: "01543575599",
            color: "bg-red-500 hover:bg-red-600",
        },
        {
            id: 3,
            label: "Contact Us",
            icon: Phone,
            phone: "+917726804920",
            color: "bg-green-500 hover:bg-green-600",
        },
    ]

    const handleCall = (phone: string) => {
        window.location.href = `tel:${phone}`
        setIsOpen(false)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Options Menu */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-border p-4 w-64 animate-in slide-in-from-bottom-5 duration-300">
                    <div className="space-y-3">
                        <div className="text-sm font-semibold text-foreground mb-3 px-2">
                            How can we help you?
                        </div>
                        {options.map((option) => {
                            const Icon = option.icon
                            return (
                                <button
                                    key={option.id}
                                    onClick={() => handleCall(option.phone)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-xl ${option.color} text-white transition-all duration-200 transform hover:scale-105 shadow-md`}
                                >
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="text-left flex-1">
                                        <div className="font-semibold text-sm">{option.label}</div>
                                        <div className="text-xs opacity-90">Tap to call</div>
                                    </div>
                                    <Phone className="w-4 h-4 opacity-75" />
                                </button>
                            )
                        })}
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mt-3 w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Main Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isOpen
                        ? "bg-gray-600 hover:bg-gray-700 rotate-0"
                        : "bg-accent hover:bg-accent/90 rotate-0"
                    }`}
                aria-label="Open chatbot"
            >
                {isOpen ? (
                    <X className="w-7 h-7 text-white" />
                ) : (
                    <MessageCircle className="w-7 h-7 text-accent-foreground" />
                )}
            </button>

            {/* Pulse Animation Ring */}
            {!isOpen && (
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20 pointer-events-none" />
            )}
        </div>
    )
}
