import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GlassCard } from "@/components/ui/GlassCard";
import { QrCode, CheckCircle2 } from "lucide-react";

export default function VerificationPage() {
    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="التحقق الرقمي"
                subtitle="خدمة التحقق من صحة الشهادات والوثائق الصادرة عن الغرفة"
                backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1770&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <GlassCard className="bg-white text-center py-12">
                        <div className="w-20 h-20 bg-primary-deep text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary-deep/20">
                            <QrCode className="w-10 h-10" />
                        </div>

                        <h2 className="text-2xl font-bold font-arabic-heading mb-4">أدخل رمز التحقق</h2>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto">
                            يمكنك العثور على رمز التحقق أو مسح رمز QR الموجود أسفل الشهادة أو الوثيقة الرسمية.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-10">
                            <Input className="text-center font-mono text-lg tracking-widest uppercase" placeholder="ABC-1234-5678" />
                            <Button size="lg" className="min-w-[140px]">تحقق الآن</Button>
                        </div>

                        <div className="bg-green-50 border border-green-100 rounded-xl p-4 inline-flex items-center gap-3 text-green-700">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="font-bold text-sm">نظام التحقق متصل ومباشر</span>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}
