import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/components/ui/Button";
import Link from "next/link";

const stats = [
    { value: "15,000+", label: "شركة مسجلة", color: "text-primary-deep", border: "border-primary-deep" },
    { value: "$2.5B", label: "حجم الاستثمار", color: "text-secondary-gold", border: "border-secondary-gold" },
    { value: "50,000+", label: "وظيفة متاحة", color: "text-accent-teal", border: "border-accent-teal" },
];

export function InvestmentHub() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Map Area */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] bg-slate-50 rounded-3xl p-8 border border-slate-100 flex items-center justify-center shadow-inner">
                        <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-sm z-10 border border-slate-100">
                            <h4 className="font-bold text-sm mb-3">المناطق الصناعية</h4>
                            <div className="flex flex-col gap-2 text-xs">
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-600"></div> الشيخ نجار</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-500"></div> الليرمون</div>
                                <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-teal-400"></div> الراموسة</div>
                            </div>
                        </div>

                        {/* Abstract Interactive Map Placeholder */}
                        <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-md">
                            <path d="M50,150 Q100,50 200,80 T350,150" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5" />
                            <path d="M80,250 Q150,200 250,220 T350,180" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5" />

                            {/* Sheikh Najjar */}
                            <g className="group cursor-pointer">
                                <path d="M220,40 L280,40 L300,90 L240,110 Z" className="fill-blue-100 stroke-blue-600 stroke-2 group-hover:fill-blue-200 transition-colors" />
                                <text x="260" y="80" textAnchor="middle" className="text-[10px] fill-blue-800 font-bold pointer-events-none">الشيخ نجار</text>
                            </g>

                            {/* Lairmoun */}
                            <g className="group cursor-pointer">
                                <path d="M80,80 L140,70 L160,120 L90,140 Z" className="fill-yellow-100 stroke-yellow-500 stroke-2 group-hover:fill-yellow-200 transition-colors" />
                                <text x="120" y="110" textAnchor="middle" className="text-[10px] fill-yellow-800 font-bold pointer-events-none">الليرمون</text>
                            </g>

                            {/* Ramousah */}
                            <g className="group cursor-pointer">
                                <path d="M120,180 L180,180 L190,230 L110,240 Z" className="fill-teal-100 stroke-teal-400 stroke-2 group-hover:fill-teal-200 transition-colors" />
                                <text x="150" y="215" textAnchor="middle" className="text-[10px] fill-teal-800 font-bold pointer-events-none">الراموسة</text>
                            </g>
                        </svg>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-1/2">
                        <SectionHeading title="مركز الاستثمار" subtitle="Investment Hub" />
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-arabic-body">
                            توفر حلب بيئة استثمارية واعدة من خلال مدنها الصناعية المتطورة وتشريعاتها المرنة.
                            اكتشف الفرص المتاحة في المدن الصناعية الكبرى والمناطق الحرفية.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <GlassCard key={i} className={cn("bg-white text-center border-t-4 shadow-sm hover:shadow-lg transition-shadow", stat.border)}>
                                    <div className={cn("text-3xl lg:text-4xl font-bold font-arabic-heading mb-2", stat.color)}>
                                        {stat.value}
                                    </div>
                                    <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                                </GlassCard>
                            ))}

                            {/* CTA Card */}
                            <Link href="/investment/partners" className="group block">
                                <GlassCard className="bg-primary-deep text-white flex flex-col items-center justify-center gap-4 h-full cursor-pointer hover:bg-primary-light transition-colors shadow-lg shadow-primary-deep/20">
                                    <span className="text-lg font-bold">استكشف الفرص</span>
                                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">&larr;</span>
                                </GlassCard>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
