import React, { useContext, useEffect } from 'react';
import ReminderStamp from "./stamp";
import { getDate, getMonth } from 'date-fns';
import { ReminderStampContainer } from "./reminderStampList.styles";
import { CalendarPageContext } from '../../../../../../pages/CalendarPage/calendarPageProvider';
import { sortByTime } from '../../../../../../utility';

const ReminderStampList = ({ fullDate }) => {
    const { allDaysReminderSetList } = useContext(CalendarPageContext);

    const filterReminderStampList = () => {
        const day = getDate(fullDate)
            , month = getMonth(fullDate);

        const filteredList = allDaysReminderSetList
            .filter(el => el.day === day && el.month === month);

        if (filteredList.length > 5)
            return <ReminderStamp fullStamp />

        const stampsList = filteredList
            .sort(sortByTime)
            .map((el, index) =>
                <ReminderStamp reminder={el}
                    fullDate={fullDate}
                    key={index} />);

        return stampsList;
    };

    useEffect(() => filterReminderStampList(), [allDaysReminderSetList])

    return (
        <ReminderStampContainer>
            {filterReminderStampList()}
        </ReminderStampContainer>
    )
}

export default ReminderStampList
