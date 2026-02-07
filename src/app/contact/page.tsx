"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/context/ToastContext";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Loader2,
    Facebook,
    Linkedin,
    Youtube,
    ExternalLink,
} from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        title: "العنوان",
        details: ["حلب - ساحة سعد الله الجابري", "بناء غرفة تجارة حلب"],
        color: "bg-red-50 text-red-600",
    },
    {
        icon: Phone,
        title: "الهاتف",
        details: ["+963 21 221 4433", "+963 21 221 5566"],
        color: "bg-green-50 text-green-600",
    },
    {
        icon: Mail,
        title: "البريد الإلكتروني",
        details: ["info@aleppo-chamber.org", "support@aleppo-chamber.org"],
        color: "bg-blue-50 text-blue-600",
    },
    {
        icon: Clock,
        title: "ساعات العمل",
        details: ["الأحد - الخميس: 8:00 ص - 3:00 م", "الجمعة والسبت: مغلق"],
        color: "bg-orange-50 text-orange-600",
    },
];

const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-700" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
];

export default function ContactPage() {
    const { showToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            showToast("يرجى ملء جميع الحقول المطلوبة", "warning");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        showToast("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً", "success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-bg-surface pb-20">
            <PageHeader
                title="تواصل معنا"
                subtitle="نحن هنا لخدمتك والإجابة على استفساراتك"
                backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600"
            />

            <div className="container mx-auto px-4 md:px-6">
                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-12 relative z-10 mb-16">
                    {contactInfo.map((item, index) => (
                        <GlassCard key={index} className="bg-white p-6 text-center shadow-xl">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${item.color}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-primary-deep mb-2">{item.title}</h3>
                            {item.details.map((detail, i) => (
                                <p key={i} className="text-slate-500 text-sm">{detail}</p>
                            ))}
                        </GlassCard>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <SectionHeading
                            title="أرسل لنا رسالة"
                            subtitle="سنرد عليك في أقرب وقت ممكن"
                        />

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        الاسم الكامل <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold outline-none"
                                        placeholder="أدخل اسمك"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        البريد الإلكتروني <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold outline-none"
                                        placeholder="example@email.com"
                                        dir="ltr"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        رقم الهاتف
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold outline-none"
                                        placeholder="+963 21 XXX XXXX"
                                        dir="ltr"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">
                                        الموضوع
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold outline-none bg-white"
                                    >
                                        <option value="">اختر الموضوع</option>
                                        <option value="membership">استفسار عن العضوية</option>
                                        <option value="services">استفسار عن الخدمات</option>
                                        <option value="investment">فرص الاستثمار</option>
                                        <option value="complaint">شكوى أو اقتراح</option>
                                        <option value="other">أخرى</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">
                                    الرسالة <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-secondary-gold focus:border-secondary-gold outline-none resize-none"
                                    placeholder="اكتب رسالتك هنا..."
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        جاري الإرسال...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <Send className="w-5 h-5" />
                                        إرسال الرسالة
                                    </span>
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Map & Additional Info */}
                    <div>
                        <SectionHeading
                            title="موقعنا"
                            subtitle="زورونا في مقر غرفة التجارة"
                        />

                        {/* Map Placeholder */}
                        <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                            <div className="bg-slate-100 h-72 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                                    <p className="text-slate-500 font-medium">خريطة الموقع</p>
                                    <p className="text-slate-400 text-sm mt-1">حلب - ساحة سعد الله الجابري</p>
                                    <a
                                        href="https://maps.google.com/?q=Aleppo+Chamber+of+Commerce"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 text-primary-deep hover:text-secondary-gold font-medium text-sm"
                                    >
                                        افتح في خرائط جوجل
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h3 className="font-bold text-primary-deep mb-4">تابعنا على</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 ${social.color} hover:text-white transition-all`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <GlassCard className="bg-primary-deep/5 p-6 mt-8 border-primary-deep/20">
                            <h3 className="font-bold text-primary-deep mb-4">روابط سريعة</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="/services" className="text-slate-600 hover:text-secondary-gold flex items-center gap-2 transition-colors">
                                        <span className="w-2 h-2 bg-secondary-gold rounded-full" />
                                        الخدمات الإلكترونية
                                    </a>
                                </li>
                                <li>
                                    <a href="/booking" className="text-slate-600 hover:text-secondary-gold flex items-center gap-2 transition-colors">
                                        <span className="w-2 h-2 bg-secondary-gold rounded-full" />
                                        حجز موعد
                                    </a>
                                </li>
                                <li>
                                    <a href="/directory" className="text-slate-600 hover:text-secondary-gold flex items-center gap-2 transition-colors">
                                        <span className="w-2 h-2 bg-secondary-gold rounded-full" />
                                        دليل الشركات
                                    </a>
                                </li>
                            </ul>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
    );
}
