"use client";

import { cn } from "@/lib/utils";
import { Search, MapPin, Filter, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";
import { useState } from "react";

const sectors = [
    { id: "industrial", label: "القطاع الصناعي", count: 120 },
    { id: "commercial", label: "القطاع التجاري", count: 450 },
    { id: "logistics", label: "الشحن واللوجستيات", count: 85 },
    { id: "construction", label: "الإنشاءات والمقاولات", count: 60 },
    { id: "textile", label: "صناعة النسيج", count: 200 },
];

const locations = [
    "المنطقة الصناعية - الشيخ نجار",
    "المنطقة الصناعية - العرقوب",
    "المدينة القديمة",
    "وسط البلد",
    "الراموسة",
];

export function DirectoryFilters() {
    const [onlyVerified, setOnlyVerified] = useState(false);

    return (
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-8 bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-fit top-24 sticky">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                <Filter className="w-5 h-5 text-secondary-gold" />
                <h3 className="font-bold text-lg text-primary-deep">تصفية النتائج</h3>
            </div>

            {/* Verified Only Switch */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-slate-700">شركات موثقة فقط</span>
                </div>
                <Switch checked={onlyVerified} onCheckedChange={setOnlyVerified} />
            </div>

            {/* Sectors */}
            <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm">التصنيف القطاعي</h4>
                <div className="space-y-2">
                    {sectors.map((sector) => (
                        <label key={sector.id} className="flex items-center justify-between gap-3 text-sm text-slate-600 hover:text-primary-deep cursor-pointer group">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="rounded border-slate-300 text-primary-deep focus:ring-secondary-gold" />
                                <span className="group-hover:translate-x-1 transition-transform">{sector.label}</span>
                            </div>
                            <span className="bg-slate-100 px-2 py-0.5 rounded-full text-xs text-slate-400 group-hover:bg-primary-deep group-hover:text-white transition-colors">{sector.count}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm">الموقع الجغرافي</h4>
                <div className="relative">
                    <MapPin className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="ابحث عن منطقة..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pr-9 pl-3 py-2 text-sm focus:outline-none focus:border-secondary-gold transition-colors"
                    />
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                    {locations.map((loc, i) => (
                        <label key={i} className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-deep cursor-pointer">
                            <input type="checkbox" className="rounded border-slate-300 text-primary-deep focus:ring-secondary-gold" />
                            <span>{loc}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Reset Filters */}
            <Button variant="ghost" className="w-full text-slate-400 hover:text-red-500 hover:bg-red-50">
                إعادة تعيين الفلاتر
            </Button>
        </aside>
    );
}
