"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export function VoiceOfMerchant() {
    const [complaintType, setComplaintType] = useState("technical");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-primary-deep/5 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-deep/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeading
                            title="صوت التاجر"
                            subtitle="Voice of the Merchant"
                            className="mb-6"
                        />
                        <h3 className="text-2xl md:text-3xl font-bold font-arabic-heading text-primary-deep mb-4 leading-relaxed">
                            نحن نصغي إليك.. شكواك ومقترحاتك تساهم في تطوير بيئة الأعمال
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-arabic-body">
                            تلتزم غرفة تجارة حلب بمعالجة كافة الملاحظات والشكاوى بسرية تامة واهتمام مباشر من مجلس الإدارة. بوابتك للتواصل المباشر معنا تبدأ من هنا.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                                <div className="w-12 h-12 bg-secondary-gold/10 rounded-full flex items-center justify-center text-secondary-gold">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-deep">معالجة فورية</h4>
                                    <p className="text-sm text-slate-500">فريق متخصص لمتابعة الشكاوى</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-10">
                        <GlassCard className="bg-white/80 border-white/50 shadow-xl backdrop-blur-xl">
                            {submitted ? (
                                <div className="py-20 text-center">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-deep mb-2">تم استلام رسالتك بنجاح</h3>
                                    <p className="text-slate-500">سيتم مراجعة الطلب والرد عليك في أقرب وقت ممكن.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-deep">نوع الرسالة</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {["technical", "administrative", "commercial"].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setComplaintType(type)}
                                                    className={`py-2 px-1 text-sm rounded-lg border transition-all ${complaintType === type
                                                            ? "bg-primary-deep text-white border-primary-deep"
                                                            : "bg-white text-slate-500 border-slate-200 hover:border-primary-deep/30"
                                                        }`}
                                                >
                                                    {type === "technical" && "دعم تقني"}
                                                    {type === "administrative" && "إدارية"}
                                                    {type === "commercial" && "تجارية"}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-deep">الموضوع</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary-gold/50 transition-all font-arabic-body"
                                            placeholder="عنوان مختصر للرسالة..."
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary-deep">التفاصيل</label>
                                        <textarea
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary-gold/50 transition-all font-arabic-body"
                                            placeholder="اشرح لنا المشكلة أو المقترح بالتفصيل..."
                                            required
                                        ></textarea>
                                        <p className="text-xs text-slate-400 text-left px-1">0/500 حرف</p>
                                    </div>

                                    <Button size="lg" className="w-full shadow-lg shadow-secondary-gold/20">
                                        إرسال الرسالة
                                    </Button>

                                    <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        يتم التعامل مع كافة البيانات بسرية تامة
                                    </p>
                                </form>
                            )}
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
