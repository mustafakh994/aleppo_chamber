"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/context/ToastContext";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const router = useRouter();
    const { showToast } = useToast();
    const { login, isLoading } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            showToast("يرجى ملء جميع الحقول المطلوبة", "warning");
            return;
        }

        const success = await login(email, password);

        if (success) {
            showToast("تم تسجيل الدخول بنجاح", "success");
            router.push("/dashboard");
        } else {
            showToast("البريد الإلكتروني أو كلمة المرور غير صحيحة", "error");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-deep via-primary-light to-primary-deep flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />

            <div className="w-full max-w-md relative z-10">
                {/* Back to home link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>العودة للرئيسية</span>
                </Link>

                <GlassCard className="bg-white/95 backdrop-blur-xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary-deep rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-secondary-gold font-bold text-2xl">AC</span>
                        </div>
                        <h1 className="text-2xl font-bold text-primary-deep font-arabic-heading">
                            تسجيل الدخول
                        </h1>
                        <p className="text-slate-500 mt-2">
                            مرحباً بك في بوابة أعضاء غرفة تجارة حلب
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                البريد الإلكتروني أو رقم الهاتف
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none"
                                    placeholder="example@company.sy"
                                    dir="ltr"
                                />
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">
                                كلمة المرور
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold transition-all outline-none"
                                    placeholder="••••••••"
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

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-slate-300 text-secondary-gold focus:ring-secondary-gold"
                                />
                                <span className="text-slate-600">تذكرني</span>
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-primary-deep hover:text-secondary-gold font-medium transition-colors"
                            >
                                نسيت كلمة المرور؟
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full py-3 text-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    جاري تسجيل الدخول...
                                </span>
                            ) : (
                                "تسجيل الدخول"
                            )}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-slate-200" />
                        <span className="text-sm text-slate-400">أو</span>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    {/* Register Link */}
                    <p className="text-center text-slate-600">
                        ليس لديك حساب؟{" "}
                        <Link
                            href="/register"
                            className="text-primary-deep hover:text-secondary-gold font-bold transition-colors"
                        >
                            سجل الآن
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
