"use client";

import { useState, useMemo, Suspense } from "react";
import dynamic from "next/dynamic";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search, SlidersHorizontal, LayoutGrid, Map } from "lucide-react";
import { DirectoryFilters, FilterState } from "@/components/directory/DirectoryFilters";
import { CompanyCard, CompanyCardProps } from "@/components/directory/CompanyCard";

// Dynamic import for map to avoid SSR issues with Leaflet
const DirectoryMap = dynamic(
    () => import("@/components/directory/DirectoryMap").then((mod) => mod.DirectoryMap),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-[500px] rounded-xl bg-slate-100 animate-pulse flex items-center justify-center">
                <Map className="w-12 h-12 text-slate-300" />
            </div>
        )
    }
);

// Extended company data with coordinates and size
const companies: CompanyCardProps[] = [
    {
        id: 1,
        name: "شركة النسيج العصرية",
        description: "رائدة في صناعة النسيج والأقمشة القطنية بجودة عالية وتصدير عالمي. لدينا خطوط إنتاج حديثة لتلبية اجتياجات السوق المحلية والعالمية.",
        sector: "صناعة النسيج",
        sectorId: "textile",
        location: "المنطقة الصناعية - الشيخ نجار",
        phone: "+963 21 444 5555",
        email: "info@modern-textile.sy",
        website: "www.modern-textile.sy",
        isVerified: true,
        rating: 4.8,
        size: "large",
        lat: 36.2534,
        lng: 37.0872,
    },
    {
        id: 2,
        name: "مجموعة الشهباء التجارية",
        description: "استيراد وتصدير المواد الغذائية والتموينية، وكلاء حصريون للعديد من العلامات التجارية العالمية في الشرق الأوسط.",
        sector: "القطاع التجاري",
        sectorId: "commercial",
        location: "وسط البلد - شارع القوتلي",
        phone: "+963 21 222 3333",
        email: "info@shahba-group.sy",
        isVerified: true,
        rating: 4.5,
        size: "medium",
        lat: 36.2013,
        lng: 37.1572,
    },
    {
        id: 3,
        name: "شركة البناء المتين",
        description: "مقاولات عامة وإنشاءات، متخصصون في الأبراج السكنية والمراكز التجارية. نلتزم بأعلى معايير السلامة والجودة.",
        sector: "الإنشاءات",
        sectorId: "construction",
        location: "حلب الجديدة",
        phone: "+963 21 666 7777",
        isVerified: false,
        rating: 4.0,
        size: "large",
        lat: 36.1856,
        lng: 37.1423,
    },
    {
        id: 4,
        name: "حلب للوجستيات",
        description: "خدمات شحن ونقل بري وجوي، تخليص جمركي وحلول لوجستية متكاملة للشركات والمصانع.",
        sector: "الشحن واللوجستيات",
        sectorId: "logistics",
        location: "الراموسة",
        phone: "+963 21 888 9999",
        email: "logistics@aleppo-log.sy",
        isVerified: true,
        rating: 4.9,
        size: "medium",
        lat: 36.1789,
        lng: 37.1234,
    },
    {
        id: 5,
        name: "معمل الزيوت الذهبية",
        description: "إنتاج وتكرير زيوت الطعام النباتية بأحدث التقنيات. منتجاتنا خالية من الكوليسترول ومطابقة للمواصفات القياسية.",
        sector: "الصناعات الغذائية",
        sectorId: "food",
        location: "المنطقة الصناعية - الشيخ نجار",
        phone: "+963 21 123 4567",
        isVerified: true,
        rating: 4.7,
        size: "large",
        lat: 36.2612,
        lng: 37.0934,
    },
    {
        id: 6,
        name: "مؤسسة التقنية الحديثة",
        description: "حلول برمجية وأنظمة أتمتة للمصانع والشركات. تصميم مواقع وتطبيقات موبايل.",
        sector: "تكنولوجيا المعلومات",
        sectorId: "tech",
        location: "الجميلية",
        phone: "+963 21 987 6543",
        email: "info@modern-tech.sy",
        website: "www.modern-tech.sy",
        isVerified: false,
        rating: 4.2,
        size: "small",
        lat: 36.2145,
        lng: 37.1456,
    },
    {
        id: 7,
        name: "شركة الأمل للملابس الجاهزة",
        description: "تصميم وتصنيع ملابس جاهزة للسوق المحلي والتصدير. نوفر أحدث صيحات الموضة بأسعار تنافسية.",
        sector: "صناعة النسيج",
        sectorId: "textile",
        location: "المنطقة الصناعية - العرقوب",
        phone: "+963 21 555 6666",
        isVerified: true,
        rating: 4.3,
        size: "medium",
        lat: 36.2234,
        lng: 37.1678,
    },
    {
        id: 8,
        name: "مطاحن حلب الكبرى",
        description: "طحن الحبوب وإنتاج الطحين بأعلى المعايير. نخدم قطاع المخابز والمعجنات في جميع أنحاء سوريا.",
        sector: "الصناعات الغذائية",
        sectorId: "food",
        location: "المدينة الصناعية - الشيخ نجار",
        phone: "+963 21 777 8888",
        email: "mills@aleppo-mills.sy",
        isVerified: true,
        rating: 4.6,
        size: "large",
        lat: 36.2478,
        lng: 37.0756,
    },
];

export default function DirectoryPage() {
    const [viewMode, setViewMode] = useState<"grid" | "map">("grid");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState<"newest" | "rating" | "alpha">("newest");
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [filters, setFilters] = useState<FilterState>({
        onlyVerified: false,
        sectors: [],
        locations: [],
        sizes: [],
        minRating: 0,
    });

    // Filter and sort companies
    const filteredCompanies = useMemo(() => {
        let result = companies.filter((company) => {
            // Search filter
            if (searchTerm) {
                const search = searchTerm.toLowerCase();
                if (
                    !company.name.toLowerCase().includes(search) &&
                    !company.description.toLowerCase().includes(search) &&
                    !company.sector.toLowerCase().includes(search)
                ) {
                    return false;
                }
            }

            // Verified filter
            if (filters.onlyVerified && !company.isVerified) {
                return false;
            }

            // Sector filter
            if (filters.sectors.length > 0 && company.sectorId && !filters.sectors.includes(company.sectorId)) {
                return false;
            }

            // Location filter
            if (filters.locations.length > 0 && !filters.locations.some((loc) => company.location.includes(loc))) {
                return false;
            }

            // Size filter
            if (filters.sizes.length > 0 && company.size && !filters.sizes.includes(company.size)) {
                return false;
            }

            // Rating filter
            if (filters.minRating > 0 && (!company.rating || company.rating < filters.minRating)) {
                return false;
            }

            return true;
        });

        // Sort
        switch (sortBy) {
            case "rating":
                result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            case "alpha":
                result.sort((a, b) => a.name.localeCompare(b.name, "ar"));
                break;
            case "newest":
            default:
                // Keep original order (assume it's by date)
                break;
        }

        return result;
    }, [searchTerm, filters, sortBy]);

    // Prepare data for map
    const mapCompanies = filteredCompanies
        .filter((c) => c.lat && c.lng)
        .map((c) => ({
            id: c.id,
            name: c.name,
            sector: c.sector,
            location: c.location,
            lat: c.lat!,
            lng: c.lng!,
            isVerified: c.isVerified,
            rating: c.rating,
        }));

    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="دليل الشركات"
                subtitle="الدليل الشامل للشركات التجارية والصناعية في حلب"
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Sidebar Filters - Desktop */}
                    <div className="hidden lg:block">
                        <DirectoryFilters filters={filters} onFiltersChange={setFilters} />
                    </div>

                    {/* Mobile Filters Drawer */}
                    {showMobileFilters && (
                        <div className="fixed inset-0 z-50 lg:hidden">
                            <div
                                className="absolute inset-0 bg-black/50"
                                onClick={() => setShowMobileFilters(false)}
                            />
                            <div className="absolute right-0 top-0 h-full w-80 bg-white overflow-y-auto">
                                <div className="p-4 border-b">
                                    <Button
                                        variant="ghost"
                                        onClick={() => setShowMobileFilters(false)}
                                        className="w-full"
                                    >
                                        إغلاق
                                    </Button>
                                </div>
                                <DirectoryFilters filters={filters} onFiltersChange={setFilters} />
                            </div>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="flex-1 w-full space-y-6">

                        {/* Search & Toolbar */}
                        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
                            <div className="relative flex-1 w-full">
                                <Search className="absolute right-3 top-3 w-5 h-5 text-slate-400" />
                                <Input
                                    className="pr-10 w-full"
                                    placeholder="ابحث عن اسم الشركة، النشاط، أو العلامة التجارية..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-2 w-full md:w-auto">
                                {/* View Toggle */}
                                <div className="hidden md:flex bg-slate-100 rounded-lg p-1">
                                    <Button
                                        variant={viewMode === "grid" ? "primary" : "ghost"}
                                        size="icon"
                                        onClick={() => setViewMode("grid")}
                                        className={viewMode === "grid" ? "" : "text-slate-500 hover:text-primary-deep"}
                                    >
                                        <LayoutGrid className="w-5 h-5" />
                                    </Button>
                                    <Button
                                        variant={viewMode === "map" ? "primary" : "ghost"}
                                        size="icon"
                                        onClick={() => setViewMode("map")}
                                        className={viewMode === "map" ? "" : "text-slate-500 hover:text-primary-deep"}
                                    >
                                        <Map className="w-5 h-5" />
                                    </Button>
                                </div>

                                {/* Mobile Filter Button */}
                                <Button
                                    className="md:hidden flex-1 flex gap-2"
                                    onClick={() => setShowMobileFilters(true)}
                                >
                                    <SlidersHorizontal className="w-4 h-4" />
                                    تصفية النتائج
                                </Button>

                                {/* Sort Dropdown */}
                                <select
                                    className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary-gold cursor-pointer"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                                >
                                    <option value="newest">الأحدث انضماماً</option>
                                    <option value="rating">الأعلى تقييماً</option>
                                    <option value="alpha">ترتيب أبجدي</option>
                                </select>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="flex justify-between items-center px-1">
                            <p className="text-slate-500 text-sm">
                                تم العثور على <span className="font-bold text-primary-deep">{filteredCompanies.length}</span> شركة
                            </p>

                            {/* Mobile View Toggle */}
                            <div className="flex md:hidden bg-slate-100 rounded-lg p-1">
                                <Button
                                    variant={viewMode === "grid" ? "primary" : "ghost"}
                                    size="sm"
                                    onClick={() => setViewMode("grid")}
                                    className={viewMode === "grid" ? "" : "text-slate-500"}
                                >
                                    <LayoutGrid className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant={viewMode === "map" ? "primary" : "ghost"}
                                    size="sm"
                                    onClick={() => setViewMode("map")}
                                    className={viewMode === "map" ? "" : "text-slate-500"}
                                >
                                    <Map className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Content Area */}
                        {viewMode === "grid" ? (
                            <>
                                {/* Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredCompanies.map((company) => (
                                        <CompanyCard key={company.id} {...company} />
                                    ))}
                                </div>

                                {filteredCompanies.length === 0 && (
                                    <div className="text-center py-16">
                                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Search className="w-10 h-10 text-slate-300" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-600 mb-2">لا توجد نتائج</h3>
                                        <p className="text-slate-400">جرب تعديل معايير البحث أو الفلترة</p>
                                    </div>
                                )}

                                {/* Pagination */}
                                {filteredCompanies.length > 0 && (
                                    <div className="flex justify-center mt-12">
                                        <div className="flex gap-2">
                                            <Button variant="outline" disabled>السابق</Button>
                                            <Button variant="primary" className="w-10 h-10 p-0">1</Button>
                                            <Button variant="outline" className="w-10 h-10 p-0">2</Button>
                                            <Button variant="outline" className="w-10 h-10 p-0">3</Button>
                                            <span className="flex items-center text-slate-400 px-2">...</span>
                                            <Button variant="outline">التالي</Button>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            /* Map View */
                            <Suspense fallback={
                                <div className="w-full h-[500px] rounded-xl bg-slate-100 animate-pulse flex items-center justify-center">
                                    <Map className="w-12 h-12 text-slate-300" />
                                </div>
                            }>
                                <DirectoryMap companies={mapCompanies} />
                            </Suspense>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
