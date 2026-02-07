import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GlassCard } from "@/components/ui/GlassCard";
import { FileText, ArrowLeft, Download } from "lucide-react";

export default function CertificatePage() {
    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="شهادة المنشأ"
                subtitle="خدمة إصدار وتصديق شهادات المنشأ للبضائع المصدرة"
                backgroundImage="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1770&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-8">
                        <GlassCard className="bg-white">
                            <h3 className="text-xl font-bold font-arabic-heading mb-6 border-b pb-4">طلب شهادة جديدة</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="نوع البضاعة" placeholder="مثال: منسوجات قطنية" />
                                    <Input label="الوجهة (البلد المستورد)" placeholder="اختر البلد" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="رقم الفاتورة" placeholder="رقم الفاتورة التجارية" />
                                    <Input label="قيمة البضاعة ($)" type="number" placeholder="0.00" />
                                </div>

                                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                                    <div className="flex flex-col items-center gap-2 text-slate-500">
                                        <Download className="w-8 h-8 opacity-50" />
                                        <span className="font-bold">ارفق الفاتورة التجارية</span>
                                        <span className="text-xs">PDF, JPG, PNG (Max 5MB)</span>
                                    </div>
                                </div>

                                <Button className="w-full md:w-auto" size="lg">تقديم الطلب</Button>
                            </form>
                        </GlassCard>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold font-arabic-heading mb-4">نماذج للتحميل</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group">
                                        <div className="bg-red-50 text-red-500 p-2 rounded-lg group-hover:bg-red-100">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm text-slate-700">نموذج شهادة منشأ عربي</h4>
                                            <p className="text-xs text-slate-400">PDF - 1.2 MB</p>
                                        </div>
                                        <Download className="w-4 h-4 text-slate-400 group-hover:text-primary-deep" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group">
                                        <div className="bg-blue-50 text-blue-500 p-2 rounded-lg group-hover:bg-blue-100">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm text-slate-700">English Origin Form</h4>
                                            <p className="text-xs text-slate-400">PDF - 1.2 MB</p>
                                        </div>
                                        <Download className="w-4 h-4 text-slate-400 group-hover:text-primary-deep" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
