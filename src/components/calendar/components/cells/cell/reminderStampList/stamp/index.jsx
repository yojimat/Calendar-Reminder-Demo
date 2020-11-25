import React, { useContext, useEffect } from 'react';
import { CalendarPageContext } from '../../../../../../../pages/CalendarPage/calendarPageProvider';
import { Stamp } from './stamp.styles';

const ReminderStamp = ({ reminder, fullDate, fullStamp }) => {
    const { setSelectedDate, setOpen } = useContext(CalendarPageContext);

    const onStampClick = (fullDate) => {
        setSelectedDate(fullDate)
        setOpen(true);
    }

    return (
        <Stamp backgroundColor={fullStamp ? "#0fb5e9" : reminder.color} 
            onClick={() => onStampClick(fullDate)}>
            {fullStamp ? "More than 5 items" : reminder.time}
        </Stamp>
    )
}

export default ReminderStamp
