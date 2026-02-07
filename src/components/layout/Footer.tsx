"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Globe, Linkedin, Twitter, Youtube, Facebook, Send } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith("/dashboard");

    if (isDashboard) return null;

    return (
        <footer className="bg-bg-dark text-white pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-1 rounded shadow-sm">
                                <div className="w-8 h-8 bg-secondary-gold rounded flex items-center justify-center font-bold text-primary-deep text-lg">
                                    AC
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold font-arabic-heading">غرفة تجارة حلب</span>
                                <span className="text-xs text-slate-400">Aleppo Chamber of Commerce</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            أصالة التاريخ.. ذكاء المستقبل.
                            المؤسسة الاقتصادية العريقة في أقدم مدينة مأهولة في العالم، نعمل لخدمة التاجر وبناء الاقتصاد الوطني.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold font-arabic-heading text-secondary-gold">روابط سريعة</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#about" className="text-slate-300 hover:text-white hover:translate-x-1 hover:rtl:-translate-x-1 block transition-all text-sm">
                                    من نحن
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/certificate" className="text-slate-300 hover:text-white hover:translate-x-1 hover:rtl:-translate-x-1 block transition-all text-sm">
                                    الخدمات الإلكترونية
                                </Link>
                            </li>
                            <li>
                                <Link href="/directory" className="text-slate-300 hover:text-white hover:translate-x-1 hover:rtl:-translate-x-1 block transition-all text-sm">
                                    دليل الشركات
                                </Link>
                            </li>
                            <li>
                                <Link href="/investment/partners" className="text-slate-300 hover:text-white hover:translate-x-1 hover:rtl:-translate-x-1 block transition-all text-sm">
                                    فرص الاستثمار
                                </Link>
                            </li>
                            <li>
                                <Link href="/booking" className="text-slate-300 hover:text-white hover:translate-x-1 hover:rtl:-translate-x-1 block transition-all text-sm">
                                    حجز موعد
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold font-arabic-heading text-secondary-gold">تواصل معنا</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-300 text-sm">
                                <MapPin className="w-5 h-5 text-secondary-gold shrink-0 mt-0.5" />
                                <span>حلب، سوريا - منطقة السبع بحرات، بناء غرفة التجارة</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-sm">
                                <Phone className="w-5 h-5 text-secondary-gold shrink-0" />
                                <span dir="ltr">+963 21 211 1111</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-sm">
                                <Mail className="w-5 h-5 text-secondary-gold shrink-0" />
                                <a href="mailto:info@aleppochamber.com" className="hover:text-white transition-colors">
                                    info@aleppochamber.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 text-sm">
                                <Globe className="w-5 h-5 text-secondary-gold shrink-0" />
                                <a href="https://aleppo-chamber.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                    www.aleppo-chamber.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold font-arabic-heading text-secondary-gold">النشرة البريدية</h3>
                        <p className="text-slate-400 text-sm">
                            اشترك في نشرتنا البريدية لتصلك آخر أخبار الغرفة والفرص الاستثمارية.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-secondary-gold transition-colors placeholder:text-slate-500"
                            />
                            <button
                                type="submit"
                                className="absolute left-2 rtl:left-2 top-1.5 bottom-1.5 bg-secondary-gold hover:bg-secondary-light text-primary-deep p-2 rounded-md transition-colors"
                                aria-label="Subscribe"
                            >
                                <Send className="w-4 h-4 rtl:rotate-180" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-slate-500 text-xs text-center md:text-right">
                        &copy; {new Date().getFullYear()} غرفة تجارة حلب. جميع الحقوق محفوظة.
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 bg-slate-800 rounded-full">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 bg-slate-800 rounded-full">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 bg-slate-800 rounded-full">
                            <Youtube className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 bg-slate-800 rounded-full">
                            <Facebook className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
