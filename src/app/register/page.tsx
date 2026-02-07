"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowLeft,
    ArrowRight,
    Building2,
    Phone,
    MapPin,
    FileText,
    CheckCircle,
    Loader2,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/context/ToastContext";
import { useAuth } from "@/context/AuthContext";

const SECTORS = [
    "صناعة النسيج والملابس",
    "صناعة الأغذية والمشروبات",
    "التجارة العامة",
    "الاستيراد والتصدير",
    "الخدمات المالية",
    "العقارات والبناء",
    "التقنية والبرمجيات",
    "الصناعات الكيميائية",
    "أخرى",
];

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    companyName: string;
    registrationNumber: string;
    sector: string;
    phone: string;
    address: string;
    agreeTerms: boolean;
}

export default function RegisterPage() {
    const router = useRouter();
    const { showToast } = useToast();
    const { register, isLoading } = useAuth();

    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        registrationNumber: "",
        sector: "",
        phone: "",
        address: "",
        agreeTerms: false,
    });

    const updateFormData = (field: keyof FormData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const validateStep1 = () => {
        if (!formData.email || !formData.password || !formData.confirmPassword) {
            showToast("يرجى ملء جميع الحقول المطلوبة", "warning");
            return false;
        }
        if (formData.password.length < 6) {
            showToast("كلمة المرور يجب أن تكون 6 أحرف على الأقل", "warning");
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            showToast("كلمتا المرور غير متطابقتين", "error");
            return false;
        }
        return true;
    };

    const validateStep2 = () => {
        if (!formData.companyName || !formData.registrationNumber || !formData.sector) {
            showToast("يرجى ملء جميع بيانات الشركة", "warning");
            return false;
        }
        return true;
    };

    const validateStep3 = () => {
        if (!formData.phone || !formData.address) {
            showToast("يرجى ملء بيانات التواصل", "warning");
            return false;
        }
        if (!formData.agreeTerms) {
            showToast("يرجى الموافقة على الشروط والأحكام", "warning");
            return false;
        }
        return true;
    };

    const nextStep = () => {
        if (step === 1 && validateStep1()) setStep(2);
        else if (step === 2 && validateStep2()) setStep(3);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateStep3()) return;

        const success = await register({
            email: formData.email,
            password: formData.password,
            companyName: formData.companyName,
            registrationNumber: formData.registrationNumber,
            sector: formData.sector,
            phone: formData.phone,
            address: formData.address,
        });

        if (success) {
            showToast("تم إنشاء الحساب بنجاح! مرحباً بك", "success");
            router.push("/dashboard");
        } else {
            showToast("حدث خطأ أثناء إنشاء الحساب", "error");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-deep via-primary-light to-primary-deep flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />

            <div className="w-full max-w-lg relative z-10">
                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>العودة للرئيسية</span>
                </Link>

                <GlassCard className="bg-white/95 backdrop-blur-xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-primary-deep font-arabic-heading">
                            إنشاء حساب جديد
                        </h1>
                        <p className="text-slate-500 mt-2">
                            انضم إلى غرفة تجارة حلب
                        </p>
                    </div>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= s
                                            ? "bg-secondary-gold text-white shadow-lg"
                                            : "bg-slate-100 text-slate-400"
                                        }`}
                                >
                                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                                </div>
                                {s < 3 && (
                                    <div
                                        className={`w-12 h-1 mx-1 rounded transition-all ${step > s ? "bg-secondary-gold" : "bg-slate-200"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step Labels */}
                    <div className="flex justify-between text-xs text-slate-500 mb-6 px-2">
                        <span className={step >= 1 ? "text-primary-deep font-bold" : ""}>بيانات الحساب</span>
                        <span className={step >= 2 ? "text-primary-deep font-bold" : ""}>بيانات الشركة</span>
                        <span className={step >= 3 ? "text-primary-deep font-bold" : ""}>التواصل</span>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Step 1: Account Credentials */}
                        {step === 1 && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        البريد الإلكتروني
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => updateFormData("email", e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none"
                                            placeholder="example@company.sy"
                                            dir="ltr"
                                        />
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        كلمة المرور
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={formData.password}
                                            onChange={(e) => updateFormData("password", e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none"
                                            placeholder="6 أحرف على الأقل"
                                            dir="ltr"
                                        />
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        تأكيد كلمة المرور
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none"
                                            placeholder="أعد كتابة كلمة المرور"
                                            dir="ltr"
                                        />
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Business Information */}
                        {step === 2 && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        اسم الشركة
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={formData.companyName}
                                            onChange={(e) => updateFormData("companyName", e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none"
                                            placeholder="شركة المثال التجارية"
                                        />
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        رقم السجل التجاري
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={formData.registrationNumber}
                                            onChange={(e) => updateFormData("registrationNumber", e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none"
                                            placeholder="123456"
                                            dir="ltr"
                                        />
                                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        القطاع التجاري
                                    </label>
                                    <select
                                        value={formData.sector}
                                        onChange={(e) => updateFormData("sector", e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none bg-white"
                                    >
                                        <option value="">اختر القطاع</option>
                                        {SECTORS.map((sector) => (
                                            <option key={sector} value={sector}>
                                                {sector}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Contact Details */}
                        {step === 3 && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        رقم الهاتف
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => updateFormData("phone", e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none"
                                            placeholder="+963 21 123 4567"
                                            dir="ltr"
                                        />
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        العنوان
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            value={formData.address}
                                            onChange={(e) => updateFormData("address", e.target.value)}
                                            className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none resize-none"
                                            placeholder="حلب، الشيخ نجار، الشارع الرئيسي"
                                            rows={3}
                                        />
                                        <MapPin className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                                    </div>
                                </div>

                                <label className="flex items-start gap-3 cursor-pointer p-4 bg-slate-50 rounded-xl">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreeTerms}
                                        onChange={(e) => updateFormData("agreeTerms", e.target.checked)}
                                        className="w-5 h-5 rounded border-slate-300 text-secondary-gold focus:ring-secondary-gold mt-0.5"
                                    />
                                    <span className="text-sm text-slate-600">
                                        أوافق على{" "}
                                        <Link href="/terms" className="text-primary-deep font-bold hover:underline">
                                            الشروط والأحكام
                                        </Link>{" "}
                                        و{" "}
                                        <Link href="/privacy" className="text-primary-deep font-bold hover:underline">
                                            سياسة الخصوصية
                                        </Link>
                                    </span>
                                </label>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 mt-8">
                            {step > 1 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={prevStep}
                                    className="flex-1"
                                >
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                    السابق
                                </Button>
                            )}

                            {step < 3 ? (
                                <Button type="button" onClick={nextStep} className="flex-1">
                                    التالي
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                </Button>
                            ) : (
                                <Button type="submit" className="flex-1" disabled={isLoading}>
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            جاري إنشاء الحساب...
                                        </span>
                                    ) : (
                                        "إنشاء الحساب"
                                    )}
                                </Button>
                            )}
                        </div>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-slate-600 mt-6">
                        لديك حساب بالفعل؟{" "}
                        <Link
                            href="/login"
                            className="text-primary-deep hover:text-secondary-gold font-bold transition-colors"
                        >
                            سجل دخولك
                        </Link>
                    </p>
                </GlassCard>

                {/* Footer text */}
                <p className="text-center text-white/60 text-sm mt-6">
                    © 2026 غرفة تجارة حلب - جميع الحقوق محفوظة
                </p>
            </div>
        </div>
    );
}
