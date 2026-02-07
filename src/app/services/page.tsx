import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FileCheck, RefreshCw, BadgeCheck, ArrowLeft } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "تجديد العضوية",
            description: "خدمة تتيح للأعضاء تجديد اشتراكهم السنوي إلكترونياً دون الحاجة لزيارة مقر الغرفة.",
            icon: RefreshCw,
            href: "/services/renewal",
            color: "text-blue-500",
            bgColor: "bg-blue-50"
        },
        {
            title: "شهادة منشأ",
            description: "اصدار شهادة منشأ للبضائع المصدرة وتصديق الفواتير التجارية إلكترونياً.",
            icon: FileCheck,
            href: "/services/certificate",
            color: "text-green-500",
            bgColor: "bg-green-50"
        },
        {
            title: "التحقق من الوثائق",
            description: "خدمة عامة للتحقق من صحة الشهادات والوثائق الصادرة عن الغرفة باستخدام رمز QR.",
            icon: BadgeCheck,
            href: "/services/verification",
            color: "text-purple-500",
            bgColor: "bg-purple-50"
        }
    ];

    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="الخدمات الإلكترونية"
                subtitle="باقة متكاملة من الخدمات الرقمية لتسهيل أعمالكم"
                backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Link key={index} href={service.href} className="group">
                            <GlassCard className="h-full hover:border-secondary-gold/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} ${service.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                                    <service.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-bold font-arabic-heading text-primary-deep mb-3 group-hover:text-secondary-gold transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 leading-relaxed mb-6 min-h-[80px]">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-secondary-gold font-bold text-sm">
                                    <span>الذهاب للخدمة</span>
                                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                                </div>
                            </GlassCard>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-slate-500 mb-6 font-medium">هل تبحث عن خدمة غير موجودة هنا؟</p>
                    <Link href="/dashboard">
                        <Button variant="outline" className="min-w-[200px] border-slate-300 hover:border-secondary-gold hover:text-secondary-gold">
                            تواصل مع خدمات الأعضاء
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
