"use client";

import { useState } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { Building2, RotateCw } from "lucide-react";

interface DigitalCardProps {
    memberName: string;
    companyName: string;
    membershipId: string;
    sector: string;
    issueDate: string;
    expiryDate: string;
    isActive: boolean;
}

export function DigitalCard({
    memberName,
    companyName,
    membershipId,
    sector,
    issueDate,
    expiryDate,
    isActive
}: DigitalCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="perspective-1000 w-full max-w-md mx-auto h-64 relative group cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`w-full h-full transition-all duration-700 preserve-3d relative ${isFlipped ? "rotate-y-180" : ""}`}>
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    {/* Background with Gold Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-deep to-slate-900 z-0"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>

                    {/* Gold Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-gold/20 rounded-bl-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-light/30 rounded-tr-full blur-2xl"></div>

                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div>
                                    <Image
                                        src="/Logoch.png"
                                        alt="Logo"
                                        width={50}
                                        height={50}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-wide">غرفة تجارة حلب</h3>
                                    <p className="text-secondary-gold text-[10px] uppercase tracking-wider">Aleppo Chamber of Commerce</p>
                                </div>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-[10px] font-bold border ${isActive
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-red-500/20 text-red-400 border-red-500/30"
                                }`}>
                                {isActive ? "ACTIVE" : "EXPIRED"}
                            </div>
                        </div>

                        {/* Mid Section - Member Info */}
                        <div className="flex items-center gap-4 mt-2">
                            <div className="w-16 h-16 rounded-full bg-slate-200 border-2 border-secondary-gold flex items-center justify-center overflow-hidden">
                                <Building2 className="w-8 h-8 text-slate-400" />
                            </div>
                            <div>
                                <h2 className="text-white font-bold text-lg leading-tight mb-1">{companyName}</h2>
                                <p className="text-slate-300 text-xs">{memberName}</p>
                                <p className="text-secondary-gold text-xs mt-1">{sector}</p>
                            </div>
                        </div>

                        {/* Footer - ID & Expiry */}
                        <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2">
                            <div>
                                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Membership ID</p>
                                <p className="text-white font-mono font-bold font-lg tracking-widest">{membershipId}</p>
                            </div>
                            <div className="text-left">
                                <p className="text-slate-400 text-[10px] uppercase tracking-wider mb-0.5">Expires On</p>
                                <p className="text-white font-bold text-sm">{expiryDate}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200">
                    <div className="absolute inset-0 bg-slate-50 z-0"></div>

                    <div className="relative z-10 p-6 flex flex-col h-full items-center justify-center text-center">
                        <h3 className="text-primary-deep font-bold mb-4">Scan to Verify</h3>

                        <div className="bg-white p-2 rounded-xl shadow-inner border border-slate-100 mb-4">
                            <QRCodeSVG
                                value={`https://aleppo-chamber.com/verify/${membershipId}`}
                                size={120}
                                level="M"
                                fgColor="#1E3A5F"
                            />
                        </div>

                        <p className="text-xs text-slate-500 max-w-[200px]">
                            This digital card is property of Aleppo Chamber of Commerce.
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-primary-light text-xs font-medium">
                            <RotateCw className="w-3 h-3" />
                            Click to flip back
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
