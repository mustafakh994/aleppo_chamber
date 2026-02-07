import { GlassCard } from "@/components/ui/GlassCard";
import { Building2, FileText, Handshake, CalendarDays, ArrowLeft } from "lucide-react";
import Link from "next/link";

const quickLinks = [
    {
        icon: <Building2 className="w-8 h-8 text-secondary-gold" />,
        title: "تجديد الاشتراك",
        desc: "جدد عضويتكم السنوية إلكترونياً",
        href: "/services/renewal",
    },
    {
        icon: <FileText className="w-8 h-8 text-secondary-gold" />,
        title: "شهادة المنشأ",
        desc: "إصدار وتصديق شهادات المنشأ",
        href: "/services/certificate",
    },
    {
        icon: <Handshake className="w-8 h-8 text-secondary-gold" />,
        title: "البحث عن شريك",
        desc: "فرص شراكة واستثمار",
        href: "/investment/partners",
    },
    {
        icon: <CalendarDays className="w-8 h-8 text-secondary-gold" />,
        title: "حجز موعد",
        desc: "احجز موعداً مع مجلس الإدارة",
        href: "/booking",
    },
];

export function QuickAccess() {
    return (
        <section className="relative pb-20 container mx-auto px-4 md:px-6 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickLinks.map((item, index) => (
                    <Link key={index} href={item.href} className="block h-full">
                        <GlassCard className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-t-4 border-t-secondary-gold hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
                            <div className="flex flex-col gap-4 h-full">
                                <div className="bg-primary-deep/5 p-3 rounded-xl w-fit group-hover:bg-primary-deep/10 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary-deep mb-2 font-arabic-heading group-hover:text-secondary-gold transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 font-arabic-body leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-primary-deep group-hover:text-secondary-gold transition-colors">
                                    <span>أدخل للتفاصيل</span>
                                    <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
                                </div>
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </section>
    );
}
