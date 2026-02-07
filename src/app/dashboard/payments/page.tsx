import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { CreditCard, Download, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PaymentsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <SectionHeading
                    title="الدفعات المالية"
                    subtitle="سجل المدفوعات والرسوم المستحقة."
                />
            </div>

            {/* Balance Card */}
            <div className="bg-primary-deep rounded-2xl p-8 text-white flex items-center justify-between shadow-lg">
                <div>
                    <p className="text-slate-300 mb-1">الرصيد المستحق</p>
                    <h2 className="text-4xl font-bold font-mono">0.00 <span className="text-lg font-normal text-slate-300">ل.س</span></h2>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-white text-primary-deep hover:bg-slate-100">
                        <CreditCard className="w-4 h-4 ml-2" />
                        سجل الحساب
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary-deep mt-8">آخر العمليات</h3>
                {[
                    { id: "INV-2026-001", desc: "رسم اشتراك سنوي - 2026", amount: "450,000", date: "01/02/2026", type: "Debit" },
                    { id: "PAY-2026-892", desc: "دفع إلكتروني - سيريتل كاش", amount: "450,000", date: "01/02/2026", type: "Credit" },
                ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-secondary-gold/30 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-full ${tx.type === 'Debit' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-700">{tx.desc}</h4>
                                <p className="text-xs text-slate-400 font-mono">{tx.id} • {tx.date}</p>
                            </div>
                        </div>
                        <div className="text-left">
                            <span className={`font-bold font-mono block ${tx.type === 'Debit' ? 'text-red-500' : 'text-green-500'}`}>
                                {tx.type === 'Debit' ? '-' : '+'}{tx.amount} ل.س
                            </span>
                            <Button variant="ghost" size="sm" className="h-6 text-xs text-slate-400">
                                <Download className="w-3 h-3 ml-1" />
                                إيصال
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
