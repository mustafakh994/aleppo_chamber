"use client";

import { MapPin, Phone, Building2, CheckCircle, ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { QRBusinessCard } from "./QRBusinessCard";

export interface CompanyCardProps {
    id: number;
    name: string;
    description: string;
    logo?: string;
    sector: string;
    sectorId?: string;
    location: string;
    phone: string;
    email?: string;
    website?: string;
    isVerified?: boolean;
    rating?: number;
    size?: "small" | "medium" | "large";
    lat?: number;
    lng?: number;
}

export function CompanyCard({
    id,
    name,
    description,
    sector,
    location,
    phone,
    email,
    website,
    isVerified,
    rating
}: CompanyCardProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 hover:border-secondary-gold hover:shadow-lg transition-all group flex flex-col h-full overflow-hidden">
            {/* Header / Banner */}
            <div className="h-24 bg-gradient-to-br from-slate-50 to-slate-100 relative">
                <div className="absolute top-4 left-4 flex gap-2">
                    {isVerified && (
                        <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1 shadow-sm text-xs font-bold text-green-700 border border-green-100">
                            <CheckCircle className="w-3 h-3 fill-green-100" />
                            موثق
                        </div>
                    )}
                </div>
                {/* QR Button */}
                <div className="absolute top-4 right-4">
                    <QRBusinessCard
                        company={{ name, sector, location, phone, email, website }}
                        companyId={id}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 pt-0 flex-1 flex flex-col relative">
                {/* Logo wrapper */}
                <div className="w-20 h-20 bg-white rounded-xl border-4 border-white shadow-md flex items-center justify-center -mt-10 mb-4 text-slate-300 relative z-10 group-hover:scale-110 transition-transform">
                    <Building2 className="w-10 h-10" />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-xs font-bold text-secondary-gold uppercase tracking-wider mb-1 block">{sector}</span>
                            <h3 className="font-bold text-lg text-primary-deep mb-2 group-hover:text-primary-light transition-colors line-clamp-1">{name}</h3>
                        </div>
                        {rating && (
                            <div className="flex items-center gap-1 text-amber-400 text-sm font-bold bg-amber-50 px-2 py-1 rounded-lg">
                                <Star className="w-3 h-3 fill-amber-400" />
                                {rating}
                            </div>
                        )}
                    </div>

                    <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">
                        {description}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                            <span className="truncate">{location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                            <span dir="ltr">{phone}</span>
                        </div>
                    </div>
                </div>

                {/* Action */}
                <div className="mt-6 pt-2">
                    <Link href={`/directory/${id}`} className="block">
                        <Button variant="outline" className="w-full group-hover:bg-primary-deep group-hover:text-white group-hover:border-primary-deep transition-all">
                            عرض الملف
                            <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
