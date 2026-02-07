import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ZoomIn } from "lucide-react";

const images = [
    { src: "/aleppo_souq_market.png", height: "h-64", title: "أسواق حلب القديمة" },
    { src: "/aleppo_textile_factory.jpg", height: "h-40", title: "صناعة النسيج" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1770&auto=format&fit=crop", height: "h-80", title: "اجتماعات مجلس الإدارة" },
    { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1770&auto=format&fit=crop", height: "h-52", title: "المدينة الصناعية (الشيخ نجار)" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop", height: "h-60", title: "توقيع اتفاقيات" },
    { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1770&auto=format&fit=crop", height: "h-48", title: "فريق العمل" },
];

export function MediaGallery() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="معرض الوسائط" subtitle="Media Gallery" centered />

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
                    {images.map((img, index) => (
                        <div key={index} className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer shadow-md">
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <ZoomIn className="w-8 h-8 mx-auto mb-2 text-secondary-gold" />
                                    <h4 className="font-bold font-arabic-heading">{img.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
