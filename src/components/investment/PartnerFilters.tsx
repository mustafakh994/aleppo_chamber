import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/Input";
import { Search, Filter, RefreshCw } from "lucide-react";

export function PartnerFilters() {
    return (
        <div className="space-y-6 sticky top-24">
            {/* Search */}
            <div className="relative">
                <Input
                    icon={<Search className="w-4 h-4" />}
                    placeholder="ابحث عن فرصة..."
                    className="bg-white shadow-sm border-slate-200"
                />
            </div>

            <GlassCard className="bg-white border-slate-100 shadow-lg p-5">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-primary-deep flex items-center gap-2">
                        <Filter className="w-4 h-4 text-secondary-gold" />
                        تصفية النتائج
                    </h3>
                    <button className="text-xs text-slate-400 hover:text-secondary-gold transition-colors flex items-center gap-1">
                        <RefreshCw className="w-3 h-3" />
                        إعادة تعيين
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Sector Filter */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-700 mb-3">القطاع الاقتصادي</h4>
                        <div className="space-y-2">
                            {["صناعة النسيج", "الصناعات الغذائية", "الطاقة البديلة", "التكنولوجيا", "الإنشاءات"].map((sector, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer w-4 h-4 border-2 border-slate-300 rounded checked:bg-secondary-gold checked:border-secondary-gold transition-colors focus:ring-0" />
                                    </div>
                                    <span className="text-sm text-slate-600 group-hover:text-primary-deep transition-colors">{sector}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-slate-100"></div>

                    {/* Investment Type */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-700 mb-3">نوع الفرصة</h4>
                        <div className="space-y-2">
                            {["شراكة استراتيجية", "تمويل", "استحواذ", "امتياز تجاري"].map((type, i) => (
                                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="radio" name="inv_type" className="peer w-4 h-4 border-2 border-slate-300 rounded-full checked:bg-secondary-gold checked:border-secondary-gold transition-colors focus:ring-0" />
                                    </div>
                                    <span className="text-sm text-slate-600 group-hover:text-primary-deep transition-colors">{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-slate-100"></div>

                    {/* Capital Range */}
                    <div>
                        <h4 className="text-sm font-bold text-slate-700 mb-3">حجم الاستثمار</h4>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-mono text-slate-500">$50k</span>
                            <input type="range" className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-secondary-gold" />
                            <span className="text-xs font-mono text-slate-500">$5M+</span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                    <Button className="w-full">تطبيق الفلاتر</Button>
                </div>
            </GlassCard>

            {/* Quick Stats/Ad maybe */}
            <div className="bg-primary-deep rounded-xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="font-bold mb-2">هل تبحث عن تمويل؟</h4>
                    <p className="text-xs text-slate-300 mb-4">نساعدك في إعداد دراسة الجدوى والوصول للمستثمرين.</p>
                    <Button size="sm" variant="secondary" className="w-full bg-white/10 hover:bg-white/20 text-white border-0">أضف فرصتك مجاناً</Button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-gold/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            </div>
        </div>
    );
}
