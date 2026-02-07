import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background (Video Placeholder) */}
            <div className="absolute inset-0 w-full h-full bg-slate-900">
                {/* Using an Unsplash image as a high-quality placeholder for the drone footage */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
                    style={{ backgroundImage: "url('/aleppo_citadel_business_hero.png')" }}
                ></div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary-deep/60 via-primary-deep/40 to-primary-deep/90"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center md:items-start text-center md:text-start gap-6 mt-16">
                <div className="space-y-2">
                    <h2 className="text-lg md:text-xl text-accent-teal font-medium tracking-wide uppercase animate-fade-in">
                        بوابتك للاقتصاد السوري
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-arabic-heading text-white leading-tight drop-shadow-lg">
                        غرفة تجارة <span className="text-secondary-gold">حلب</span>
                    </h1>
                </div>

                <p className="text-xl md:text-2xl text-slate-100 font-arabic-body max-w-2xl leading-relaxed drop-shadow-md border-r-4 border-secondary-gold pr-6 bg-black/10 backdrop-blur-sm p-4 rounded-lg">
                    أصالة التاريخ... ذكاء المستقبل.
                    <br />
                    نربط ماضي التجارة العالمية بمستقبلها الرقمي.
                </p>

                <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                    <Link href="/services/renewal">
                        <Button variant="secondary" size="lg" className="min-w-[180px] text-lg shadow-xl shadow-secondary-gold/20">
                            خدمات الأعضاء
                        </Button>
                    </Link>
                    <Link href="/investment/partners">
                        <Button variant="outline" size="lg" className="min-w-[180px] text-lg text-white border-white/50 hover:bg-white/10 hover:border-white backdrop-blur-sm">
                            فرص الاستثمار
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Bottom Information Ticker */}
            <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md text-white py-3 border-t border-white/10 z-20">
                <div className="container mx-auto px-4 flex items-center justify-between text-sm font-ibm-plex opacity-90 overflow-hidden whitespace-nowrap">
                    <div className="flex items-center gap-8 animate-marquee">
                        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-gold"></span> أسعار الذهب (21): 850,000 ل.س</span>
                        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success"></span> USD: 14,500 ل.س</span>
                        <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent-teal"></span> اليورو: 15,800 ل.س</span>
                        <span className="text-slate-400">|</span>
                        <span>آخر الأخبار: انطلاق معرض حلب الدولي غداً...</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
