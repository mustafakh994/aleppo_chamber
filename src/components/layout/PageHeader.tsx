import { cn } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
    return (
        <div className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center mb-12">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${backgroundImage || "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop"}')` }}
            ></div>
            <div className="absolute inset-0 bg-primary-deep/80 backdrop-blur-sm"></div>

            <div className="relative z-10 text-center space-y-4 px-4">
                <h1 className="text-4xl md:text-5xl font-bold font-arabic-heading text-white">{title}</h1>
                {subtitle && (
                    <p className="text-xl text-slate-200 font-arabic-body max-w-2xl mx-auto">{subtitle}</p>
                )}
            </div>

            {/* Breadcrumbs Overlay */}
            {/* Bottom Breadcrumbs */}
            <div className="absolute bottom-4 w-full z-20 flex justify-center">
                <Breadcrumbs variant="on-dark" className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full" />
            </div>
        </div>
    );
}
