import React, { useState } from 'react';

const RemindersContext = React.createContext([{}, () => { }]);

const RemindersProvider = props => {
    const [view, setView] = useState("save"),
        [reminderList, setReminderList] = useState([]),
        [selectedReminder, setSelectedReminder] = useState(null),
        state = { view, setView, reminderList, setReminderList, selectedReminder, setSelectedReminder};

    return (
        <RemindersContext.Provider value={state}>
            {props.children}
        </RemindersContext.Provider>
    );
}

export { RemindersContext, RemindersProvider };