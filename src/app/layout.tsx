import type { Metadata } from "next";
import { Amiri, Tajawal, Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ToastProvider } from "@/context/ToastContext";
import { AuthProvider } from "@/context/AuthContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aleppo Chamber of Commerce",
  description: "Aleppo Chamber of Commerce Global Digital Portal - أصالة التاريخ.. ذكاء المستقبل",
};

import { ChatWidget } from "@/components/chat/ChatWidget";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${amiri.variable} ${tajawal.variable} ${ibmPlex.variable} font-sans bg-bg-surface`}>
        <ToastProvider>
          <AuthProvider>
            <LanguageProvider>
              <Header />
              <main className="min-h-screen pt-20">
                {children}
              </main>
              <ChatWidget />
              <Footer />
            </LanguageProvider>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}


