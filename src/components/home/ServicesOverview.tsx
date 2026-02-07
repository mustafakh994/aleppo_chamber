import { SectionHeading } from "@/components/ui/SectionHeading";
import { QrCode, Award, Building } from "lucide-react";
import Link from "next/link";
import { cn } from "@/components/ui/Button";

const services = [
    {
        icon: <QrCode className="w-8 h-8 text-white" />,
        title: "التحقق الرقمي",
        titleEn: "QR Verification",
        desc: "نظام التحقق الفوري من صحة الوثائق والشهادات",
        href: "/services/verification",
        color: "bg-primary-deep",
    },
    {
        icon: <Award className="w-8 h-8 text-white" />,
        title: "إصدار الشهادات",
        titleEn: "E-Certificates",
        desc: "إصدار شهادات المنشأ والشهادات الجمركية إلكترونياً",
        href: "/services/certificate",
        color: "bg-secondary-gold",
    },
    {
        icon: <Building className="w-8 h-8 text-white" />,
        title: "دليل الشركات",
        titleEn: "Business Directory",
        desc: "قاعدة بيانات شاملة للشركات التجارية في حلب",
        href: "/directory",
        color: "bg-accent-teal",
    },
];

export function ServicesOverview() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="خدماتنا الإلكترونية"
                    subtitle="تحول رقمي شامل"
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-secondary-gold/50 flex flex-col gap-6"
                        >
                            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300", service.color)}>
                                {service.icon}
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-primary-deep mb-1 font-arabic-heading group-hover:text-secondary-gold transition-colors">
                                    {service.title}
                                </h3>
                                <span className="text-sm font-medium text-slate-400 font-inter uppercase tracking-wider">
                                    {service.titleEn}
                                </span>
                                <p className="mt-4 text-slate-600 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-primary-deep font-bold">
                                <span className="group-hover:text-secondary-gold transition-colors">اقرأ المزيد</span>
                                <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-secondary-gold group-hover:text-white transition-all">
                                    &larr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
