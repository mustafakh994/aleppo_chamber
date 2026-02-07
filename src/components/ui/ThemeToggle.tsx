"use client";

import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Monitor } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const themes = [
        { value: "light" as const, label: "فاتح", icon: Sun },
        { value: "dark" as const, label: "داكن", icon: Moon },
        { value: "system" as const, label: "تلقائي", icon: Monitor },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="تغيير السمة"
            >
                {resolvedTheme === "dark" ? (
                    <Moon className="w-5 h-5" />
                ) : (
                    <Sun className="w-5 h-5" />
                )}
            </button>

            {isOpen && (
                <div className="absolute left-0 rtl:left-auto rtl:right-0 top-full mt-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-2 min-w-[140px] z-50">
                    {themes.map((t) => (
                        <button
                            key={t.value}
                            onClick={() => {
                                setTheme(t.value);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${theme === t.value
                                    ? "bg-primary-deep/10 text-primary-deep dark:bg-secondary-gold/20 dark:text-secondary-gold"
                                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                                }`}
                        >
                            <t.icon className="w-4 h-4" />
                            <span>{t.label}</span>
                            {theme === t.value && (
                                <span className="mr-auto text-xs">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
