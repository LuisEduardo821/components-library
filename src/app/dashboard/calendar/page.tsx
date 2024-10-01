"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { es } from "date-fns/locale"


export default function CalendarPage() {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);
    const smallDate = date?.toLocaleString("es-Es", {
        weekday: "short",
        day: "numeric",
        month: "short",
    })
    return (
        <div className="flex flex-wrap gap-4">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
                disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
                weekStartsOn={1}
            />
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
                locale={es}
            />
            <Calendar
                mode="multiple"
                selected={multipleDates}
                onSelect={setMultipleDates}
                className="rounded-md border shadow"
            />
            <div>
                <h1 className="text-3xl">Informacion</h1>
                <div className="border-b"></div>
                <p>{smallDate}</p>
                <p>{multipleDates?.map(date => date.toLocaleDateString()).join(", ")}</p>
            </div>
        </div>
    )
}