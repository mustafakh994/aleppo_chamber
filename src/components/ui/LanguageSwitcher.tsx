"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleLanguageChange = (lang: "ar" | "en" | "tr") => {
        setLanguage(lang);
        setIsOpen(false);
    };

    const getLabel = (lang: string) => {
        switch (lang) {
            case "ar": return "العربية";
            case "en": return "English";
            case "tr": return "Türkçe";
            default: return "العربية";
        }
    };

    return (
        <div className="relative">
            <button
                onClick={toggleOpen}
                className="flex items-center gap-2 px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Change Language"
            >
                <Globe className="w-5 h-5" />
                <span className="uppercase font-medium">{language}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 w-40 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden z-50 ltr:right-0 rtl:left-0">
                    <div className="py-1">
                        <button
                            onClick={() => handleLanguageChange("ar")}
                            className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center justify-between ${language === 'ar' ? 'text-primary-deep font-bold bg-gray-50' : 'text-gray-700 dark:text-gray-200'}`}
                            style={{ fontFamily: 'var(--font-amiri)' }}
                        >
                            <span>العربية</span>
                            <span>🇸🇾</span>
                        </button>
                        <button
                            onClick={() => handleLanguageChange("en")}
                            className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center justify-between ${language === 'en' ? 'text-primary-deep font-bold bg-gray-50' : 'text-gray-700 dark:text-gray-200'}`}
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <span>English</span>
                            <span>🇬🇧</span>
                        </button>
                        <button
                            onClick={() => handleLanguageChange("tr")}
                            className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-slate-700 flex items-center justify-between ${language === 'tr' ? 'text-primary-deep font-bold bg-gray-50' : 'text-gray-700 dark:text-gray-200'}`}
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            <span>Türkçe</span>
                            <span>🇹🇷</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
