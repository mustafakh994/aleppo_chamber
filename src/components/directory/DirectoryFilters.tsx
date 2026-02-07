"use client";

import { cn } from "@/lib/utils";
import { MapPin, Filter, CheckCircle2, Building, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Switch } from "@/components/ui/Switch";

const sectors = [
    { id: "industrial", label: "القطاع الصناعي", count: 120 },
    { id: "commercial", label: "القطاع التجاري", count: 450 },
    { id: "logistics", label: "الشحن واللوجستيات", count: 85 },
    { id: "construction", label: "الإنشاءات والمقاولات", count: 60 },
    { id: "textile", label: "صناعة النسيج", count: 200 },
    { id: "food", label: "الصناعات الغذائية", count: 150 },
    { id: "tech", label: "تكنولوجيا المعلومات", count: 45 },
];

const locations = [
    "المنطقة الصناعية - الشيخ نجار",
    "المنطقة الصناعية - العرقوب",
    "المدينة القديمة",
    "وسط البلد",
    "الراموسة",
    "حلب الجديدة",
    "الجميلية",
];

const companySizes = [
    { id: "small", label: "صغيرة (1-10 موظف)", count: 320 },
    { id: "medium", label: "متوسطة (11-50 موظف)", count: 180 },
    { id: "large", label: "كبيرة (51+ موظف)", count: 75 },
];

const ratingOptions = [
    { value: 4, label: "4+ نجوم" },
    { value: 3, label: "3+ نجوم" },
    { value: 2, label: "2+ نجوم" },
];

export interface FilterState {
    onlyVerified: boolean;
    sectors: string[];
    locations: string[];
    sizes: string[];
    minRating: number;
}

interface DirectoryFiltersProps {
    filters: FilterState;
    onFiltersChange: (filters: FilterState) => void;
}

export function DirectoryFilters({ filters, onFiltersChange }: DirectoryFiltersProps) {
    const handleSectorChange = (sectorId: string, checked: boolean) => {
        const newSectors = checked
            ? [...filters.sectors, sectorId]
            : filters.sectors.filter((s) => s !== sectorId);
        onFiltersChange({ ...filters, sectors: newSectors });
    };

    const handleLocationChange = (location: string, checked: boolean) => {
        const newLocations = checked
            ? [...filters.locations, location]
            : filters.locations.filter((l) => l !== location);
        onFiltersChange({ ...filters, locations: newLocations });
    };

    const handleSizeChange = (sizeId: string, checked: boolean) => {
        const newSizes = checked
            ? [...filters.sizes, sizeId]
            : filters.sizes.filter((s) => s !== sizeId);
        onFiltersChange({ ...filters, sizes: newSizes });
    };

    const handleReset = () => {
        onFiltersChange({
            onlyVerified: false,
            sectors: [],
            locations: [],
            sizes: [],
            minRating: 0,
        });
    };

    const activeFiltersCount =
        (filters.onlyVerified ? 1 : 0) +
        filters.sectors.length +
        filters.locations.length +
        filters.sizes.length +
        (filters.minRating > 0 ? 1 : 0);

    return (
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-6 bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-fit top-24 sticky">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-secondary-gold" />
                    <h3 className="font-bold text-lg text-primary-deep">تصفية النتائج</h3>
                </div>
                {activeFiltersCount > 0 && (
                    <span className="bg-secondary-gold text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {activeFiltersCount}
                    </span>
                )}
            </div>

            {/* Verified Only Switch */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-slate-700">شركات موثقة فقط</span>
                </div>
                <Switch
                    checked={filters.onlyVerified}
                    onCheckedChange={(checked) =>
                        onFiltersChange({ ...filters, onlyVerified: checked })
                    }
                />
            </div>

            {/* Company Size */}
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-slate-800 text-sm">حجم الشركة</h4>
                </div>
                <div className="space-y-2">
                    {companySizes.map((size) => (
                        <label
                            key={size.id}
                            className="flex items-center justify-between gap-3 text-sm text-slate-600 hover:text-primary-deep cursor-pointer group"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={filters.sizes.includes(size.id)}
                                    onChange={(e) => handleSizeChange(size.id, e.target.checked)}
                                    className="rounded border-slate-300 text-primary-deep focus:ring-secondary-gold"
                                />
                                <span className="group-hover:translate-x-1 transition-transform">
                                    {size.label}
                                </span>
                            </div>
                            <span className="bg-slate-100 px-2 py-0.5 rounded-full text-xs text-slate-400 group-hover:bg-primary-deep group-hover:text-white transition-colors">
                                {size.count}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Min Rating */}
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-slate-400" />
                    <h4 className="font-bold text-slate-800 text-sm">الحد الأدنى للتقييم</h4>
                </div>
                <select
                    value={filters.minRating}
                    onChange={(e) =>
                        onFiltersChange({ ...filters, minRating: Number(e.target.value) })
                    }
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary-gold cursor-pointer"
                >
                    <option value={0}>الكل</option>
                    {ratingOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Sectors */}
            <div className="space-y-3">
                <h4 className="font-bold text-slate-800 text-sm">التصنيف القطاعي</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {sectors.map((sector) => (
                        <label
                            key={sector.id}
                            className="flex items-center justify-between gap-3 text-sm text-slate-600 hover:text-primary-deep cursor-pointer group"
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={filters.sectors.includes(sector.id)}
                                    onChange={(e) => handleSectorChange(sector.id, e.target.checked)}
                                    className="rounded border-slate-300 text-primary-deep focus:ring-secondary-gold"
                                />
                                <span className="group-hover:translate-x-1 transition-transform">
                                    {sector.label}
                                </span>
                            </div>
                            <span className="bg-slate-100 px-2 py-0.5 rounded-full text-xs text-slate-400 group-hover:bg-primary-deep group-hover:text-white transition-colors">
                                {sector.count}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Location */}
            <div className="space-y-3">
                <h4 className="font-bold text-slate-800 text-sm">الموقع الجغرافي</h4>
                <div className="relative mb-2">
                    <MapPin className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="ابحث عن منطقة..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pr-9 pl-3 py-2 text-sm focus:outline-none focus:border-secondary-gold transition-colors"
                    />
                </div>
                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                    {locations.map((loc) => (
                        <label
                            key={loc}
                            className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-deep cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                checked={filters.locations.includes(loc)}
                                onChange={(e) => handleLocationChange(loc, e.target.checked)}
                                className="rounded border-slate-300 text-primary-deep focus:ring-secondary-gold"
                            />
                            <span>{loc}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Reset Filters */}
            <Button
                variant="ghost"
                className="w-full text-slate-400 hover:text-red-500 hover:bg-red-50"
                onClick={handleReset}
                disabled={activeFiltersCount === 0}
            >
                إعادة تعيين الفلاتر
            </Button>
        </aside>
    );
}
