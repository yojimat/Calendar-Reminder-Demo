import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { CalendarPageContext } from '../../../../../../../pages/CalendarPage/calendarPageProvider';
import { getTimeByFullDate } from '../../../../../../../utility';
import { Stamp } from './stamp.styles';

const ReminderStamp = ({ reminder, fullStamp, fullDate }) => {
    const { setSelectedDate,
        setOpen,
        setSaveView,
        setListView } = useContext(CalendarPageContext);

    const onStampClick = (event) => {
        event.stopPropagation();

        if (fullStamp) {
            setSelectedDate(fullDate);
            setListView();
        } else {
            setSelectedDate(reminder.fullDate);
            setSaveView(reminder);
        }

        setOpen(true);
    }

    return (
        <Stamp backgroundColor={fullStamp ? "#0fb5e9" : reminder.color}
            onClick={(event) => onStampClick(event)}>
            {fullStamp ?
                (<Typography component="span" variant="subtitle1" title="More than 5 items">
                    5+
                </Typography>) :
                getTimeByFullDate(reminder.fullDate)}
        </Stamp>
    )
}

export default ReminderStamp
