import { CalendarPageProvider, CalendarPageContext } from '../../../../../pages/CalendarPage/calendarPageProvider';
import { getDate } from 'date-fns';
import React, { useState, useEffect, useContext } from 'react'
import { CellCol, Number, Bg, ReminderStampContainer } from './cell.styles';
import ReminderStamp from "./reminderStamp";
import { RemindersProvider, RemindersContext } from '../../../../reminders/remindersProvider';

const Cell = ({ formattedDate, day, status, setSelectedDate }) => {
    const [reminderStampList, setReminderStampList] = useState([])
        , [open, setOpen] = useContext(CalendarPageContext)
        , { setView, reminderList } = useContext(RemindersContext);

    useEffect(() => {
        const newArray = reminderList.filter(element => element.day === day);
        setReminderStampList([...newArray]);
    }, [reminderList]);

    const onDateClick = day => setSelectedDate(day);

    const filterReminderStamp = () => {
        const filteredList = reminderStampList.filter(el => el.day === getDate(day))
            .map((el, index) =>
                <ReminderStamp reminder={el}
                    setOpen={setOpen} 
                    setView={setView} 
                    key={index} />);

        if (filteredList.length > 5)
            return <ReminderStamp
                colorValue={"#0fb5e9"}
                key={0} fullStamp
                setView={setView} 
                setOpen={setOpen} />

        return filteredList;
    };

    return (
        <CalendarPageProvider>
            <RemindersProvider>
                <CellCol
                    status={status}
                    onClick={() => {
                        onDateClick(day);
                        setOpen(true);
                    }}>
                    <Number>{formattedDate}</Number>
                    <Bg selected={status === "selected"} >{formattedDate}</Bg>
                    <ReminderStampContainer>
                        {filterReminderStamp()}
                    </ReminderStampContainer>
                </CellCol>
            </RemindersProvider>
        </CalendarPageProvider>
    )
}

export default Cell
