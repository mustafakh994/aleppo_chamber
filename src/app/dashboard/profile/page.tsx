import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { User, Mail, Phone, MapPin, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ProfilePage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <SectionHeading
                    title="ملفي الشخصي"
                    subtitle="إدارة معلوماتك الشخصية وبيانات الشركة المسجلة لدينا."
                />
                <Button>
                    تعديل البيانات
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <GlassCard className="lg:col-span-1 p-6 flex flex-col items-center text-center bg-white shadow-sm">
                    <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center mb-4 border-4 border-white shadow-md">
                        <User className="w-16 h-16 text-slate-400" />
                    </div>
                    <h2 className="text-xl font-bold font-arabic-heading text-primary-deep">أحمد الصالح</h2>
                    <p className="text-slate-500 mb-6">المدير العام</p>

                    <div className="w-full space-y-4 text-right">
                        <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg">
                            <Mail className="w-5 h-5 text-secondary-gold" />
                            <span dir="ltr" className="text-sm">ahmed@example.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-lg">
                            <Phone className="w-5 h-5 text-secondary-gold" />
                            <span dir="ltr" className="text-sm">+963 933 123 456</span>
                        </div>
                    </div>
                </GlassCard>

                {/* Company Details */}
                <GlassCard className="lg:col-span-2 p-8 bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <Building2 className="w-6 h-6 text-secondary-gold" />
                        <h3 className="text-lg font-bold text-primary-deep">بيانات الشركة</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-slate-400">اسم الشركة</label>
                            <div className="font-bold text-slate-700">شركة النسيج العصرية</div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-slate-400">رقم السجل التجاري</label>
                            <div className="font-bold text-slate-700">12345/حلب</div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-slate-400">فئة الغرفة</label>
                            <div className="font-bold text-slate-700">ممتازة</div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-slate-400">تاريخ الانتساب</label>
                            <div className="font-bold text-slate-700">01/01/2010</div>
                        </div>
                        <div className="col-span-1 md:col-span-2 space-y-2">
                            <label className="text-sm text-slate-400">العنوان المسجل</label>
                            <div className="font-bold text-slate-700 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-400" />
                                المنطقة الصناعية، الشيخ نجار، الفئة الثالثة، مقسم 421
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
