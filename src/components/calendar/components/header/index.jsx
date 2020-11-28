import React from 'react'
import { addMonths, subMonths, format } from 'date-fns';
import { Header, ColStart, ColEnd, Icon } from './header.styles';
import { ColCenter } from "../../calendar.styles";

const CalendarHeader = ({ currentMonth = new Date(), setCurrentMonth }) => {
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
      <Header>
        <ColStart>
          <Icon onClick={goPrevMonth} data-testid="MonthBackwards">
            chevron_left
          </Icon>
        </ColStart>
        <ColCenter>
          <span data-testid="MonthYearSpan">
            {format(currentMonth, dateFormat)}
          </span>
        </ColCenter>
        <ColEnd onClick={goNextMonth}>
          <Icon>chevron_right</Icon>
        </ColEnd>
      </Header>
    );
}

export default CalendarHeader
