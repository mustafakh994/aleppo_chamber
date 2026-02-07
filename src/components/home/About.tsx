import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const timeline = [
    { year: "1885", title: "التأسيس", desc: "تأسيس غرفة تجارة حلب كأول مؤسسة اقتصادية." },
    { year: "1950", title: "التطور الذهبي", desc: "توسع النشاط التجاري وبناء المقر الحالي." },
    { year: "2026", title: "إعادة الإعمار", desc: "قيادة التحول الرقمي واقتصاد المستقبل." },
];

export function About() {
    return (
        <section className="py-20 relative bg-bg-surface overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary-deep fill-current">
                    <defs>
                        <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M10,0 L12,8 L20,10 L12,12 L10,20 L8,12 L0,10 L8,8 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image / Pattern Area (40%) */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549141042-32aaff8f615f?q=80&w=1887&auto=format&fit=crop')" }}>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <div className="text-6xl font-bold font-arabic-heading text-secondary-gold mb-2">141</div>
                                <div className="text-xl font-medium">عاماً من الريادة</div>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <GlassCard className="absolute -bottom-6 -left-6 md:-left-12 max-w-xs animate-bounce-slow hidden md:block border-secondary-gold/30">
                            <p className="text-primary-deep font-bold text-lg leading-tight">
                                "حلب.. عاصمة التجارة وقبلة المستثمرين"
                            </p>
                        </GlassCard>
                    </div>

                    {/* Content Area (60%) */}
                    <div className="w-full lg:w-7/12">
                        <SectionHeading
                            title="عن غرفة تجارة حلب"
                            subtitle="تاريخ عريق ومستقبل مشرق"
                        />

                        <p className="text-slate-600 text-lg leading-relaxed mb-12 font-arabic-body">
                            تعتبر غرفة تجارة حلب من أعرق الغرف التجارية في العالم العربي والمنطقة.
                            منذ تأسيسها، لعبت دوراً محورياً في تعزيز الحركة التجارية وحماية مصالح التجار،
                            وتعمل اليوم برؤية متجددة تجمع بين أصالة التاريخ وتقنيات المستقبل لخدمة الاقتصاد الوطني.
                        </p>

                        {/* Timeline */}
                        <div className="relative border-r-2 border-slate-200 rtl:border-r-2 ltr:border-l-2 ltr:border-r-0 mr-4 ltr:ml-4 ltr:mr-0 space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pr-8 ltr:pl-8 ltr:pr-0">
                                    <div className="absolute -right-[9px] ltr:-left-[9px] top-1 w-4 h-4 bg-secondary-gold rounded-full border-4 border-white shadow-sm"></div>
                                    <h4 className="text-2xl font-bold text-primary-deep font-arabic-heading">{item.year}</h4>
                                    <h5 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h5>
                                    <p className="text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
