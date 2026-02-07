"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
    id: "welcome",
    text: "أهلاً بك في غرفة تجارة حلب. أنا مساعدك الذكي 'مستشار'. كيف يمكنني مساعدتك اليوم؟",
    sender: "bot",
    timestamp: new Date()
};

const SUGGESTIONS = [
    "كيف يمكنني تجديد اشتراكي؟",
    "ما هي رسوم الانتساب؟",
    "أين يقع مقر الغرفة؟",
    "كيف أحصل على شهادة منشأ؟"
];

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [mounted, setMounted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    if (!mounted) return null;

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        // Add User Message
        const userMsg: Message = {
            id: Date.now().toString(),
            text: text,
            sender: "user",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        // Simulate Bot Response (Mock Logic)
        setTimeout(() => {
            let responseText = "عذراً، لم أفهم سؤالك تماماً. يمكنك التواصل مع قسم خدمة الأعضاء للمساعدة التفصيلية.";

            if (text.includes("تجديد") || text.includes("اشتراك")) {
                responseText = "يمكنك تجديد اشتراكك عبر بوابة الخدمات الإلكترونية في الموقع، أو زيارة مقر الغرفة. تأكد من إحضار الهوية الشخصية وبراءة ذمة مالية.";
            } else if (text.includes("رسوم") || text.includes("تكلفة")) {
                responseText = "تختلف رسوم الانتساب حسب درجة التصنيف (ممتازة، أولى، ثانية...). تبدأ الرسوم من 500,000 ل.س سنوياً للدرجة الرابعة.";
            } else if (text.includes("مقر") || text.includes("عنوان") || text.includes("موقع")) {
                responseText = "يقع مقر غرفة تجارة حلب في منطقة السبع بحرات، جانب فندق سياحة حلب. نستقبلكم من الأحد إلى الخميس، الساعة 9 صباحاً حتى 3 ظهراً.";
            } else if (text.includes("شهادة") || text.includes("منشأ")) {
                responseText = "للحصول على شهادة منشأ، يجب تقديم الفاتورة التجارية وقوائم التعبئة. يمكنك تقديم الطلب إلكترونياً عبر صفحة 'خدمات الأعضاء' > 'شهادات المنشأ'.";
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50 font-arabic-body">
            {/* Chat Window - positioned above the button */}
            {isOpen && (
                <div className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden w-[350px] md:w-[380px] animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Header */}
                    <div className="bg-primary-deep p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative">
                                <Bot className="w-6 h-6" />
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-primary-deep"></div>
                            </div>
                            <div>
                                <h3 className="font-bold font-arabic-heading">المساعد الذكي - مستشار</h3>
                                <p className="text-xs text-slate-300">متاح للمساعدة الفورية</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="h-[350px] overflow-y-auto p-4 bg-slate-50 space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={cn("flex gap-3 max-w-[85%]", msg.sender === 'user' ? "mr-auto flex-row-reverse" : "")}>
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                    msg.sender === 'user' ? "bg-secondary-gold text-primary-deep" : "bg-primary-deep text-white"
                                )}>
                                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                </div>
                                <div className={cn(
                                    "p-3 rounded-2xl text-sm leading-relaxed",
                                    msg.sender === 'user'
                                        ? "bg-secondary-gold text-primary-deep rounded-tr-none"
                                        : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"
                                )}>
                                    {msg.text}
                                    <span className="text-[10px] opacity-50 block mt-1 text-right">
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex gap-3 max-w-[85%] animate-pulse">
                                <div className="w-8 h-8 rounded-full bg-primary-deep text-white flex items-center justify-center shrink-0">
                                    <Bot className="w-4 h-4" />
                                </div>
                                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1 items-center h-10">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions (Only if 1 msg) */}
                    {messages.length === 1 && (
                        <div className="p-2 bg-slate-50 flex gap-2 overflow-x-auto pb-4 px-4 scrollbar-hide">
                            {SUGGESTIONS.map((suggestion, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleSendMessage(suggestion)}
                                    className="whitespace-nowrap px-3 py-1.5 bg-white border border-secondary-gold/30 text-primary-deep text-xs rounded-full hover:bg-secondary-gold hover:text-white transition-colors shadow-sm"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                            placeholder="اكتب سؤالك هنا..."
                            className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-secondary-gold transition-colors"
                        />
                        <Button
                            size="icon"
                            onClick={() => handleSendMessage(inputText)}
                            disabled={!inputText.trim()}
                            className="rounded-full w-10 h-10 bg-primary-deep hover:bg-secondary-gold shrink-0"
                        >
                            <Send className="w-4 h-4 rtl:rotate-180" />
                        </Button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center w-16 h-16 bg-secondary-gold text-primary-deep rounded-full shadow-xl hover:bg-primary-deep hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="فتح المحادثة"
            >
                {isOpen ? (
                    <X className="w-7 h-7" />
                ) : (
                    <>
                        <MessageCircle className="w-7 h-7" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                        </span>
                    </>
                )}
            </button>
        </div>
    );
}

