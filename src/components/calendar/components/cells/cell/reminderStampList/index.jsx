import React, { useContext, useEffect } from 'react';
import ReminderStamp from "./stamp";
import { ReminderStampContainer } from "./reminderStampList.styles";
import { CalendarPageContext } from '../../../../../../pages/CalendarPage/calendarPageProvider';
import { filterReminderListByDate, sortByTime } from '../../../../../../utility';

const ReminderStampList = ({ fullDate }) => {
    const { allDaysReminderList } = useContext(CalendarPageContext);

    const filterReminderStampList = () => {
        const filteredList =
            filterReminderListByDate(fullDate, allDaysReminderList);

        if (filteredList.length > 5)
            return <ReminderStamp fullStamp />

        const stampsList = filteredList
            .sort(sortByTime)
            .map(el =>
                <ReminderStamp reminder={el}
                    key={el.uuid} />);

        return stampsList;
    };

    useEffect(filterReminderStampList, [allDaysReminderList, fullDate])

    return (
        <ReminderStampContainer>
            {filterReminderStampList()}
        </ReminderStampContainer>
    )
}

export default ReminderStampList
