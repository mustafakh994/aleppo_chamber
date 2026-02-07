import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { DigitalCard } from "@/components/dashboard/DigitalCard";
import {
    Activity,
    Clock,
    FileCheck,
    AlertCircle,
    TrendingUp,
    Plus,
    ArrowUpRight,
    Download,
    Share2
} from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome & Digital Card Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {/* Welcome Message */}
                <div className="lg:col-span-2 bg-primary-deep rounded-2xl p-8 text-white relative overflow-hidden shadow-xl flex flex-col justify-center">
                    <div className="relative z-10">
                        <h1 className="text-3xl font-bold font-arabic-heading mb-2">مرحباً بك، شركة النسيج العصرية</h1>
                        <p className="text-slate-300 max-w-xl text-lg opacity-90 mb-8">
                            لوحة التحكم الخاصة بك لإدارة عضويتك، متابعة طلباتك، والاطلاع على أحدث الفرص الاستثمارية.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-secondary-gold text-white hover:bg-secondary-light border-none shadow-lg shadow-secondary-gold/20">
                                <Plus className="w-5 h-5 ml-2" />
                                طلب جديد
                            </Button>
                            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white">
                                عرض الملف الشخصي
                            </Button>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-gold/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Digital Card Container */}
                <div className="relative group">
                    <DigitalCard
                        memberName="أحمد محمد"
                        companyName="شركة النسيج العصرية"
                        membershipId="MR-2026-8921"
                        sector="Textiles & Fabrics"
                        issueDate="01/01/2026"
                        expiryDate="31/12/2026"
                        isActive={true}
                    />
                    <div className="flex justify-center gap-4 mt-6">
                        <button className="flex items-center gap-2 text-slate-500 hover:text-primary-deep text-sm transition-colors">
                            <Download className="w-4 h-4" />
                            <span>Download PDF</span>
                        </button>
                        <button className="flex items-center gap-2 text-slate-500 hover:text-primary-deep text-sm transition-colors">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="bg-white p-6 border-l-4 border-l-green-500 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-500 text-sm font-bold mb-1">الطلبات النشطة</p>
                            <h3 className="text-3xl font-bold text-primary-deep font-mono">3</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                            <Activity className="w-5 h-5" />
                        </div>
                    </div>
                </GlassCard>

                <GlassCard className="bg-white p-6 border-l-4 border-l-orange-400 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-500 text-sm font-bold mb-1">دفعات مستحقة</p>
                            <h3 className="text-3xl font-bold text-primary-deep font-mono">0.00</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                            <AlertCircle className="w-5 h-5" />
                        </div>
                    </div>
                </GlassCard>

                <GlassCard className="bg-white p-6 border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-slate-500 text-sm font-bold mb-1">حالة العضوية</p>
                            <h3 className="text-xl font-bold text-green-600">نشطة وسارية</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                            <FileCheck className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">صالحة حتى: 31/12/2026</p>
                </GlassCard>
            </div>

            {/* Content Area Split: Recent Activity & Quick Links */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-primary-deep font-arabic-heading mb-6 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-secondary-gold" />
                        آخر النشاطات
                    </h3>

                    <div className="space-y-4">
                        {[
                            { title: "تم تجديد الاشتراك السنوي", date: "منذ يومين", icon: <FileCheck className="w-4 h-4" />, color: "bg-green-100 text-green-600" },
                            { title: "تم تقديم طلب شهادة منشأ #4921", date: "منذ 5 أيام", icon: <ArrowUpRight className="w-4 h-4" />, color: "bg-blue-100 text-blue-600" },
                            { title: "تحديث بيانات السجل التجاري", date: "منذ أسبوع", icon: <Activity className="w-4 h-4" />, color: "bg-orange-100 text-orange-600" },
                        ].map((activity, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-secondary-gold/30 transition-colors">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.color}`}>
                                    {activity.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-primary-deep">{activity.title}</h4>
                                    <p className="text-xs text-slate-400">{activity.date}</p>
                                </div>
                                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-primary-deep">
                                    التفاصيل
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Sidebar Right */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-primary-deep font-arabic-heading mb-6">
                        إجراءات سريعة
                    </h3>
                    <div className="grid gap-3">
                        <button className="w-full text-right bg-white p-4 rounded-xl border border-slate-200 hover:border-secondary-gold hover:shadow-md transition-all flex items-center justify-between group">
                            <span className="font-bold text-slate-700 group-hover:text-primary-deep">تجديد اشتراك الغرفة</span>
                            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-secondary-gold" />
                        </button>
                        <button className="w-full text-right bg-white p-4 rounded-xl border border-slate-200 hover:border-secondary-gold hover:shadow-md transition-all flex items-center justify-between group">
                            <span className="font-bold text-slate-700 group-hover:text-primary-deep">حجز موعد مع الرئاسة</span>
                            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-secondary-gold" />
                        </button>
                        <button className="w-full text-right bg-white p-4 rounded-xl border border-slate-200 hover:border-secondary-gold hover:shadow-md transition-all flex items-center justify-between group">
                            <span className="font-bold text-slate-700 group-hover:text-primary-deep">تحميل شهادة العضوية</span>
                            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-secondary-gold" />
                        </button>
                    </div>

                    {/* Market Ticker / Mini Invest */}
                    <div className="bg-primary-deep rounded-xl p-5 text-white mt-8">
                        <div className="flex items-center gap-2 mb-4 text-secondary-gold">
                            <TrendingUp className="w-5 h-5" />
                            <h4 className="font-bold">مؤشر السوق</h4>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                                <span className="text-slate-300">سعر الذهب (غرام)</span>
                                <span className="font-mono font-bold">890,000 ل.س</span>
                            </div>
                            <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                                <span className="text-slate-300">سعر الصرف (مركزي)</span>
                                <span className="font-mono font-bold">13,500 ل.س</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
