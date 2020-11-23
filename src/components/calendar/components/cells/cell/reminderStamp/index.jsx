import React, { useContext, useEffect } from 'react'
import { RemindersContext } from '../../../../../reminders/remindersProvider';
import { Reminder } from './reminderStamp.styles'

const ReminderStamp = ({ reminder,fullStamp, setOpen, setView }) => {
    const { setSelectedReminder, selectedReminder, reminderList } = useContext(RemindersContext);

    const openView = () => {
        // if (fullStamp)
        //     setView("list");
        // else if (reminder) {
        //     setView("save");
        // }
        // else
        //     setView("save");

        // setOpen(true);
        setView("save")
    };

    return (
        <Reminder color={reminder.color} onClick={openView}>
            {fullStamp ? "More than 5 items" : reminder.time}
        </Reminder>
    )
}

export default ReminderStamp
