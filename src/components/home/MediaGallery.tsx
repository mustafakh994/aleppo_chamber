import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ZoomIn } from "lucide-react";
import Image from "next/image";

const images = [
    { src: "/chamber/chamber-1.jpeg", height: "h-64", title: "مبنى الغرفة" },
    { src: "/chamber/chamber-2.jpeg", height: "h-40", title: "قاعة الاجتماعات" },
    { src: "/chamber/chamber-3.jpeg", height: "h-80", title: "نشاطات الغرفة" },
    { src: "/chamber/chamber-2.jpeg", height: "h-52", title: "الاجتماعات الدورية" },
    { src: "/chamber/chamber-3.jpeg", height: "h-60", title: "الوفود الرسمية" },
    { src: "/chamber/chamber-1.jpeg", height: "h-48", title: "المقر الرئيسي" },
];

export function MediaGallery() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="معرض الوسائط" subtitle="Media Gallery" centered />

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-12">
                    {images.map((img, index) => (
                        <div key={index} className={`break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer shadow-md ${img.height}`}>
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
