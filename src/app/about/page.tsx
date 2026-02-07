"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
    Users,
    Target,
    Eye,
    Award,
    Building2,
    Globe,
    Handshake,
    TrendingUp,
} from "lucide-react";

const timeline = [
    { year: "1885", title: "التأسيس", desc: "تأسيس غرفة تجارة حلب كأول مؤسسة اقتصادية منظمة في المنطقة." },
    { year: "1920", title: "النمو والتوسع", desc: "توسيع نطاق الخدمات لتشمل التصدير والاستيراد." },
    { year: "1950", title: "العصر الذهبي", desc: "تصبح حلب مركزاً صناعياً وتجارياً رئيسياً في الشرق الأوسط." },
    { year: "1980", title: "التحديث", desc: "إدخال الأنظمة الإلكترونية وتطوير البنية التحتية." },
    { year: "2010", title: "التحول الرقمي", desc: "إطلاق الخدمات الإلكترونية وتطوير البوابة الرقمية." },
    { year: "2026", title: "إعادة الإعمار", desc: "قيادة مرحلة النهوض الاقتصادي وجذب الاستثمارات العالمية." },
];

const boardMembers = [
    { name: "م. أحمد الحلبي", role: "رئيس مجلس الإدارة", sector: "صناعة النسيج" },
    { name: "أ. محمد العطار", role: "نائب الرئيس", sector: "التجارة العامة" },
    { name: "م. خالد الشامي", role: "أمين الصندوق", sector: "الصناعات الغذائية" },
    { name: "أ. سامر القدسي", role: "عضو مجلس", sector: "الاستيراد والتصدير" },
    { name: "م. هاني البيك", role: "عضو مجلس", sector: "صناعة الأحذية" },
    { name: "أ. ريم الأحمد", role: "عضو مجلس", sector: "الحرف اليدوية" },
];

const stats = [
    { value: "141", label: "عاماً من الريادة", icon: Award },
    { value: "15,000+", label: "عضو مسجل", icon: Users },
    { value: "50+", label: "خدمة إلكترونية", icon: Globe },
    { value: "1,200+", label: "شهادة شهرياً", icon: Building2 },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="من نحن"
                subtitle="غرفة تجارة حلب - أصالة التاريخ.. ذكاء المستقبل"
                backgroundImage="https://images.unsplash.com/photo-1549141042-32aaff8f615f?q=80&w=1887&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6">
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-8 relative z-10 mb-16">
                    {stats.map((stat, index) => (
                        <GlassCard
                            key={index}
                            className="bg-white text-center p-6 shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <stat.icon className="w-8 h-8 text-secondary-gold mx-auto mb-3" />
                            <div className="text-3xl font-bold text-primary-deep font-mono">{stat.value}</div>
                            <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                        </GlassCard>
                    ))}
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <GlassCard className="bg-white p-8 border-t-4 border-primary-deep">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-primary-deep/10 rounded-xl flex items-center justify-center">
                                <Target className="w-6 h-6 text-primary-deep" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-deep font-arabic-heading">رسالتنا</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            تقديم خدمات متميزة للتجار والصناعيين في محافظة حلب، وتعزيز بيئة الأعمال
                            من خلال الدعم والتوجيه والتمثيل الفعّال لمصالح أعضائنا أمام الجهات الحكومية
                            والمنظمات الدولية.
                        </p>
                    </GlassCard>

                    <GlassCard className="bg-white p-8 border-t-4 border-secondary-gold">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-secondary-gold/10 rounded-xl flex items-center justify-center">
                                <Eye className="w-6 h-6 text-secondary-gold" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-deep font-arabic-heading">رؤيتنا</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            أن نكون المرجع الأول للقطاع التجاري والصناعي في سوريا، ومركزاً إقليمياً
                            للتميز في خدمة الأعمال، مع ريادة التحول الرقمي وتعزيز الشراكات الدولية
                            لبناء اقتصاد مستدام.
                        </p>
                    </GlassCard>
                </div>

                {/* Timeline Section */}
                <div className="mb-16">
                    <SectionHeading
                        title="مسيرتنا عبر الزمن"
                        subtitle="141 عاماً من الريادة والتميز"
                        centered
                    />

                    <div className="max-w-3xl mx-auto mt-12">
                        <div className="relative border-r-2 border-slate-200 mr-4 space-y-10">
                            {timeline.map((item, index) => (
                                <div key={index} className="relative pr-10">
                                    <div className="absolute -right-[9px] top-1 w-4 h-4 bg-secondary-gold rounded-full border-4 border-white shadow-md" />
                                    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                                        <div className="text-secondary-gold font-bold text-lg font-mono">{item.year}</div>
                                        <h4 className="text-xl font-bold text-primary-deep mt-1">{item.title}</h4>
                                        <p className="text-slate-500 mt-2">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-16">
                    <SectionHeading
                        title="قيمنا الأساسية"
                        subtitle="المبادئ التي توجه عملنا"
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        {[
                            { icon: Handshake, title: "النزاهة والشفافية", desc: "نلتزم بأعلى معايير النزاهة في جميع تعاملاتنا" },
                            { icon: TrendingUp, title: "التميز في الخدمة", desc: "نسعى دائماً لتقديم أفضل الخدمات لأعضائنا" },
                            { icon: Globe, title: "الانفتاح العالمي", desc: "نبني جسور التواصل مع الأسواق العالمية" },
                        ].map((value, index) => (
                            <GlassCard key={index} className="bg-white p-8 text-center group hover:border-secondary-gold transition-colors">
                                <div className="w-16 h-16 bg-primary-deep/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-gold/20 transition-colors">
                                    <value.icon className="w-8 h-8 text-primary-deep group-hover:text-secondary-gold transition-colors" />
                                </div>
                                <h4 className="text-lg font-bold text-primary-deep mb-2">{value.title}</h4>
                                <p className="text-slate-500 text-sm">{value.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                {/* Board Members */}
                <div>
                    <SectionHeading
                        title="مجلس الإدارة"
                        subtitle="قيادة بخبرة ورؤية"
                        centered
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {boardMembers.map((member, index) => (
                            <GlassCard key={index} className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary-deep to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                                    {member.name.charAt(2)}
                                </div>
                                <h4 className="font-bold text-primary-deep text-lg">{member.name}</h4>
                                <p className="text-secondary-gold font-medium text-sm mt-1">{member.role}</p>
                                <p className="text-slate-400 text-xs mt-2">{member.sector}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
