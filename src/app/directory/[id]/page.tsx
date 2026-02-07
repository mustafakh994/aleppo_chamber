import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { BadgeCheck, MapPin, Phone, Mail, Globe, Clock, Building2, Facebook, Twitter, Instagram, Share2 } from "lucide-react";

export default async function CompanyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    // Await params if needed for API calls later
    const { id } = await params;

    // Mock company data (In a real app, verify ID with API)
    const company = {
        name: "شركة النسيج العصرية",
        description: "تأسست شركة النسيج العصرية عام 1998م، وهي واحدة من الشركات الرائدة في مجال صناعة النسيج في سوريا. نتخصص في إنتاج الأقمشة القطنية عالية الجودة والممزوجة، ونصدر منتجاتنا إلى أكثر من 15 دولة حول العالم. نمتلك أحدث خطوط الإنتاج الألمانية واليابانية، ونلتزم بأعلى معايير الجودة والاستدامة البيئية.",
        sector: "صناعة النسيج",
        location: "المنطقة الصناعية - الشيخ نجار، الفئة الثالثة، مقسم 421",
        phone: "+963 21 444 5555",
        email: "info@modern-textile.sy",
        website: "www.modern-textile.sy",
        isVerified: true,
        rating: 4.8,
        workingHours: "08:00 ص - 05:00 م",
        products: ["أقمشة قطنية 100%", "أقمشة بوليستر", "خيوط ممزوجة", "منسوجات منزلية"],
    };

    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            {/* Minimal Header */}
            <div className="h-64 bg-primary-deep relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6 w-full">
                        <div className="w-32 h-32 bg-white rounded-2xl border-4 border-white shadow-lg flex items-center justify-center text-slate-300 transform translate-y-16">
                            <Building2 className="w-16 h-16" />
                        </div>
                        <div className="pb-4 text-center md:text-right flex-1">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                <h1 className="text-3xl font-bold text-white font-arabic-heading">{company.name}</h1>
                                {company.isVerified && (
                                    <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-100 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                                        <BadgeCheck className="w-3 h-3" />
                                        موثق رسمياً
                                    </div>
                                )}
                            </div>
                            <p className="text-slate-300">{company.sector}</p>
                        </div>
                        <div className="pb-4 flex gap-3">
                            <Button className="bg-secondary-gold text-primary-deep hover:bg-white hover:text-primary-deep">تواصل معنا</Button>
                            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                                <Share2 className="w-4 h-4 ml-2" />
                                مشاركة
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About */}
                        <GlassCard className="p-8 bg-white border border-slate-100">
                            <h2 className="text-xl font-bold text-primary-deep mb-4 border-b border-slate-50 pb-2">عن الشركة</h2>
                            <p className="text-slate-600 leading-8">
                                {company.description}
                            </p>
                        </GlassCard>

                        {/* Products / Services */}
                        <GlassCard className="p-8 bg-white border border-slate-100">
                            <h2 className="text-xl font-bold text-primary-deep mb-6 border-b border-slate-50 pb-2">المنتجات والخدمات</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {company.products.map((product, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                        <div className="w-2 h-2 rounded-full bg-secondary-gold shrink-0"></div>
                                        <span className="text-slate-700 font-medium">{product}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Gallery Placeholder */}
                        <GlassCard className="p-8 bg-white border border-slate-100">
                            <h2 className="text-xl font-bold text-primary-deep mb-6 border-b border-slate-50 pb-2">معرض الصور</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-200 transition-colors cursor-pointer">
                                        صورة {item}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        {/* Contact Card */}
                        <GlassCard className="p-6 bg-white border border-slate-100">
                            <h3 className="font-bold text-lg text-primary-deep mb-6">معلومات التواصل</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 text-slate-600">
                                    <MapPin className="w-5 h-5 text-secondary-gold shrink-0 mt-0.5" />
                                    <span className="text-sm">{company.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Phone className="w-5 h-5 text-secondary-gold shrink-0" />
                                    <span dir="ltr" className="text-sm">{company.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Mail className="w-5 h-5 text-secondary-gold shrink-0" />
                                    <a href={`mailto:${company.email}`} className="text-sm hover:text-primary-deep hover:underline">{company.email}</a>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Globe className="w-5 h-5 text-secondary-gold shrink-0" />
                                    <a href={`https://${company.website}`} target="_blank" className="text-sm hover:text-primary-deep hover:underline">{company.website}</a>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600 pt-4 border-t border-slate-50 mt-4">
                                    <Clock className="w-5 h-5 text-secondary-gold shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold">ساعات العمل</p>
                                        <p className="text-xs text-slate-400">{company.workingHours}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="flex gap-4 mt-6 pt-6 border-t border-slate-50 justify-center">
                                <Button size="icon" variant="ghost" className="text-slate-400 hover:text-[#1877F2] hover:bg-blue-50">
                                    <Facebook className="w-5 h-5" />
                                </Button>
                                <Button size="icon" variant="ghost" className="text-slate-400 hover:text-[#1DA1F2] hover:bg-sky-50">
                                    <Twitter className="w-5 h-5" />
                                </Button>
                                <Button size="icon" variant="ghost" className="text-slate-400 hover:text-[#E4405F] hover:bg-rose-50">
                                    <Instagram className="w-5 h-5" />
                                </Button>
                            </div>
                        </GlassCard>

                        {/* Map Placeholder */}
                        <div className="h-64 rounded-xl bg-slate-200 w-full flex items-center justify-center text-slate-400 border border-slate-300">
                            <MapPin className="w-8 h-8 mb-2" />
                            <span className="block">خريطة الموقع</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
