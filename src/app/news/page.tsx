"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
    Calendar,
    Tag,
    ArrowLeft,
    Search,
    Filter,
} from "lucide-react";
import Link from "next/link";

const categories = [
    { id: "all", label: "الكل" },
    { id: "announcements", label: "إعلانات" },
    { id: "circulars", label: "تعاميم" },
    { id: "events", label: "فعاليات" },
    { id: "training", label: "دورات تدريبية" },
];

const newsItems = [
    {
        id: 1,
        title: "افتتاح معرض حلب الدولي للصناعات النسيجية 2026",
        excerpt: "تستعد غرفة تجارة حلب لاستضافة الدورة الجديدة من معرض الصناعات النسيجية بمشاركة أكثر من 200 شركة محلية ودولية...",
        category: "events",
        date: "2026-02-05",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        featured: true,
    },
    {
        id: 2,
        title: "تعميم جديد بخصوص رسوم تجديد الاشتراك السنوي",
        excerpt: "صدر قرار جديد من مجلس الإدارة بتعديل رسوم تجديد الاشتراك السنوي للأعضاء اعتباراً من بداية العام المالي...",
        category: "circulars",
        date: "2026-02-03",
        image: null,
        featured: false,
    },
    {
        id: 3,
        title: "دورة تدريبية في التجارة الإلكترونية والتسويق الرقمي",
        excerpt: "تنظم غرفة تجارة حلب دورة تدريبية مكثفة في مجال التجارة الإلكترونية بالتعاون مع خبراء دوليين...",
        category: "training",
        date: "2026-02-01",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        featured: false,
    },
    {
        id: 4,
        title: "توقيع اتفاقية شراكة مع غرفة تجارة إسطنبول",
        excerpt: "وقّعت غرفة تجارة حلب اتفاقية تعاون استراتيجي مع نظيرتها في إسطنبول لتعزيز التبادل التجاري...",
        category: "announcements",
        date: "2026-01-28",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
        featured: true,
    },
    {
        id: 5,
        title: "إعلان نتائج انتخابات مجلس الإدارة الجديد",
        excerpt: "أعلنت اللجنة الانتخابية عن نتائج انتخابات مجلس الإدارة للدورة الجديدة 2026-2030...",
        category: "announcements",
        date: "2026-01-25",
        image: null,
        featured: false,
    },
    {
        id: 6,
        title: "ورشة عمل: الفرص الاستثمارية في قطاع إعادة الإعمار",
        excerpt: "تدعو غرفة تجارة حلب المهتمين لحضور ورشة العمل التي ستناقش أهم الفرص الاستثمارية المتاحة...",
        category: "events",
        date: "2026-01-20",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
        featured: false,
    },
];

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SY", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function getCategoryLabel(categoryId: string) {
    return categories.find((c) => c.id === categoryId)?.label || categoryId;
}

export default function NewsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredNews = newsItems.filter((item) => {
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        const matchesSearch = item.title.includes(searchQuery) || item.excerpt.includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    const featuredNews = filteredNews.filter((item) => item.featured);
    const regularNews = filteredNews.filter((item) => !item.featured);

    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="الأخبار والإعلانات"
                subtitle="آخر المستجدات والتعاميم من غرفة تجارة حلب"
                backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600"
            />

            <div className="container mx-auto px-4 md:px-6">
                {/* Search and Filter */}
                <div className="bg-white rounded-2xl shadow-lg p-6 -mt-10 relative z-10 mb-12">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="ابحث في الأخبار..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold outline-none"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <Filter className="w-5 h-5 text-slate-400" />
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category.id
                                            ? "bg-primary-deep text-white shadow-md"
                                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Featured News */}
                {featuredNews.length > 0 && (
                    <div className="mb-12">
                        <SectionHeading title="أخبار مميزة" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {featuredNews.map((item) => (
                                <Link key={item.id} href={`/news/${item.id}`}>
                                    <GlassCard className="bg-white overflow-hidden group hover:shadow-xl transition-all h-full">
                                        {item.image && (
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {formatDate(item.date)}
                                                </span>
                                                <span className="flex items-center gap-1 text-secondary-gold">
                                                    <Tag className="w-4 h-4" />
                                                    {getCategoryLabel(item.category)}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-primary-deep mb-3 group-hover:text-secondary-gold transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm line-clamp-2">{item.excerpt}</p>
                                            <div className="mt-4 flex items-center text-primary-deep font-medium text-sm group-hover:text-secondary-gold transition-colors">
                                                اقرأ المزيد
                                                <ArrowLeft className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </GlassCard>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Regular News Grid */}
                <div>
                    <SectionHeading title="جميع الأخبار" />

                    {regularNews.length === 0 ? (
                        <div className="text-center py-16 bg-white rounded-2xl mt-6">
                            <div className="text-6xl mb-4">📰</div>
                            <h3 className="text-xl font-bold text-slate-700 mb-2">لا توجد أخبار</h3>
                            <p className="text-slate-500">لم يتم العثور على أخبار تطابق معايير البحث</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {regularNews.map((item) => (
                                <Link key={item.id} href={`/news/${item.id}`}>
                                    <GlassCard className="bg-white p-6 group hover:shadow-lg hover:border-secondary-gold/30 transition-all h-full">
                                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(item.date)}
                                            </span>
                                            <span className="bg-primary-deep/10 text-primary-deep px-2 py-1 rounded">
                                                {getCategoryLabel(item.category)}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-primary-deep mb-2 group-hover:text-secondary-gold transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm line-clamp-3">{item.excerpt}</p>
                                    </GlassCard>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <Button variant="outline" size="lg">
                        تحميل المزيد
                    </Button>
                </div>
            </div>
        </div>
    );
}
