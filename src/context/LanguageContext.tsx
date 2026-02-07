"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "ar" | "en" | "tr";
type Direction = "rtl" | "ltr";

interface LanguageContextType {
    language: Language;
    direction: Direction;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string; // Placeholder for translation function
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("ar");
    const [direction, setDirection] = useState<Direction>("rtl");

    useEffect(() => {
        const dir = language === "ar" ? "rtl" : "ltr";
        setDirection(dir);
        document.documentElement.lang = language;
        document.documentElement.dir = dir;
    }, [language]);

    const t = (key: string) => {
        // Simple placeholder for now
        return key;
    };

    return (
        <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
