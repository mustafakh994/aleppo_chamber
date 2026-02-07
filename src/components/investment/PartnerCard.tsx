import { Button } from "@/components/ui/Button";
import { MapPin, TrendingUp, DollarSign, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface PartnerOpportunity {
    id: string;
    title: string;
    description: string;
    location: string;
    type: "partnership" | "investment" | "acquisition" | "franchise";
    industry: "textile" | "food" | "energy" | "tech" | "construction";
    capital: string;
    minInvestment: string;
    progress: number;
    image: string;
    tags: string[];
    datePosted: string;
}

interface PartnerCardProps {
    opportunity: PartnerOpportunity;
}

const typeConfig = {
    partnership: { label: "شراكة استراتيجية", color: "bg-blue-50 text-blue-700", border: "border-blue-100" },
    investment: { label: "فرصة استثمارية", color: "bg-green-50 text-green-700", border: "border-green-100" },
    acquisition: { label: "استحواذ كامل", color: "bg-purple-50 text-purple-700", border: "border-purple-100" },
    franchise: { label: "امتياز تجاري", color: "bg-orange-50 text-orange-700", border: "border-orange-100" },
};

const industryIcons = {
    textile: <TrendingUp className="w-4 h-4" />,
    food: <Building2 className="w-4 h-4" />,
    energy: <TrendingUp className="w-4 h-4" />, // Placeholder
    tech: <TrendingUp className="w-4 h-4" />, // Placeholder
    construction: <Building2 className="w-4 h-4" />, // Placeholder
};

export function PartnerCard({ opportunity }: PartnerCardProps) {
    const typeStyle = typeConfig[opportunity.type] || typeConfig.investment;

    return (
        <div className="group bg-white rounded-2xl border border-slate-100 hover:border-secondary-gold/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
            {/* Image Header */}
            <div className="h-48 overflow-hidden relative">
                <img
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border ${typeStyle.color} ${typeStyle.border} bg-white/90 backdrop-blur-sm`}>
                    {typeStyle.label}
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-sm bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg">
                        <MapPin className="w-3 h-3 text-secondary-gold" />
                        <span>{opportunity.location}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">{opportunity.datePosted}</span>
                        <span>•</span>
                        <span className="uppercase tracking-wider">{opportunity.industry}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-deep leading-tight group-hover:text-secondary-gold transition-colors mb-2">
                        {opportunity.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2">
                        {opportunity.description}
                    </p>
                </div>

                {/* Financials highlight */}
                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <p className="text-xs text-slate-400 mb-1">رأس المال المطلوب</p>
                            <p className="text-lg font-bold text-primary-deep font-mono tracking-tight">{opportunity.capital}</p>
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-slate-400 mb-1">الحد الأدنى</p>
                            <p className="text-sm font-bold text-slate-700 font-mono">{opportunity.minInvestment}</p>
                        </div>
                    </div>
                    {/* Progress Bar (Simulated funding progress) */}
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-secondary-gold h-full rounded-full"
                            style={{ width: `${opportunity.progress}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-slate-400">تم جمع {opportunity.progress}%</span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-primary-deep">التفاصيل الكاملة</span>
                    <Link href={`/investment/partners/${opportunity.id}`}>
                        <Button size="sm" variant="ghost" className="text-secondary-gold hover:text-secondary-light p-0 hover:bg-transparent flex gap-1">
                            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
