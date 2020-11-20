import React from 'react'
import { addMonths, subMonths, format } from 'date-fns';
import { Header, ColStart, ColEnd, Icon } from './header.styles';
import { ColCenter } from "../../calendar.styles";

const CalendarHeader = ({ currentMonth, setCurrentMonth }) => {
    const dateFormat = "MMMM yyyy";
    
    const goNextMonth = () => {
        const nextMonth = addMonths(currentMonth, 1);
        setCurrentMonth(nextMonth);
    };
    const goPrevMonth = () => {
        const prevMonth = subMonths(currentMonth, 1);
        setCurrentMonth(prevMonth);
    };

    return (
      <Header className="header row flex-middle">
        <ColStart className="col col-start">
          <Icon className="icon" onClick={goPrevMonth}>
            chevron_left
          </Icon>
        </ColStart>
        <ColCenter className="col col-center">
          <span>
            {format(currentMonth, dateFormat)}
          </span>
        </ColCenter>
        <ColEnd className="col col-end" onClick={goNextMonth}>
          <Icon className="icon">chevron_right</Icon>
        </ColEnd>
      </Header>
    );
}

export default CalendarHeader
