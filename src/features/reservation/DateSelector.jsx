/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { DayPicker } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import "react-datepicker/dist/react-datepicker.css";
import {
	differenceInDays,
	isPast,
	isSameDay,
	isWithinInterval,
	startOfDay,
} from "date-fns";
import Button from "../../ui/Button";
import { useReservation } from "./ReservationContext";
import { formatCurrency } from "../../utils/helpers";

const StyledDateSelector = styled.div`
	display: flex;
	flex-direction: column;
`;

const PriceBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
	background-color: var(--color-brand-500);
	border-top: none;

	color: var(--color-brand-50);
	height: 60px;
`;

const PriceInfo = styled.div`
	display: flex;
	align-items: baseline;
	gap: 1.5rem;

	h3 {
		font-size: 2rem;
	}

	h4 {
		font-size: 1.2rem;
		font-weight: 100;
		text-decoration: line-through;
		color: var(--color-red-700);
	}

	h2 {
		font-size: 1.6rem;
		font-weight: 100;
		align-self: baseline;
	}

	p {
		font-size: 1.2rem;
	}
`;

const Price = styled.p`
	display: flex;
	gap: 0.5rem;
	align-items: baseline;
`;

const NightsMultiplier = styled.p`
	padding: 0.5rem 0.75rem;
	background-color: var(--color-brand-500);
	font-size: 1.5rem;
`;

function isAlreadyBooked(range, datesArr) {
	return (
		range?.from &&
		range?.to &&
		datesArr.some((date) =>
			isWithinInterval(date, { start: range.from, end: range.to })
		)
	);
}

function DateSelector({ settings, room, bookedDates }) {
	const { minBookingLength, maxBookingLength } = settings;

	const { range, setRange, resetRange } = useReservation();
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

	const { regularPrice, discount } = room;

	const numNights =
		range?.from && range?.to
			? Math.max(1, differenceInDays(range.to, range.from))
			: 0;

	const cabinPrice = numNights * (regularPrice - discount);

	const isDisabledDate = (curDate) => {
		const today = startOfDay(new Date());

		// Disable dates in the past
		if (isPast(curDate) && !isSameDay(curDate, today)) {
			return true;
		}

		// Check if the date is in bookedDates
		if (bookedDates && Array.isArray(bookedDates)) {
			return bookedDates.some((bookedDate) =>
				isSameDay(new Date(bookedDate), curDate)
			);
		}

		return false;
	};

	console.log(range?.from, range?.to);

	return (
		<StyledDateSelector>
			<Calendar
				mode="range"
				onSelect={setRange}
				selected={displayRange}
				min={minBookingLength}
				max={maxBookingLength + 1}
				fromMonth={new Date()}
				fromDate={new Date()}
				numberOfMonths={2}
				disabled={isDisabledDate}
			/>

			<PriceBar>
				<PriceInfo>
					<Price>
						{discount > 0 ? (
							<>
								<h2>{formatCurrency(regularPrice - discount)}</h2>
								<h4>{formatCurrency(regularPrice)}</h4>
							</>
						) : (
							<h2>{formatCurrency(regularPrice)}</h2>
						)}
						<span>/night</span>
					</Price>
					{numNights > 0 ? (
						<>
							<NightsMultiplier>
								<span>&times;</span> <span>{numNights}</span>
							</NightsMultiplier>
							<div className="text-2xl">
								<span>
									<span>Total</span> <span>{formatCurrency(cabinPrice)}</span>
								</span>
							</div>
						</>
					) : null}
				</PriceInfo>

				{numNights && (
					<Button
						style={{
							color: "#18212f",
							backgroundColor: "var(--color-brand-50)",
						}}
						onClick={resetRange}
					>
						Clear
					</Button>
				)}
			</PriceBar>
		</StyledDateSelector>
	);
}

export default DateSelector;
