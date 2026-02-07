import { Button } from "@/components/ui/Button";
import { Tender } from "@/lib/data/tenders";
import { Calendar, Clock, FileText, Building2, Download } from "lucide-react";

interface TenderCardProps {
    tender: Tender;
}

export function TenderCard({ tender }: TenderCardProps) {
    const isAuction = tender.type === 'auction';
    const statusColor =
        tender.status === 'open' ? 'text-green-600 bg-green-50 border-green-200' :
            tender.status === 'extended' ? 'text-orange-600 bg-orange-50 border-orange-200' :
                'text-red-600 bg-red-50 border-red-200';

    const statusLabel =
        tender.status === 'open' ? 'مفتوح' :
            tender.status === 'extended' ? 'ممدد للانعقاد' :
                'مغلق';

    return (
        <div className="bg-white rounded-xl border border-slate-100 hover:border-secondary-gold/50 hover:shadow-lg transition-all p-6 group">
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                    <span className={`text-xs font-bold px-2 py-1 rounded-md border ${statusColor}`}>
                        {statusLabel}
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 rounded-md border ${isAuction ? 'bg-purple-50 text-purple-700 border-purple-200' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                        {isAuction ? 'مزاد علني' : 'مناقصة'}
                    </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">#{tender.referenceNumber}</span>
            </div>

            <h3 className="text-lg font-bold text-primary-deep mb-2 line-clamp-2 group-hover:text-secondary-gold transition-colors">
                {tender.title}
            </h3>

            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span>{tender.organization}</span>
            </div>

            <p className="text-slate-500 text-sm line-clamp-2 mb-6 h-10">
                {tender.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-xs">تاريخ النشر</span>
                    <div className="flex items-center gap-1 text-slate-700">
                        <Calendar className="w-4 h-4 text-secondary-gold" />
                        <span dir="ltr">{tender.publishDate}</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-xs">الموعد النهائي</span>
                    <div className="flex items-center gap-1 font-bold text-red-500">
                        <Clock className="w-4 h-4" />
                        <span dir="ltr">{tender.deadline}</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-50">
                <Button variant="outline" size="sm" className="flex-1 gap-2 border-slate-200 hover:border-secondary-gold/50 hover:bg-white text-slate-600">
                    <Download className="w-4 h-4" />
                    دفتر الشروط
                </Button>
                <Button size="sm" className="bg-primary-deep text-white hover:bg-secondary-gold">
                    التفاصيل
                </Button>
            </div>
        </div>
    );
}
