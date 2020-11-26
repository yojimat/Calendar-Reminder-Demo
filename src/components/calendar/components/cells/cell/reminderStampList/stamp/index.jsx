import React, { useContext } from 'react';
import { CalendarPageContext } from '../../../../../../../pages/CalendarPage/calendarPageProvider';
import { getTimeByFullDate } from '../../../../../../../utility';
import { Stamp } from './stamp.styles';

const ReminderStamp = ({ reminder, fullStamp }) => {
    const { setSelectedDate,
        setOpen,
        setSaveView } = useContext(CalendarPageContext);

    const onStampClick = (event) => {
        event.stopPropagation();
        
        setSelectedDate(reminder.fullDate)
        setSaveView(reminder);
        setOpen(true);
    }

    return (
        <Stamp backgroundColor={fullStamp ? "#0fb5e9" : reminder.color}
            onClick={(event) => onStampClick(event)}>
            {fullStamp ? "More than 5 items" : getTimeByFullDate(reminder.fullDate)}
        </Stamp>
    )
}

export default ReminderStamp
