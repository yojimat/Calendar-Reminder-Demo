import React, { useState } from 'react'
import List from './list';
import { Panel } from './reminders.styles'
import Save from './save';

// const getSaveView = () => <Save />
const getSaveView = () => <h1>TEST</h1>

const getListView = () => <List />

const ReminderView = () => {
    const [view, setView] = useState(getSaveView());

    return (
        <Panel id="panel">
            {view}
        </Panel>
    )
}

export default ReminderView
