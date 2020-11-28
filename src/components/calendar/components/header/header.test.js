import { getYear, format, addMonths } from "date-fns";
import React from "react";
import CalendarHeader from "./index";
import Calendar from "../../index"
import { render, fireEvent, waitFor, cleanup, getAllByTestId } from '@testing-library/react'

afterEach(cleanup);

test("renders the actual month", () => {
    const { getByTestId } = render(<CalendarHeader />);
    const date = new Date(),
        year = getYear(date),
        dateFormat = "MMMM",
        monthName = format(date, dateFormat);

    expect(getByTestId("MonthYearSpan").textContent)
        .toBe(`${monthName} ${year}`);
});

test("renders the one month when the prop are set", () => {
    const OneMonthAheadDate = addMonths(new Date(), 1);
    const { getByTestId } = render(<CalendarHeader currentMonth={OneMonthAheadDate} />);
    const year = getYear(OneMonthAheadDate),
        dateFormat = "MMMM",
        monthName = format(OneMonthAheadDate, dateFormat);

    expect(getByTestId("MonthYearSpan").textContent)
        .toBe(`${monthName} ${year}`);
});

test("renders the correct month when Forwards/Backwards are clicked", () => {
    const { getByText, getByTestId } = render(
        <Calendar>
            <CalendarHeader />
        </Calendar>);
    const date = new Date(),
        year = getYear(date),
        dateFormat = "MMMM",
        iconBackwards = getByText(/chevron_left/i),
        iconForwards = getByText(/chevron_right/i),
        monthYearSpan = getByTestId("MonthYearSpan");

    fireEvent.click(iconBackwards);

    let monthName = format(addMonths(date, -1), dateFormat);

    expect(monthYearSpan.textContent)
        .toBe(`${monthName} ${year}`);

    fireEvent.click(iconForwards);

    monthName = format(date, dateFormat);

    expect(monthYearSpan.textContent)
        .toBe(`${monthName} ${year}`);
});
