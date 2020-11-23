import React, { useState } from 'react'
import { startOfMonth
    , endOfMonth
    , startOfWeek
    , endOfWeek
    , format
    , isSameMonth
    , isSameDay
    , addDays } from 'date-fns';
import { Body, CellRow } from './cells.styles';
import Cell from './cell';

const setStatus = (day, monthStart, selectedDate) => {
    if(!isSameMonth(day, monthStart))
        return "disabled"
    else if(isSameDay(day, selectedDate)) 
        return "selected"
    else
        return "normal";
};

const Cells = ({ currentMonth }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    
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
            
            const cloneDay = day
                , status = setStatus(day, monthStart, selectedDate);

            days.push(<Cell key={day} 
                formattedDate={formattedDate} 
                day={cloneDay}
                setSelectedDate={setSelectedDate}
                status={status}/>);

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
