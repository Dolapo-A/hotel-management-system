/* eslint-disable react/prop-types */
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
	className,
	classNames,
	showOutsideDays = false,
	...props
}: CalendarProps) {
	return (
		<DayPicker
			showOutsideDays={showOutsideDays}
			className={cn("p-3", className)}
			classNames={{
				months: "flex flex-row gap-10",
				month: "space-y-4",
				caption: "flex justify-center pt-1 relative items-center",
				caption_label: "font-medium",
				nav: "space-x-1 flex items-center",
				nav_button: cn(buttonVariants({ variant: "custom" }), "h-7 w-7 p-4"),
				nav_button_previous: "absolute left-1",
				nav_button_next: "absolute right-1",
				table: "w-full border-collapse space-y-1",
				head_row: "flex w-full justify-between",
				head_cell:
					"text-grey-500 rounded-md w-14 font-normal text-[1rem] dark:text-grey-400",
				row: "flex w-full mt-1 justify-between",
				cell: "h-14 w-14 text-center text-2xl p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-brand-500 [&:has([aria-selected])]:bg-brand-500 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-brand-500 dark:[&:has([aria-selected])]:bg-brand-500",
				day: cn(
					buttonVariants({ variant: "date" }),
					"h-14 w-14 p-0 font-normal aria-selected:opacity-100"
				),
				day_range_end: "day-range-end",
				day_selected:
					"bg-brand-100 text-neutral-50 hover:bg-brand-900 hover:text-neutral-50 focus:bg-brand-900 focus:text-neutral-50 dark:bg-brand-100 dark:text-brand-900 dark:hover:bg-brand-100 dark:hover:text-brand-700 dark:focus:bg-brand-100 dark:focus:text-brand-900",
				day_today:
					"text-brand-900 dark:!bg-brand-700 dark:text-neutral-50",
				day_outside:
					"day-outside text-grey-500 aria-selected:bg-brand-100/50 aria-selected:text-grey-500 dark:text-grey-400 dark:aria-selected:bg-brand-500 dark:aria-selected:text-grey-0",
				day_disabled: "text-grey-500 opacity-50 dark:text-grey-400",
				day_range_middle:
					"aria-selected:bg-brand-500 aria-selected:text-grey-900 dark:aria-selected:!bg-brand-500 dark:!aria-selected:text-grey-100",
				day_hidden: "invisible",
				
				...classNames,
			}}
			components={{
				IconLeft: ({ className, ...props }) => (
					<ChevronLeft className={cn("h-6 w-6", className)} {...props} />
				),
				IconRight: ({ className, ...props }) => (
					<ChevronRight className={cn("h-6 w-6", className)} {...props} />
				),
			}}
			{...props}
		/>
	);
}
Calendar.displayName = "Calendar";

export { Calendar };
