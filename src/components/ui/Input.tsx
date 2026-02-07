import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, icon, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        ref={ref}
                        className={cn(
                            "w-full h-11 rounded-lg border bg-white px-4 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-gold disabled:cursor-not-allowed disabled:opacity-50",
                            error ? "border-red-500 focus-visible:ring-red-500" : "border-slate-200 focus-visible:border-secondary-gold",
                            icon ? "ltr:pl-10 rtl:pr-10" : "",
                            className
                        )}
                        {...props}
                    />
                    {icon && (
                        <div className="absolute left-3 top-3 text-slate-400 ltr:left-3 ltr:right-auto rtl:right-3 rtl:left-auto">
                            {icon}
                        </div>
                    )}
                </div>
                {error && (
                    <p className="text-xs text-red-500">{error}</p>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
