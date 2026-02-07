import { DashboardSidebar } from "@/components/dashboard/Sidebar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-50" dir="rtl">
            <DashboardSidebar />
            <main className="flex-1 p-8 overflow-y-auto h-screen">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-6">
                        <Breadcrumbs />
                    </div>
                    {children}
                </div>
            </main>
        </div>
    );
}
