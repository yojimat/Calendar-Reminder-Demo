import React, { useState } from 'react';

const CalendarPageContext = React.createContext([{}, () => {}]);

const CalendarPageProvider = props => {
  const [open, setOpen] = useState(false);
  return (
    <CalendarPageContext.Provider value={[open, setOpen]}>
      {props.children}
    </CalendarPageContext.Provider>
  );
}

export { CalendarPageContext, CalendarPageProvider };