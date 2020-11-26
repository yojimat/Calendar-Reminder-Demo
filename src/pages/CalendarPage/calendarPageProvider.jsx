import React, { useState } from 'react';
import Save from '../../components/reminders/save';
import List from '../../components/reminders/list';

const CalendarPageContext = React.createContext([{}, () => { }]);

const CalendarPageProvider = props => {
  const [open, setOpen] = useState(false),
    [selectedDate, setSelectedDate] = useState(new Date()),
    [view, setView] = useState(<Save />),
    //This is test data
    [allDaysReminderList, setAllDaysReminderList] = useState([{
      color: "#fa0808",
      fullDate: new Date(2020,10,26,12,0),
      uuid: "test1",
      text: "test1",
      city: "São Paulo"
    }, {
      color: "#000",
      fullDate: new Date(2020,10,26,0,0),
      uuid: "test2",
      text: "test2",
      city: "New York"
    }]);

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