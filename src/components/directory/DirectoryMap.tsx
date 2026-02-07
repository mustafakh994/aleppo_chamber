"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import Link from "next/link";
import { Building2, MapPin, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon in Next.js
const customIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const verifiedIcon = new Icon({
    iconUrl: "data:image/svg+xml;base64," + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#C9A227" width="32" height="32">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
    `),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

export interface CompanyMapData {
    id: number;
    name: string;
    sector: string;
    location: string;
    lat: number;
    lng: number;
    isVerified?: boolean;
    rating?: number;
}

interface DirectoryMapProps {
    companies: CompanyMapData[];
    center?: LatLngExpression;
    zoom?: number;
}

export function DirectoryMap({
    companies,
    center = [36.2, 37.13], // Aleppo coordinates
    zoom = 12
}: DirectoryMapProps) {
    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <MapContainer
                center={center}
                zoom={zoom}
                className="w-full h-full"
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {companies.map((company) => (
                    <Marker
                        key={company.id}
                        position={[company.lat, company.lng]}
                        icon={company.isVerified ? verifiedIcon : customIcon}
                    >
                        <Popup className="company-popup">
                            <div className="p-2 min-w-[200px]">
                                <div className="flex items-start gap-2 mb-2">
                                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Building2 className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-deep text-sm leading-tight">
                                            {company.name}
                                        </h3>
                                        <span className="text-xs text-secondary-gold">{company.sector}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                                    <MapPin className="w-3 h-3" />
                                    <span className="truncate">{company.location}</span>
                                </div>

                                <div className="flex items-center justify-between">
                                    {company.isVerified && (
                                        <div className="flex items-center gap-1 text-xs text-green-600">
                                            <CheckCircle className="w-3 h-3" />
                                            <span>موثق</span>
                                        </div>
                                    )}
                                    {company.rating && (
                                        <div className="flex items-center gap-1 text-xs text-amber-500">
                                            <Star className="w-3 h-3 fill-amber-400" />
                                            <span>{company.rating}</span>
                                        </div>
                                    )}
                                </div>

                                <Link href={`/directory/${company.id}`} className="block mt-3">
                                    <Button size="sm" className="w-full text-xs">
                                        عرض الملف الكامل
                                    </Button>
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
