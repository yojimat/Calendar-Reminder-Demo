import React from 'react'
import { startOfMonth
    , endOfMonth
    , startOfWeek
    , endOfWeek
    , format
    , addDays } from 'date-fns';
import { Body, CellRow } from './cells.styles';
import Cell from './cell';

const Cells = ({ currentMonth }) => {
    const monthStart = startOfMonth(currentMonth)
        , monthEnd = endOfMonth(monthStart)
        , startDate = startOfWeek(monthStart)
        , endDate = endOfWeek(monthEnd)
        , dateFormat = "d"
        , rows = [];

    let days = []
        , day = startDate
        , formattedDate = "";
    
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);

            days.push(<Cell key={day}
                monthStart={monthStart}
                fullDate={day}
                formattedDate={formattedDate}/>);

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
