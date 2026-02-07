"use client";

import { use } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import {
    Calendar,
    Tag,
    ArrowRight,
    Share2,
    Printer,
    Facebook,
    Twitter,
    Clock,
    User,
} from "lucide-react";

// Mock news data - same as news page for consistency
const newsData = [
    {
        id: 1,
        title: "افتتاح معرض حلب الدولي للصناعات النسيجية 2026",
        excerpt: "تستعد غرفة تجارة حلب لاستضافة الدورة الجديدة من معرض الصناعات النسيجية بمشاركة أكثر من 200 شركة محلية ودولية...",
        content: `
            <p>تستعد غرفة تجارة حلب لاستضافة الدورة الجديدة من معرض الصناعات النسيجية الدولي، والذي سيُقام في الفترة من 15 إلى 20 مارس 2026 في مركز حلب الدولي للمعارض.</p>
            
            <h3>أهداف المعرض</h3>
            <p>يهدف المعرض إلى تعزيز مكانة حلب كمركز إقليمي رائد في صناعة النسيج، وفتح آفاق جديدة للتعاون بين الشركات المحلية والدولية. كما يسعى لاستعراض أحدث التقنيات والمعدات في مجال الصناعات النسيجية.</p>
            
            <h3>المشاركون</h3>
            <p>من المتوقع مشاركة أكثر من 200 شركة من 25 دولة، بما في ذلك شركات من تركيا، الصين، الهند، إيطاليا، وألمانيا. بالإضافة إلى مشاركة كبرى الشركات السورية الرائدة في هذا القطاع.</p>
            
            <h3>الفعاليات المصاحبة</h3>
            <ul>
                <li>ورش عمل متخصصة في تقنيات النسيج الحديثة</li>
                <li>ندوات حول الاستدامة في صناعة الأزياء</li>
                <li>عروض أزياء تستعرض أحدث التصاميم</li>
                <li>لقاءات B2B بين المصنعين والمستوردين</li>
            </ul>
            
            <h3>التسجيل</h3>
            <p>يمكن للراغبين بالمشاركة التسجيل عبر موقع غرفة التجارة أو زيارة مكتب المعارض والمؤتمرات. الموعد النهائي للتسجيل هو 28 فبراير 2026.</p>
        `,
        category: "events",
        date: "2026-02-05",
        author: "إدارة الإعلام",
        readTime: "5 دقائق",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
        featured: true,
    },
    {
        id: 2,
        title: "تعميم جديد بخصوص رسوم تجديد الاشتراك السنوي",
        excerpt: "صدر قرار جديد من مجلس الإدارة بتعديل رسوم تجديد الاشتراك السنوي للأعضاء اعتباراً من بداية العام المالي...",
        content: `
            <p>بناءً على قرار مجلس الإدارة رقم 145/2026 الصادر بتاريخ 1 فبراير 2026، تم تعديل رسوم تجديد الاشتراك السنوي للأعضاء.</p>
            
            <h3>الرسوم الجديدة</h3>
            <p>تم تحديد الرسوم الجديدة وفقاً لتصنيف العضوية على النحو التالي:</p>
            <ul>
                <li>العضوية الذهبية: 500,000 ل.س سنوياً</li>
                <li>العضوية الفضية: 300,000 ل.س سنوياً</li>
                <li>العضوية البرونزية: 150,000 ل.س سنوياً</li>
            </ul>
            
            <h3>موعد التطبيق</h3>
            <p>تسري الرسوم الجديدة اعتباراً من 1 مارس 2026، على أن يتم منح مهلة سماح حتى نهاية الشهر للتجديد بالرسوم القديمة.</p>
            
            <h3>طرق الدفع</h3>
            <p>يمكن تسديد الرسوم عبر الدفع الإلكتروني من خلال البوابة، أو نقداً في مقر الغرفة، أو التحويل البنكي.</p>
        `,
        category: "circulars",
        date: "2026-02-03",
        author: "الشؤون المالية",
        readTime: "3 دقائق",
        image: null,
        featured: false,
    },
    {
        id: 3,
        title: "دورة تدريبية في التجارة الإلكترونية والتسويق الرقمي",
        excerpt: "تنظم غرفة تجارة حلب دورة تدريبية مكثفة في مجال التجارة الإلكترونية بالتعاون مع خبراء دوليين...",
        content: `
            <p>تعلن غرفة تجارة حلب عن تنظيم دورة تدريبية مكثفة في مجال التجارة الإلكترونية والتسويق الرقمي، وذلك بالتعاون مع مؤسسة GIZ الألمانية.</p>
            
            <h3>تفاصيل الدورة</h3>
            <ul>
                <li><strong>المدة:</strong> 5 أيام (30 ساعة تدريبية)</li>
                <li><strong>التاريخ:</strong> 10-14 مارس 2026</li>
                <li><strong>المكان:</strong> قاعة التدريب في مبنى الغرفة</li>
                <li><strong>عدد المقاعد:</strong> 25 مقعد</li>
            </ul>
            
            <h3>محاور الدورة</h3>
            <ul>
                <li>أساسيات التجارة الإلكترونية</li>
                <li>إنشاء وإدارة المتاجر الإلكترونية</li>
                <li>التسويق عبر وسائل التواصل الاجتماعي</li>
                <li>تحليل البيانات واتخاذ القرارات</li>
                <li>أمان المعاملات الإلكترونية</li>
            </ul>
            
            <h3>الاشتراك</h3>
            <p>الدورة مجانية لأعضاء الغرفة. للتسجيل يرجى التواصل مع قسم التدريب أو التسجيل عبر البوابة الإلكترونية.</p>
        `,
        category: "training",
        date: "2026-02-01",
        author: "قسم التدريب",
        readTime: "4 دقائق",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
        featured: false,
    },
    {
        id: 4,
        title: "توقيع اتفاقية شراكة مع غرفة تجارة إسطنبول",
        excerpt: "وقّعت غرفة تجارة حلب اتفاقية تعاون استراتيجي مع نظيرتها في إسطنبول لتعزيز التبادل التجاري...",
        content: `
            <p>في خطوة استراتيجية لتعزيز العلاقات الاقتصادية، وقّعت غرفة تجارة حلب اتفاقية تعاون شاملة مع غرفة تجارة إسطنبول.</p>
            
            <h3>بنود الاتفاقية</h3>
            <ul>
                <li>تبادل المعلومات التجارية والاقتصادية</li>
                <li>تنظيم معارض ووفود تجارية مشتركة</li>
                <li>تسهيل إجراءات التصدير والاستيراد</li>
                <li>دعم رجال الأعمال في البلدين</li>
            </ul>
            
            <h3>الأهمية الاقتصادية</h3>
            <p>تُعد هذه الاتفاقية خطوة مهمة في مسار إعادة بناء العلاقات التجارية مع الشريك التركي، خاصة في ظل الموقع الاستراتيجي لحلب كبوابة للتجارة مع تركيا وأوروبا.</p>
        `,
        category: "announcements",
        date: "2026-01-28",
        author: "العلاقات الدولية",
        readTime: "4 دقائق",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200",
        featured: true,
    },
    {
        id: 5,
        title: "إعلان نتائج انتخابات مجلس الإدارة الجديد",
        excerpt: "أعلنت اللجنة الانتخابية عن نتائج انتخابات مجلس الإدارة للدورة الجديدة 2026-2030...",
        content: `
            <p>أعلنت اللجنة الانتخابية المشرفة على انتخابات غرفة تجارة حلب عن النتائج النهائية لانتخابات مجلس الإدارة للدورة 2026-2030.</p>
            
            <h3>أعضاء مجلس الإدارة المنتخبون</h3>
            <p>فاز بعضوية المجلس كل من السادة:</p>
            <ul>
                <li>م. أحمد الحلبي - رئيساً</li>
                <li>أ. محمد العطار - نائباً للرئيس</li>
                <li>م. خالد الشامي - أميناً للصندوق</li>
                <li>وستة أعضاء آخرين</li>
            </ul>
            
            <h3>نسبة المشاركة</h3>
            <p>بلغت نسبة المشاركة في الانتخابات 78% من إجمالي الأعضاء المؤهلين للتصويت، وهي نسبة مرتفعة تعكس اهتمام مجتمع الأعمال بمستقبل الغرفة.</p>
        `,
        category: "announcements",
        date: "2026-01-25",
        author: "اللجنة الانتخابية",
        readTime: "3 دقائق",
        image: null,
        featured: false,
    },
    {
        id: 6,
        title: "ورشة عمل: الفرص الاستثمارية في قطاع إعادة الإعمار",
        excerpt: "تدعو غرفة تجارة حلب المهتمين لحضور ورشة العمل التي ستناقش أهم الفرص الاستثمارية المتاحة...",
        content: `
            <p>تنظم غرفة تجارة حلب بالتعاون مع هيئة الاستثمار السورية ورشة عمل متخصصة حول الفرص الاستثمارية في قطاع إعادة الإعمار.</p>
            
            <h3>محاور الورشة</h3>
            <ul>
                <li>خريطة المشاريع ذات الأولوية في حلب</li>
                <li>التسهيلات والحوافز الاستثمارية</li>
                <li>الإطار القانوني للاستثمار</li>
                <li>قصص نجاح من مشاريع إعادة الإعمار</li>
            </ul>
            
            <h3>الفئة المستهدفة</h3>
            <p>الورشة موجهة لرجال الأعمال والمستثمرين المحليين والعرب المهتمين بالاستثمار في قطاعات البناء والتشييد والصناعة والسياحة.</p>
            
            <h3>التسجيل</h3>
            <p>للتسجيل يرجى زيارة مكتب الاستثمار في الغرفة أو التواصل عبر البريد الإلكتروني: investment@aleppo-chamber.org</p>
        `,
        category: "events",
        date: "2026-01-20",
        author: "مركز الاستثمار",
        readTime: "4 دقائق",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200",
        featured: false,
    },
];

const categories: Record<string, string> = {
    announcements: "إعلانات",
    circulars: "تعاميم",
    events: "فعاليات",
    training: "دورات تدريبية",
};

function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SY", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const news = newsData.find((item) => item.id === parseInt(id));

    if (!news) {
        return (
            <div className="min-h-screen bg-bg-surface flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">📰</div>
                    <h1 className="text-2xl font-bold text-primary-deep mb-2">الخبر غير موجود</h1>
                    <p className="text-slate-500 mb-6">عذراً، لم نتمكن من العثور على الخبر المطلوب</p>
                    <Link href="/news">
                        <Button>العودة للأخبار</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const relatedNews = newsData
        .filter((item) => item.category === news.category && item.id !== news.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title={categories[news.category]}
                subtitle={formatDate(news.date)}
                backgroundImage={news.image || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600"}
            />

            <div className="container mx-auto px-4 md:px-6 -mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <GlassCard className="bg-white p-8">
                            {/* Article Header */}
                            <div className="mb-8">
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {formatDate(news.date)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        {news.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {news.readTime}
                                    </span>
                                </div>

                                <h1 className="text-2xl md:text-3xl font-bold text-primary-deep font-arabic-heading leading-relaxed mb-4">
                                    {news.title}
                                </h1>

                                <span className="inline-flex items-center gap-1 bg-secondary-gold/10 text-secondary-gold px-3 py-1 rounded-full text-sm font-medium">
                                    <Tag className="w-4 h-4" />
                                    {categories[news.category]}
                                </span>
                            </div>

                            {/* Featured Image */}
                            {news.image && (
                                <div className="rounded-xl overflow-hidden mb-8">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-64 md:h-96 object-cover"
                                    />
                                </div>
                            )}

                            {/* Article Content */}
                            <div
                                className="prose prose-lg max-w-none text-slate-700 leading-relaxed
                                    prose-headings:text-primary-deep prose-headings:font-arabic-heading prose-headings:mt-8 prose-headings:mb-4
                                    prose-p:mb-4
                                    prose-ul:my-4 prose-ul:pr-6
                                    prose-li:mb-2"
                                dangerouslySetInnerHTML={{ __html: news.content }}
                            />

                            {/* Share & Actions */}
                            <div className="border-t border-slate-100 mt-8 pt-6 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-slate-500">شارك الخبر:</span>
                                    <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </button>
                                    <button className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-lg flex items-center justify-center transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </button>
                                    <button className="w-10 h-10 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg flex items-center justify-center transition-colors">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <button
                                    onClick={() => window.print()}
                                    className="flex items-center gap-2 text-slate-500 hover:text-primary-deep transition-colors"
                                >
                                    <Printer className="w-5 h-5" />
                                    <span>طباعة</span>
                                </button>
                            </div>
                        </GlassCard>

                        {/* Back Button */}
                        <Link href="/news" className="inline-flex items-center gap-2 mt-6 text-primary-deep hover:text-secondary-gold transition-colors font-medium">
                            <ArrowRight className="w-5 h-5" />
                            العودة إلى الأخبار
                        </Link>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Related News */}
                        {relatedNews.length > 0 && (
                            <GlassCard className="bg-white p-6">
                                <h3 className="font-bold text-primary-deep text-lg mb-4 border-r-4 border-secondary-gold pr-3">
                                    أخبار ذات صلة
                                </h3>
                                <div className="space-y-4">
                                    {relatedNews.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={`/news/${item.id}`}
                                            className="block group"
                                        >
                                            <div className="flex gap-3">
                                                {item.image ? (
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-20 h-16 object-cover rounded-lg shrink-0"
                                                    />
                                                ) : (
                                                    <div className="w-20 h-16 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center text-2xl">
                                                        📰
                                                    </div>
                                                )}
                                                <div>
                                                    <h4 className="text-sm font-medium text-slate-800 group-hover:text-secondary-gold transition-colors line-clamp-2">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-400 mt-1">{formatDate(item.date)}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </GlassCard>
                        )}

                        {/* Quick Links */}
                        <GlassCard className="bg-primary-deep/5 p-6 border-primary-deep/20">
                            <h3 className="font-bold text-primary-deep text-lg mb-4">روابط سريعة</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services" className="text-slate-600 hover:text-secondary-gold flex items-center gap-2 transition-colors text-sm">
                                        <span className="w-2 h-2 bg-secondary-gold rounded-full" />
                                        الخدمات الإلكترونية
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/booking" className="text-slate-600 hover:text-secondary-gold flex items-center gap-2 transition-colors text-sm">
                                        <span className="w-2 h-2 bg-secondary-gold rounded-full" />
                                        حجز موعد
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-slate-600 hover:text-secondary-gold flex items-center gap-2 transition-colors text-sm">
                                        <span className="w-2 h-2 bg-secondary-gold rounded-full" />
                                        تواصل معنا
                                    </Link>
                                </li>
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
    );
}
