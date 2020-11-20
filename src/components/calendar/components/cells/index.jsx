import React from 'react'
import { startOfMonth
    , endOfMonth
    , startOfWeek
    , endOfWeek
    , format
    , isSameMonth
    , isSameDay
    , parse
    , addDays } from 'date-fns';
import { Body, CellRow, CellCol, Number, Bg } from './cells.styles';

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
            
            const cloneDay = day;

            days.push(
                <CellCol
                className={`col cell ${
                    !isSameMonth(day, monthStart)
                    ? "disabled"
                    : isSameDay(day, selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() => onDateClick(parse(cloneDay))}
                >
                    <Number className="number">{formattedDate}</Number>
                    <Bg className="bg">{formattedDate}</Bg>
                </CellCol>
            );

            day = addDays(day, 1);
        }

        rows.push(
            <CellRow className="row" key={day}>
                {days}
            </CellRow>
        );

        days = [];
    }

    return <Body className="body">{rows}</Body>;
}

export default Cells;
