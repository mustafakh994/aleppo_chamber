import { opportunities } from "@/lib/data/opportunities";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeCheck, Calendar, DollarSign, MapPin, Share2, TrendingUp, Building2, Phone, Mail } from "lucide-react";
import { notFound } from "next/navigation";

// Next.js 15/16: Params are now a Promise
interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function OpportunityDetailsPage({ params }: PageProps) {
    // Await params before accessing properties
    const { id } = await params;
    const opportunity = opportunities.find(o => o.id === id);

    if (!opportunity) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            {/* Hero Section */}
            <div className="relative h-96 w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${opportunity.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/50 to-primary-deep/30 backdrop-blur-[2px]"></div>

                <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-secondary-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                            {opportunity.type === 'partnership' ? 'شراكة استراتيجية' :
                                opportunity.type === 'investment' ? 'فرصة استثمارية' :
                                    opportunity.type === 'franchise' ? 'امتياز تجاري (Franchise)' : 'استحواذ'}
                        </span>
                        <span className="bg-white/20 text-white backdrop-blur-md px-3 py-1 rounded-full text-sm flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {opportunity.industry === 'textile' ? 'صناعة النسيج' :
                                opportunity.industry === 'food' ? 'الصناعات الغذائية' :
                                    opportunity.industry === 'tech' ? 'تكنولوجيا' :
                                        opportunity.industry === 'construction' ? 'إنشاءات' : 'طاقة'}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold font-arabic-heading text-white mb-4">
                        {opportunity.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-slate-200">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-secondary-gold" />
                            <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-secondary-gold" />
                            <span>نشر {opportunity.datePosted}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BadgeCheck className="w-5 h-5 text-blue-400" />
                            <span>موثوق من الغرفة</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-primary-deep font-arabic-heading mb-6 border-b border-slate-100 pb-4">
                                تفاصيل الفرصة
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {opportunity.description}
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-4 rounded-xl">
                                    <p className="text-sm text-slate-500 mb-1">العائد المتوقع (ROI)</p>
                                    <p className="text-xl font-bold text-green-600">15% - 22%</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl">
                                    <p className="text-sm text-slate-500 mb-1">فترة الاسترداد</p>
                                    <p className="text-xl font-bold text-primary-deep">3 - 5 سنوات</p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Placeholder */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-primary-deep font-arabic-heading mb-6">
                                صور وفيديو
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="aspect-square rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">صورة 1</div>
                                <div className="aspect-square rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">صورة 2</div>
                                <div className="aspect-square rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">صورة 3</div>
                                <div className="aspect-square rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">فيديو</div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Financial Stats Card */}
                        <GlassCard className="bg-white p-6 border-t-4 border-t-secondary-gold">
                            <h3 className="text-xl font-bold text-primary-deep mb-6 flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-secondary-gold" />
                                البيانات المالية
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-slate-500">رأس المال المطلوب</span>
                                        <span className="font-bold text-2xl text-primary-deep font-mono">{opportunity.capital}</span>
                                    </div>
                                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                        <div className="bg-secondary-gold h-full rounded-full" style={{ width: `${opportunity.progress}%` }}></div>
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-slate-400">
                                        <span>تم جمع: {opportunity.progress}%</span>
                                        <span>المتبقي: {100 - opportunity.progress}%</span>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-slate-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-500 text-sm">الحد الأدنى للمشاركة</span>
                                        <span className="font-bold text-primary-deep font-mono">{opportunity.minInvestment}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500 text-sm">الحد الأقصى للشركاء</span>
                                        <span className="font-bold text-primary-deep">5 شركاء</span>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full mt-8 bg-primary-deep hover:bg-primary-deep/90 text-white shadow-lg shadow-primary-deep/20">
                                استثمر الآن
                            </Button>
                        </GlassCard>

                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-primary-deep mb-4">تواصل مع صاحب المشروع</h3>
                            <div className="space-y-4">
                                <Button variant="outline" className="w-full justify-start gap-3 h-12">
                                    <Phone className="w-4 h-4 text-slate-400" />
                                    <span>طلب اتصال هاتفي</span>
                                </Button>
                                <Button variant="outline" className="w-full justify-start gap-3 h-12">
                                    <Mail className="w-4 h-4 text-slate-400" />
                                    <span>إرسال بريد إلكتروني</span>
                                </Button>
                                <Button variant="ghost" className="w-full gap-2 text-slate-500">
                                    <Share2 className="w-4 h-4" />
                                    مشاركة الفرصة
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
