"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { BookingCalendar } from "@/components/ui/BookingCalendar";
import { useState } from "react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export default function BookingPage() {
    const [date, setDate] = useState<Date>(new Date());

    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="حجز موعد"
                subtitle="جدولة لقاء مع مجلس الإدارة أو رؤساء اللجان القطاعية"
                backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1770&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6">
                <GlassCard className="bg-white max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold font-arabic-heading mb-6 flex items-center gap-2">
                                <CalendarIcon className="w-5 h-5 text-secondary-gold" />
                                <span>اختر الموعد المناسب</span>
                            </h3>
                            {/* React Calendar */}
                            <div className="border border-slate-100 rounded-2xl p-4 bg-white shadow-lg shadow-slate-100/50 w-full overflow-hidden">
                                <BookingCalendar
                                    value={date}
                                    onChange={(d) => setDate(d)}
                                />
                            </div>
                            <p className="mt-4 text-center text-sm text-slate-500 font-bold bg-slate-50 py-2 px-4 rounded-lg w-fit mx-auto">
                                الموعد المختار: <span className="text-secondary-gold">{format(date, "EEEE, d MMMM yyyy", { locale: ar })}</span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold font-arabic-heading mb-6">تفاصيل الحجز</h3>
                                <div className="space-y-4">
                                    <div className="bg-white border rounded-lg p-4 flex gap-4 cursor-pointer hover:border-secondary-gold transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">جلسة استشارية عامة</h4>
                                            <p className="text-xs text-slate-500">30 دقيقة • الطابق الثاني</p>
                                        </div>
                                    </div>
                                    <div className="bg-white border rounded-lg p-4 flex gap-4 cursor-pointer ring-2 ring-secondary-gold bg-secondary-gold/5">
                                        <div className="w-10 h-10 rounded-full bg-secondary-gold text-white flex items-center justify-center">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-primary-deep">لقاء رئيس الغرفة</h4>
                                            <p className="text-xs text-slate-500">15 دقيقة • مكتب الرئاسة</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t">
                                <Button size="lg" className="w-full">تأكيد الحجز</Button>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
