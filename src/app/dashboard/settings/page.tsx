"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Bell, Lock, Globe, Moon, Save, UserCog } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const [notifications, setNotifications] = useState({
        email: true,
        sms: true,
        newsletter: true
    });

    return (
        <div className="space-y-8">
            <SectionHeading
                title="الإعدادات"
                description="تخصيص تفضيلات الحساب والإشعارات والأمان."
            />

            <div className="space-y-6">
                {/* Account Preferences */}
                <GlassCard className="p-6 bg-white border border-slate-100">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                        <UserCog className="w-5 h-5 text-secondary-gold" />
                        <h3 className="font-bold text-primary-deep text-lg">تفضيلات الحساب</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                            <div className="flex items-center gap-3">
                                <Globe className="w-5 h-5 text-slate-400" />
                                <div>
                                    <p className="font-bold text-slate-700">لغة الواجهة</p>
                                    <p className="text-xs text-slate-400">اللغة المستخدمة في لوحة التحكم</p>
                                </div>
                            </div>
                            <select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-secondary-gold">
                                <option value="ar">العربية (Arabic)</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </div>
                </GlassCard>

                {/* Notifications */}
                <GlassCard className="p-6 bg-white border border-slate-100">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                        <Bell className="w-5 h-5 text-secondary-gold" />
                        <h3 className="font-bold text-primary-deep text-lg">الإشعارات</h3>
                    </div>

                    <div className="space-y-4">
                        {[
                            { key: 'email', label: 'إشعارات البريد الإلكتروني', desc: 'استلام تحديثات الطلبات والفواتير عبر البريد' },
                            { key: 'sms', label: 'رسائل نصية SMS', desc: 'إشعارات عاجلة عند تغيير حالة الطلب' },
                            { key: 'newsletter', label: 'النشرة البريدية', desc: 'أخبار الغرفة والفرص الاستثمارية' }
                        ].map((item) => (
                            <div key={item.key} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                <div>
                                    <p className="font-bold text-slate-700">{item.label}</p>
                                    <p className="text-xs text-slate-400">{item.desc}</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={(notifications as any)[item.key]}
                                        onChange={() => setNotifications({ ...notifications, [item.key]: !(notifications as any)[item.key] })}
                                    />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-gold"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </GlassCard>

                {/* Security */}
                <GlassCard className="p-6 bg-white border border-slate-100">
                    <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                        <Lock className="w-5 h-5 text-secondary-gold" />
                        <h3 className="font-bold text-primary-deep text-lg">الأمان وكلمة المرور</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">كلمة المرور الحالية</label>
                            <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-secondary-gold" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">كلمة المرور الجديدة</label>
                            <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-secondary-gold" />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600">
                            تغيير كلمة المرور
                        </Button>
                    </div>
                </GlassCard>

                {/* Save Actions */}
                <div className="flex justify-end pt-4">
                    <Button className="min-w-[150px]">
                        <Save className="w-4 h-4 ml-2" />
                        حفظ التغييرات
                    </Button>
                </div>
            </div>
        </div>
    );
}
