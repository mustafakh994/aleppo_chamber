export function NewsTicker() {
    return (
        <section className="bg-secondary-gold py-3 overflow-hidden text-white border-y border-white/20">
            <div className="container mx-auto flex items-center gap-4">
                <div className="bg-white/20 px-3 py-1 rounded text-sm font-bold min-w-fit">
                    عاجل
                </div>
                <div className="flex-1 overflow-hidden relative h-6">
                    <div className="absolute top-0 right-0 py-0.5 whitespace-nowrap animate-marquee flex gap-12 text-sm font-medium">
                        <span>قرار جديد بخصوص رسوم الانتساب وتجديد الاشتراكات لعام 2026.</span>
                        <span>•</span>
                        <span>افتتاح معرض حلب الدولي للصناعات النسيجية بمشاركة 50 دولة.</span>
                        <span>•</span>
                        <span>مجلس الإدارة يعقد اجتماعه الدوري لمناقشة خطط التحول الرقمي.</span>
                        <span>•</span>
                        <span>دعوة لحضور ندوة "الاستثمار في الطاقة البديلة" يوم الخميس القادم.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
