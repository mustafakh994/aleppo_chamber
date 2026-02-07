"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    company: string;
    membershipStatus: "active" | "pending" | "expired";
    membershipExpiry: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    register: (data: RegisterData) => Promise<boolean>;
}

interface RegisterData {
    email: string;
    password: string;
    companyName: string;
    registrationNumber: string;
    sector: string;
    phone: string;
    address: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// Mock user for demo purposes
const MOCK_USER: User = {
    id: "1",
    name: "شركة النسيج العصرية",
    email: "info@textile-modern.sy",
    company: "شركة النسيج العصرية",
    membershipStatus: "active",
    membershipExpiry: "2026-12-31",
};

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = useCallback(async (email: string, password: string): Promise<boolean> => {
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock validation - accept any email/password for demo
        if (email && password.length >= 6) {
            setUser(MOCK_USER);
            setIsLoading(false);
            return true;
        }

        setIsLoading(false);
        return false;
    }, []);

    const logout = useCallback(() => {
        setUser(null);
    }, []);

    const register = useCallback(async (data: RegisterData): Promise<boolean> => {
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Mock registration - always succeed for demo
        if (data.email && data.password && data.companyName) {
            setUser({
                ...MOCK_USER,
                email: data.email,
                name: data.companyName,
                company: data.companyName,
            });
            setIsLoading(false);
            return true;
        }

        setIsLoading(false);
        return false;
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
                register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
