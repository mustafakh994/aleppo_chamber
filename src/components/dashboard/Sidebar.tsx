"use client";

import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    User,
    ClipboardList,
    CreditCard,
    FileText,
    Settings,
    LogOut,
    ChevronRight,
    ChevronLeft
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard className="w-5 h-5" />, href: "/dashboard" },
    { label: "ملفي الشخصي", icon: <User className="w-5 h-5" />, href: "/dashboard/profile" },
    { label: "طلباتي", icon: <ClipboardList className="w-5 h-5" />, href: "/dashboard/requests" },
    { label: "الدفعات المالية", icon: <CreditCard className="w-5 h-5" />, href: "/dashboard/payments" },
    { label: "المستندات", icon: <FileText className="w-5 h-5" />, href: "/dashboard/documents" },
    { label: "الإعدادات", icon: <Settings className="w-5 h-5" />, href: "/dashboard/settings" },
];

export function DashboardSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={cn(
            "bg-white border-l border-slate-200 h-screen sticky top-0 transition-all duration-300 flex flex-col z-40 hidden md:flex",
            collapsed ? "w-20" : "w-72"
        )}>
            {/* Header / Toggle */}
            <div className="h-16 flex items-center justify-between px-4 border-b border-slate-100">
                {!collapsed && (
                    <span className="font-bold text-primary-deep font-arabic-heading text-lg">بوابة الأعضاء</span>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors"
                >
                    {collapsed ? <ChevronLeft className="w-5 h-5 rtl:rotate-180" /> : <ChevronRight className="w-5 h-5 rtl:rotate-180" />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-6 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative",
                                isActive
                                    ? "bg-primary-deep text-white shadow-md shadow-primary-deep/20"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-primary-deep"
                            )}
                        >
                            <span className={cn(isActive ? "text-secondary-gold" : "text-slate-400 group-hover:text-primary-deep")}>
                                {item.icon}
                            </span>

                            {!collapsed && (
                                <span className="font-medium font-arabic-body">{item.label}</span>
                            )}

                            {/* Active Indicator Strip (only visible when not collapsed and active) */}
                            {isActive && !collapsed && (
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-secondary-gold rounded-l-full"></div>
                            )}
                        </Link>
                    )
                })}
            </nav>

            {/* User Profile / Logout */}
            <div className="p-4 border-t border-slate-100">
                <button className={cn(
                    "flex items-center w-full gap-3 px-3 py-3 rounded-lg text-red-500 hover:bg-red-50 transition-colors",
                    collapsed && "justify-center"
                )}>
                    <LogOut className="w-5 h-5" />
                    {!collapsed && <span className="font-bold">تسجيل الخروج</span>}
                </button>
            </div>
        </aside>
    );
}
