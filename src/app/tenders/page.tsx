import { PageHeader } from "@/components/layout/PageHeader";
import { TenderCard } from "@/components/tenders/TenderCard";
import { tenders } from "@/lib/data/tenders";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function TendersPage() {
    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="المناقصات والمزادات"
                subtitle="بوابة الفرص والعقود الحكومية والخاصة في حلب"
                backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-lg text-primary-deep flex items-center gap-2">
                                    <Filter className="w-5 h-5" />
                                    تصفية النتائج
                                </h3>
                                <button className="text-xs text-red-500 font-bold hover:underline">مسح الكل</button>
                            </div>

                            <div className="space-y-6">
                                {/* Search */}
                                <div className="relative">
                                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="بحث برقم المناقصة..."
                                        className="w-full pr-9 pl-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-secondary-gold transition-colors"
                                    />
                                </div>

                                {/* Type Filter */}
                                <div>
                                    <h4 className="font-bold text-sm text-slate-700 mb-3">نوع الفرصة</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" className="rounded border-slate-300 text-secondary-gold focus:ring-secondary-gold" />
                                            <span className="text-sm text-slate-600 group-hover:text-primary-deep transition-colors">مناقصات عامة</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" className="rounded border-slate-300 text-secondary-gold focus:ring-secondary-gold" />
                                            <span className="text-sm text-slate-600 group-hover:text-primary-deep transition-colors">مزادات علنية</span>
                                        </label>
                                    </div>
                                </div>

                                {/* Sector Filter */}
                                <div>
                                    <h4 className="font-bold text-sm text-slate-700 mb-3">القطاع</h4>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" className="rounded border-slate-300 text-secondary-gold focus:ring-secondary-gold" />
                                            <span className="text-sm text-slate-600 group-hover:text-primary-deep transition-colors">تعهدت إنشائية</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" className="rounded border-slate-300 text-secondary-gold focus:ring-secondary-gold" />
                                            <span className="text-sm text-slate-600 group-hover:text-primary-deep transition-colors">توريدات ومستلزمات</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" className="rounded border-slate-300 text-secondary-gold focus:ring-secondary-gold" />
                                            <span className="text-sm text-slate-600 group-hover:text-primary-deep transition-colors">خدمات تقنية</span>
                                        </label>
                                    </div>
                                </div>

                                <Button className="w-full bg-primary-deep text-white hover:bg-primary-deep/90 mt-4">
                                    تطبيق
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-primary-deep font-arabic-heading">
                                أحدث المناقصات <span className="text-slate-400 text-sm font-normal mr-2">({tenders.length} فرصة متاحة)</span>
                            </h2>
                            <select className="bg-transparent font-bold text-primary-deep border-none focus:ring-0 cursor-pointer text-sm">
                                <option>الأقرب لانتهاء الموعد</option>
                                <option>الأحدث نشراً</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tenders.map((tender) => (
                                <TenderCard key={tender.id} tender={tender} />
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <Button variant="outline" className="min-w-[200px] border-slate-200 hover:border-secondary-gold hover:text-secondary-gold">
                                تحميل المزيد
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
