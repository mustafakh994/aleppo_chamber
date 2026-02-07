"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { ChevronLeft, Home } from "lucide-react";

import { cn } from "@/lib/utils";

const routeNameMap: Record<string, string> = {
    // ... (map remains same)
    // Main Pages
    "dashboard": "لوحة التحكم",
    "directory": "دليل الشركات",
    "services": "الخدمات",
    "investment": "الاستثمار",
    "about": "عن الغرفة",
    "media": "المركز الإعلامي",
    "contact": "اتصل بنا",

    // Sub Pages
    "partners": "شركاء الاستثمار",
    "renewal": "تجديد العضوية",
    "certificate": "شهادة المنشأ",
    "verification": "التحقق من الوثائق",
    "booking": "حجز المواعيد",

    // Dashboard Sub Pages
    "profile": "الملف الشخصي",
    "requests": "الطلبات",
    "payments": "المدفوعات",
    "documents": "الوثائق",
    "settings": "الإعدادات",
};

interface BreadcrumbsProps {
    className?: string;
    variant?: "default" | "on-dark";
}

export function Breadcrumbs({ className, variant = "default" }: BreadcrumbsProps) {
    const pathname = usePathname();
    const cleanPathname = pathname.split("?")[0];
    const pathSegments = cleanPathname.split("/").filter((segment) => segment);

    // Color Maps
    const colors = {
        default: {
            text: "text-slate-500",
            separator: "text-slate-400",
            active: "text-primary-deep",
            hover: "hover:text-primary-deep",
            home: "text-slate-500 hover:text-primary-deep"
        },
        "on-dark": {
            text: "text-slate-200",
            separator: "text-white/40",
            active: "text-white font-bold",
            hover: "hover:text-white",
            home: "text-white/80 hover:text-white"
        }
    };

    const style = colors[variant];

    // Generate JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": pathSegments.map((segment, index) => {
            const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const name = routeNameMap[segment] || segment;
            return {
                "@type": "ListItem",
                "position": index + 2, // 1 is Home
                "name": name,
                "item": `${process.env.NEXT_PUBLIC_BASE_URL || ''}${url}`
            };
        }).concat([
            {
                "@type": "ListItem",
                "position": 1,
                "name": "الرئيسية",
                "item": `${process.env.NEXT_PUBLIC_BASE_URL || ''}/`
            }
        ]).sort((a, b) => a.position - b.position)
    };

    if (pathname === "/") return null;

    return (
        <nav aria-label="Breadcrumb" className={cn(className)}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ol className={cn("flex items-center gap-1 text-sm transition-colors", style.text)}>
                <li>
                    <Link
                        href="/"
                        className={cn("flex items-center gap-1 transition-colors", style.home)}
                        title="الرئيسية"
                    >
                        <Home className="w-4 h-4" />
                    </Link>
                </li>

                {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1;
                    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const displayName = routeNameMap[segment] || segment;

                    return (
                        <Fragment key={href}>
                            <li>
                                <ChevronLeft className={cn("w-4 h-4 rtl:rotate-180", style.separator)} />
                            </li>
                            <li>
                                {isLast ? (
                                    <span className={cn("transition-colors", style.active)} aria-current="page">
                                        {displayName}
                                    </span>
                                ) : (
                                    <Link
                                        href={href}
                                        className={cn("transition-colors", style.hover)}
                                    >
                                        {displayName}
                                    </Link>
                                )}
                            </li>
                        </Fragment>
                    );
                })}
            </ol>
        </nav>
    );
}
