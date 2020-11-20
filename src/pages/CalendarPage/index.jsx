import React from 'react'
import { Header } from './calendarPage.styles';
import MyFooter from '../../components/footer'
import Calendar from '../../components/calendar';

const CalendarPage = () => {
    return (
        <main>
            <Header>Calendar Reminder Demo</Header>
            <Calendar />       
            <MyFooter />      
        </main>
    )
}

export default CalendarPage;
