"use client";

import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { Menu, Search, User } from "lucide-react";
import { useState } from "react";

import { SearchOverlay } from "./SearchOverlay";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-primary-deep/90 backdrop-blur-md border-b border-white/10 text-white shadow-lg">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 h-20 flex items-center justify-between">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-white p-1 rounded-lg shadow-md group-hover:scale-105 transition-transform overflow-hidden">
                            <Image
                                src="/Logoch.png"
                                alt="غرفة تجارة حلب"
                                width={44}
                                height={44}
                                className="w-11 h-11 object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg md:text-xl font-bold font-arabic-heading leading-tight text-white group-hover:text-secondary-gold transition-colors">
                                غرفة تجارة حلب
                            </h1>
                            <span className="text-xs text-gray-300 font-light hidden md:block">
                                Aleppo Chamber of Commerce
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link href="/" className="text-white hover:text-secondary-gold font-medium transition-colors">
                            الرئيسية
                        </Link>
                        <Link href="/about" className="text-white hover:text-secondary-gold font-medium transition-colors">
                            من نحن
                        </Link>
                        <Link href="/services" className="text-white hover:text-secondary-gold font-medium transition-colors">
                            الخدمات الإلكترونية
                        </Link>
                        <Link href="/directory" className="text-white hover:text-secondary-gold font-medium transition-colors">
                            دليل الشركات
                        </Link>
                        <Link href="/news" className="text-white hover:text-secondary-gold font-medium transition-colors">
                            الأخبار
                        </Link>
                        <Link href="/contact" className="text-white hover:text-secondary-gold font-medium transition-colors">
                            تواصل معنا
                        </Link>
                    </nav>

                    {/* Actions Area */}
                    <div className="flex items-center gap-4">
                        {/* Search Button */}
                        <button
                            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Search"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="w-5 h-5" />
                        </button>

                        {/* Login / Members Area */}
                        <Link
                            href="/dashboard"
                            className="hidden md:flex items-center gap-2 bg-secondary-gold hover:bg-secondary-light text-primary-deep px-4 py-2 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <User className="w-4 h-4" />
                            <span>بوابة الأعضاء</span>
                        </Link>

                        <div className="h-6 w-px bg-white/20 hidden md:block"></div>

                        {/* Language Switcher */}
                        <LanguageSwitcher />

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer (Simple version) */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-primary-deep border-t border-white/10 p-4 absolute w-full shadow-xl">
                        <nav className="flex flex-col gap-2">
                            <Link href="/" className="px-4 py-2 hover:bg-white/10 rounded-lg">الرئيسية</Link>
                            <Link href="/about" className="px-4 py-2 hover:bg-white/10 rounded-lg">من نحن</Link>
                            <Link href="/services" className="px-4 py-2 hover:bg-white/10 rounded-lg">الخدمات</Link>
                            <Link href="/directory" className="px-4 py-2 hover:bg-white/10 rounded-lg">دليل الشركات</Link>
                            <Link href="/news" className="px-4 py-2 hover:bg-white/10 rounded-lg">الأخبار</Link>
                            <Link href="/contact" className="px-4 py-2 hover:bg-white/10 rounded-lg">تواصل معنا</Link>
                            <Link href="/login" className="px-4 py-2 bg-secondary-gold text-primary-deep font-bold rounded-lg text-center mt-2">
                                دخول الأعضاء
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
