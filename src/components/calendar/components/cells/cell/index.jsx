import { CalendarPageProvider, CalendarPageContext } from '../../../../../pages/CalendarPage/calendarPageProvider';
import React, { useState, useContext, useEffect } from 'react';
import { CellCol, Number, Bg } from './cell.styles';
import ReminderStampList from './reminderStampList';
import { isSameMonth, isSameDay, isToday } from 'date-fns';

const setStatusHandler = (day, monthStart, selectedDate) => {
    if (!isSameMonth(day, monthStart))
        return "disabled"
    else if (isSameDay(day, selectedDate))
        return "selected"
    else if (isToday(day))
        return "presentDay"
    else
        return "normal";
};

const Cell = ({ formattedDate, fullDate, monthStart }) => {
    const { setOpen, selectedDate, setSelectedDate } = useContext(CalendarPageContext)
        , [status, setStatus] = useState(setStatusHandler(fullDate, monthStart, selectedDate));

    useEffect(() => setStatus(setStatusHandler(fullDate, monthStart, selectedDate))
        , [selectedDate, fullDate, monthStart])

    const onDateClick = fullDate => {
        setSelectedDate(fullDate)
        setOpen(true);
    };

    return (
        <CalendarPageProvider>
            <CellCol status={status} className="cellCol"
                onClick={() => onDateClick(fullDate)}>
                <Number>{formattedDate}</Number>
                <Bg selected={status === "selected" || status === "presentDay"}>
                    {formattedDate}
                </Bg>
                <ReminderStampList fullDate={fullDate} />
            </CellCol>
        </CalendarPageProvider>
    )
}

export default Cell;
