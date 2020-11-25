import React, { useState } from 'react';

const CalendarPageContext = React.createContext([{}, () => {}]);

const CalendarPageProvider = props => {
  const [open, setOpen] = useState(false),
    [selectedDate, setSelectedDate] = useState(new Date()),
    //This is test data
    [allDaysReminderSetList, setAllDaysReminderSetList] = useState([{
      day: 21,
      color: "#fa0808",
      time: "12:00",
      month: 10
    },{
      day: 21,
      color: "#000",
      time: "00:00",
      month: 10
    }]);

  const contextObject = {
    open, setOpen, 
    selectedDate, setSelectedDate, 
    allDaysReminderSetList, setAllDaysReminderSetList
  };

  return (
    <CalendarPageContext.Provider value={contextObject}>
      {props.children}
    </CalendarPageContext.Provider>
  );
}

export { CalendarPageContext, CalendarPageProvider };