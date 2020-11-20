import React from 'react'
import { startOfMonth
    , endOfMonth
    , startOfWeek
    , endOfWeek
    , format
    , isSameMonth
    , isSameDay
    , addDays } from 'date-fns';
import { Body, CellRow, CellCol, Number, Bg } from './cells.styles';

const setStatus = (day, monthStart, selectedDate) => {
    if(!isSameMonth(day, monthStart))
        return "disabled"
    else if(isSameDay(day, selectedDate)) 
        return "selected"
    else
        return "normal";
};

const Cells = ({ currentMonth, selectedDate, setSelectedDate }) => {
    const monthStart = startOfMonth(currentMonth)
        , monthEnd = endOfMonth(monthStart)
        , startDate = startOfWeek(monthStart)
        , endDate = endOfWeek(monthEnd)
        , dateFormat = "d"
        , rows = [];
    
    const onDateClick = day => setSelectedDate(day);

    let days = []
        , day = startDate
        , formattedDate = "";
    
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            
            const cloneDay = day
                , status = setStatus(day, monthStart, selectedDate);

            days.push(
                <CellCol
                status={status}
                key={day}
                onClick={() => onDateClick(cloneDay)}
                >
                    <Number>{formattedDate}</Number>
                    <Bg selected={status === "selected"} >{formattedDate}</Bg>
                </CellCol>
            );

            day = addDays(day, 1);
        }

        rows.push(
            <CellRow key={day}>
                {days}
            </CellRow>
        );

        days = [];
    }

    return <Body>{rows}</Body>;
}

export default Cells;
