"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { X, Download, Share2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CompanyData {
    name: string;
    sector: string;
    location: string;
    phone: string;
    email?: string;
    website?: string;
}

interface QRBusinessCardProps {
    company: CompanyData;
    companyId: number;
}

export function QRBusinessCard({ company, companyId }: QRBusinessCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Generate vCard format data
    const generateVCard = () => {
        return `BEGIN:VCARD
VERSION:3.0
FN:${company.name}
ORG:${company.name}
TEL:${company.phone}
${company.email ? `EMAIL:${company.email}` : ""}
${company.website ? `URL:${company.website}` : ""}
ADR:;;${company.location};;;Syria
NOTE:${company.sector}
END:VCARD`;
    };

    // Generate URL for company page
    const companyUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/directory/${companyId}`;

    const handleDownload = () => {
        const svg = document.getElementById("qr-code-svg");
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = 300;
            canvas.height = 300;
            if (ctx) {
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, 300, 300);
            }

            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = `${company.name}-qr.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };

        img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: company.name,
                    text: `${company.name} - ${company.sector}`,
                    url: companyUrl,
                });
            } catch (err) {
                console.log("Error sharing:", err);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(companyUrl);
            alert("تم نسخ الرابط!");
        }
    };

    return (
        <>
            {/* Trigger Button */}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="text-slate-400 hover:text-primary-deep hover:bg-slate-100"
                title="مشاركة بطاقة QR"
            >
                <QrCode className="w-5 h-5" />
            </Button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-in zoom-in-95">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 left-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-slate-400" />
                        </button>

                        {/* Header */}
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-primary-deep mb-1">
                                {company.name}
                            </h3>
                            <p className="text-sm text-secondary-gold">{company.sector}</p>
                        </div>

                        {/* QR Code */}
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-white rounded-xl border-2 border-slate-100 shadow-inner">
                                <QRCodeSVG
                                    id="qr-code-svg"
                                    value={companyUrl}
                                    size={200}
                                    level="H"
                                    includeMargin={true}
                                    fgColor="#1E3A5F"
                                    bgColor="#FFFFFF"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <p className="text-center text-xs text-slate-400 mb-6">
                            امسح الرمز للوصول السريع لملف الشركة
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={handleDownload}
                            >
                                <Download className="w-4 h-4 ml-2" />
                                تحميل
                            </Button>
                            <Button
                                variant="primary"
                                className="flex-1"
                                onClick={handleShare}
                            >
                                <Share2 className="w-4 h-4 ml-2" />
                                مشاركة
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Exportable QR display for company detail page
export function QRCodeDisplay({ companyId, companyName }: { companyId: number; companyName: string }) {
    const companyUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/directory/${companyId}`;

    return (
        <div className="bg-white rounded-xl border border-slate-100 p-6 text-center">
            <h3 className="font-bold text-primary-deep mb-4">رمز QR سريع</h3>
            <div className="flex justify-center mb-4">
                <div className="p-3 bg-slate-50 rounded-lg">
                    <QRCodeSVG
                        value={companyUrl}
                        size={120}
                        level="M"
                        fgColor="#1E3A5F"
                        bgColor="#F8FAFC"
                    />
                </div>
            </div>
            <p className="text-xs text-slate-400">
                امسح للوصول السريع
            </p>
        </div>
    );
}
