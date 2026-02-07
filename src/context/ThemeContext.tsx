"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
    theme: Theme;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("system");
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    // Get system preference
    const getSystemTheme = (): "light" | "dark" => {
        if (typeof window !== "undefined") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return "light";
    };

    // Apply theme to document
    const applyTheme = (newTheme: Theme) => {
        const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
        setResolvedTheme(resolved);

        if (typeof document !== "undefined") {
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(resolved);
        }
    };

    // Set theme and persist to localStorage
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("theme", newTheme);
        }
        applyTheme(newTheme);
    };

    // Initialize on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const initialTheme = savedTheme || "system";
        setThemeState(initialTheme);
        applyTheme(initialTheme);
        setMounted(true);

        // Listen for system theme changes
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = () => {
            if (theme === "system") {
                applyTheme("system");
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Re-apply when theme changes
    useEffect(() => {
        if (mounted) {
            applyTheme(theme);
        }
    }, [theme, mounted]);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <ThemeContext.Provider value={{ theme: "system", resolvedTheme: "light", setTheme: () => { } }}>
                {children}
            </ThemeContext.Provider>
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
