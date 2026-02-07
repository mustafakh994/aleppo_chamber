import { ReactNode } from "react";
import { cn } from "./Button"; // Re-export cn or just import utility

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card p-6 md:p-8",
                hoverEffect && "transition-transform hover:-translate-y-2 hover:shadow-2xl",
                className
            )}
        >
            {children}
        </div>
    );
}
