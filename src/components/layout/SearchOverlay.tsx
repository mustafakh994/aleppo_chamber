"use client";

import { X, Search as SearchIcon, ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            // Focus after a small delay to allow animation to start
            setTimeout(() => inputRef.current?.focus(), 100);
            // Prevent body scroll
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onClose();
            router.push(`/directory?q=${encodeURIComponent(query)}`);
        }
    };

    if (!mounted) return null;

    if (!isOpen) return null;

    // Use portal to render at root level
    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                onClick={onClose}
            ></div>

            {/* Search Container */}
            <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
                <form onSubmit={handleSearch} className="relative flex items-center border-b border-slate-100 p-2">
                    <SearchIcon className="w-6 h-6 text-slate-400 absolute right-6 pointer-events-none" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="ابحث عن شركة، خدمة، أو قرار..."
                        className="w-full bg-transparent text-xl md:text-2xl font-bold text-primary-deep placeholder:text-slate-300 px-14 py-6 focus:outline-none font-arabic-heading"
                    />
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors absolute left-4"
                    >
                        <X className="w-6 h-6 text-slate-500" />
                    </button>
                </form>

                {/* Quick Results / Suggestions */}
                <div className="p-6 bg-slate-50 min-h-[300px]">
                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">الأكثر بحثاً</h3>
                        <div className="flex flex-wrap gap-2">
                            {["تجديد اشتراك", "دليل المصانع", "مناقصات", "أسعار العملات", "شهادة منشأ"].map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => {
                                        setQuery(tag);
                                        // Optional: Auto search on click
                                        // router.push(...)
                                    }}
                                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-secondary-gold hover:text-secondary-gold transition-colors shadow-sm"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">روابط سريعة</h3>
                            <ul className="space-y-3">
                                <li>
                                    <button onClick={() => { onClose(); router.push('/services/renewal'); }} className="flex items-center gap-2 text-primary-deep hover:text-secondary-gold transition-colors group">
                                        <ArrowLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span>بوابة الخدمات الإلكترونية</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => { onClose(); router.push('/directory'); }} className="flex items-center gap-2 text-primary-deep hover:text-secondary-gold transition-colors group">
                                        <ArrowLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span>دليل الشركات والمصانع</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => { onClose(); router.push('/tenders'); }} className="flex items-center gap-2 text-primary-deep hover:text-secondary-gold transition-colors group">
                                        <ArrowLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span>المناقصات والمزادات</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-white border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
                    <span>اضغط Enter للبحث</span>
                    <span>ESC للإغلاق</span>
                </div>
            </div>
        </div>,
        document.body
    );
}
