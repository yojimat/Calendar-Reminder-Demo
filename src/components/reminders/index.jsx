import React, { useContext } from 'react'
import { CalendarPageContext } from '../../pages/CalendarPage/calendarPageProvider';
import { Panel } from './reminders.styles'

const ReminderView = () => {
    const { view } = useContext(CalendarPageContext);

    return (
        <Panel id="panel">
            {view}
        </Panel>
    )
}

export default ReminderView
