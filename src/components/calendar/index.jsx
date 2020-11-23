import React, { useState } from 'react'
import { CalendarDiv } from './calendar.styles';
import Cells from './components/cells';
import Days from './components/days';
import Header from './components/header';

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
        
    return (
        <CalendarDiv>
            <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
            <Days />
            <Cells currentMonth={currentMonth} />
        </CalendarDiv>
    )
}

export default Calendar
