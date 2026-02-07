import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

export default function RequestsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <SectionHeading
                    title="طلباتي"
                    description="متابعة حالة الطلبات المقدمة للغرفة."
                />
                <Link href="/services/certificate">
                    <Button>
                        طلب جديد
                    </Button>
                </Link>
            </div>

            <div className="space-y-4">
                {[
                    { id: "#REQ-2026-001", type: "تجديد اشتراك سنوي", date: "01/02/2026", status: "completed", statusText: "تمت الموافقة" },
                    { id: "#REQ-2026-042", type: "شهادة منشأ - تصدير", date: "05/02/2026", status: "pending", statusText: "قيد المعالجة" },
                    { id: "#REQ-2026-055", type: "تصديق وثائق", date: "06/02/2026", status: "processing", statusText: "بانتظار الدفع" },
                ].map((req, i) => (
                    <GlassCard key={i} className="p-4 bg-white shadow-sm hover:shadow-md transition-all border border-slate-100">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${req.status === 'completed' ? 'bg-green-100 text-green-600' :
                                        req.status === 'pending' ? 'bg-blue-100 text-blue-600' :
                                            'bg-orange-100 text-orange-600'
                                    }`}>
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary-deep text-lg">{req.type}</h3>
                                    <p className="text-slate-400 text-sm font-mono">{req.id} • {req.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1.5 ${req.status === 'completed' ? 'bg-green-50 text-green-700' :
                                        req.status === 'pending' ? 'bg-blue-50 text-blue-700' :
                                            'bg-orange-50 text-orange-700'
                                    }`}>
                                    {req.status === 'completed' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                                    {req.statusText}
                                </span>
                                <Button variant="ghost" size="sm">التفاصيل</Button>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
