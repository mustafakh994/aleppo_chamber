import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GlassCard } from "@/components/ui/GlassCard";
import { FileText, CreditCard, CheckCircle } from "lucide-react";

export default function RenewalPage() {
    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="تجديد الاشتراك السنوي"
                subtitle="جدد عضويتكم في غرفة تجارة حلب إلكترونياً بخطوات بسيطة"
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Form Area */}
                    <div className="lg:col-span-2 space-y-8">
                        <GlassCard className="bg-white">
                            <h3 className="text-xl font-bold font-arabic-heading mb-6 border-b pb-4">بيانات العضوية</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input label="رقم العضوية" placeholder="أدخل رقم العضوية" />
                                    <Input label="رقم السجل التجاري" placeholder="أدخل رقم السجل" />
                                </div>
                                <Button className="w-full md:w-auto" size="lg">تحقق من البيانات</Button>
                            </form>
                        </GlassCard>

                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4">
                            <div className="bg-blue-100 p-2 rounded-lg h-fit text-blue-600">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-800 mb-2">تعليمات التجديد</h4>
                                <ul className="text-sm text-blue-700 space-y-2 list-disc list-inside">
                                    <li>يجب تسديد كافة الرسوم السابقة قبل التجديد.</li>
                                    <li>يرجى التأكد من صحة البيانات المدخلة لتجنب تأخير المعاملة.</li>
                                    <li>سيتم إرسال إشعار الدفع عبر البريد الإلكتروني.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Steps */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                            <h3 className="font-bold font-arabic-heading mb-4">خطوات التجديد</h3>
                            <div className="space-y-6 relative before:absolute before:rw-0.5 before:bg-slate-200 before:h-full before:right-3.5 before:top-0 rtl:before:right-3.5 ltr:before:left-3.5">

                                <div className="relative flex gap-4 items-start">
                                    <div className="z-10 w-8 h-8 rounded-full bg-primary-deep text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-primary-deep">التحقق من العضوية</h4>
                                        <p className="text-xs text-slate-500">أدخل بياناتك للتحقق من الحالة</p>
                                    </div>
                                </div>

                                <div className="relative flex gap-4 items-start">
                                    <div className="z-10 w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-500">تحديث البيانات</h4>
                                        <p className="text-xs text-slate-400">تحديث معلومات الاتصال والعنوان</p>
                                    </div>
                                </div>

                                <div className="relative flex gap-4 items-start">
                                    <div className="z-10 w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-500">الدفع الإلكتروني</h4>
                                        <p className="text-xs text-slate-400">سداد الرسوم عبر بوابة الدفع</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
