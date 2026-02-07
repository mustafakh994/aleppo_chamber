import { cn } from "./Button";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
    return (
        <div className={cn("mb-12", centered && "text-center", className)}>
            {subtitle && (
                <span className="text-secondary-gold font-bold uppercase tracking-wider text-sm mb-2 block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold font-arabic-heading text-primary-deep mb-4 relative inline-block">
                {title}
                {!centered && (
                    <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-secondary-gold rounded-full rtl:right-0 rtl:left-auto ltr:left-0"></span>
                )}
            </h2>
            {centered && (
                <div className="w-24 h-1 bg-secondary-gold rounded-full mx-auto mt-2"></div>
            )}
        </div>
    );
}
