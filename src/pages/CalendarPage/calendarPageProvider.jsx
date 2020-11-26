import React, { useState } from 'react';
import Save from '../../components/reminders/save';
import List from '../../components/reminders/list';

const CalendarPageContext = React.createContext([{}, () => { }]);

const CalendarPageProvider = props => {
  const [open, setOpen] = useState(false),
    [selectedDate, setSelectedDate] = useState(new Date()),
    [view, setView] = useState(<Save />),
    [allDaysReminderList, setAllDaysReminderList] = useState([]);

  const setSaveView = (reminder) => setView(
    <Save reminder={reminder} />);

  const setListView = () => setView(<List />)

  const contextObject = {
    open, setOpen,
    selectedDate, setSelectedDate,
    allDaysReminderList, setAllDaysReminderList,
    view, setSaveView, setListView
  };

  return (
    <CalendarPageContext.Provider value={contextObject}>
      {props.children}
    </CalendarPageContext.Provider>
  );
}

export { CalendarPageContext, CalendarPageProvider };