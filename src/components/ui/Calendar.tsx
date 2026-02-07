"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ar } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/components/ui/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-3", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-bold text-primary-deep font-arabic-heading",
                nav: "space-x-1 flex items-center",
                nav_button: cn(
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity hover:bg-slate-100 rounded-full flex items-center justify-center text-primary-deep border border-slate-200"
                ),
                nav_button_previous: "absolute left-1 rtl:left-auto rtl:right-1",
                nav_button_next: "absolute right-1 rtl:right-auto rtl:left-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell:
                    "text-slate-500 rounded-md w-9 font-normal text-[0.8rem] font-arabic-body",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: cn(
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-slate-100 rounded-md transition-colors font-arabic-body text-primary-deep cursor-pointer flex items-center justify-center select-none"
                ),
                day_range_end: "day-range-end",
                day_selected:
                    "bg-secondary-gold text-white hover:bg-secondary-light hover:text-white focus:bg-secondary-gold focus:text-white",
                day_today: "bg-slate-100 text-primary-deep font-bold ring-1 ring-secondary-gold/50",
                day_outside:
                    "day-outside text-slate-400 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30",
                day_disabled: "text-slate-300 opacity-50 cursor-not-allowed hover:bg-transparent",
                day_range_middle:
                    "aria-selected:bg-slate-100 aria-selected:text-primary-deep",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                Chevron: ({ orientation }: { orientation?: "left" | "right" | "up" | "down" }) => {
                    if (orientation === "left") {
                        return <ChevronLeft className="h-4 w-4" />;
                    }
                    return <ChevronRight className="h-4 w-4" />;
                },
            }}
            locale={ar}
            dir="rtl"
            {...props}
        />
    );
}

