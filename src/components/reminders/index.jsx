import React, { useContext, useState, useEffect } from 'react'
import List from './list';
import { Panel } from './reminders.styles'
import { RemindersContext } from './remindersProvider';
import Save from './save';

const ReminderView = () => {
    const [ dayListValue, setDayListValue ] = useState(1),
        { view, setView, setReminderList, reminderList, 
            selectedReminder, setSelectedReminder } = useContext(RemindersContext);

    const getView = () => {
        switch (view) {
            case "save":
                return <Save setView={setView} 
                    setReminderList={setReminderList}
                    setDayListValue={setDayListValue}
                    reminder={selectedReminder}/>;
            case "list":
                return <List setEdit={setEdit}
                    reminderList={reminderList.filter(el => el.day === dayListValue)} 
                    dayListValue={dayListValue}
                    setView={setView}/>;
            default:
                return <Save setView={setView} 
                    setReminderList={setReminderList}
                    setDayListValue={setDayListValue}
                    reminder={selectedReminder}/>;
        }
    };

    const setEdit = (uuid) => {
        setSelectedReminder(reminderList.find(el => el.uuid === uuid));
        setView("save");
    }

    return (
            <Panel id="panel">
                {getView()}
            </Panel>
    )
}

export default ReminderView
