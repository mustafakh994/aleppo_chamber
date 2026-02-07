import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FileText, Download, Upload, Eye } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function DocumentsPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <SectionHeading
                    title="المستندات"
                    description="أرشيف الوثائق الرسمية والشهادات."
                />
                <Button>
                    <Upload className="w-4 h-4 ml-2" />
                    رفع مستند
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "شهادة العضوية 2026", type: "PDF", size: "1.2 MB", date: "01/02/2026" },
                    { name: "السجل التجاري", type: "PDF", size: "2.4 MB", date: "15/01/2025" },
                    { name: "البطاقة الضريبية", type: "JPG", size: "0.8 MB", date: "10/01/2025" },
                ].map((doc, i) => (
                    <GlassCard key={i} className="p-6 bg-white border border-slate-100 hover:shadow-lg transition-all group">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-slate-50 rounded-lg text-primary-deep group-hover:bg-primary-deep group-hover:text-secondary-gold transition-colors">
                                <FileText className="w-8 h-8" />
                            </div>
                            <div className="flex gap-1">
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-primary-deep">
                                    <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-primary-deep">
                                    <Download className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <h3 className="font-bold text-slate-700 mb-1 truncate">{doc.name}</h3>
                        <div className="flex justify-between text-xs text-slate-400 mt-4 pt-4 border-t border-slate-50">
                            <span>{doc.date}</span>
                            <span>{doc.size}</span>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
