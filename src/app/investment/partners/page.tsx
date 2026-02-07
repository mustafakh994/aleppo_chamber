import { PageHeader } from "@/components/layout/PageHeader";
import { PartnerCard, PartnerOpportunity } from "@/components/investment/PartnerCard";
import { PartnerFilters } from "@/components/investment/PartnerFilters";

import { opportunities } from "@/lib/data/opportunities";

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="البحث عن شريك"
                subtitle="منصة ربط المستثمرين وأصحاب المشاريع في حلب"
                backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:col-span-1">
                        <PartnerFilters />
                    </div>

                    {/* Results Grid */}
                    <div className="lg:col-span-3">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-primary-deep font-arabic-heading">
                                الفرص المتاحة <span className="text-slate-400 text-sm font-normal mr-2">({opportunities.length} فرصة)</span>
                            </h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span>ترتيب حسب:</span>
                                <select className="bg-transparent font-bold text-primary-deep border-none focus:ring-0 cursor-pointer">
                                    <option>الأحدث</option>
                                    <option>الأعلى رأس مال</option>
                                    <option>الأكثر اكتمالاً</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {opportunities.map((opp) => (
                                <PartnerCard key={opp.id} opportunity={opp} />
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <button className="px-8 py-3 bg-white border border-slate-200 text-primary-deep font-bold rounded-xl hover:bg-slate-50 hover:border-secondary-gold/50 transition-all shadow-sm">
                                تحميل المزيد من الفرص
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
