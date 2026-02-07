"use client";

import Calendar from "react-calendar";
import { useState } from "react";
import "./Calendar.css"; // Import the custom styles
import { format } from "date-fns";
import { ar } from "date-fns/locale";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface BookingCalendarProps {
    onChange?: (date: Date) => void;
    value?: Date;
}

export function BookingCalendar({ onChange, value }: BookingCalendarProps) {
    // Internal state if no value prop is provided, acting as uncontrolled component by default
    const [date, setDate] = useState<Value>(value || new Date());

    const handleChange = (newValue: Value) => {
        setDate(newValue);
        if (onChange && newValue instanceof Date) {
            onChange(newValue);
        }
    };

    return (
        <div className="w-full">
            <Calendar
                onChange={handleChange}
                value={date}
                locale="ar"
                calendarType="gregory"
                view="month"
                minDate={new Date()}
                next2Label={null} // Hide double arrow
                prev2Label={null} // Hide double arrow
                formatShortWeekday={(locale, date) => format(date, "EEEE", { locale: ar })} // Force full day name but rely on CSS to fit it, OR use "EE" for shorter. User complained names are "cutted", usually means hidden overflow.
                className="rounded-2xl w-full border-none shadow-none"
            />
        </div>
    );
}
