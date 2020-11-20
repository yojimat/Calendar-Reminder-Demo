import React, { useState } from 'react'
import { CalendarDiv } from './calendar.styles';
import Cells from './components/cells';
import Days from './components/days';
import Header from './components/header';


const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date()),
        [selectedDate, setSelectedDate] = useState(new Date());
    
    return (
        <CalendarDiv className="calendar">
            <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth}/>
            <Days />
            <Cells currentMonth={currentMonth} 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate}/>
        </CalendarDiv>
    )
}

export default Calendar
