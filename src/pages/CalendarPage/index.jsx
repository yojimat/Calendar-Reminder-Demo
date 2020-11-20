import React from 'react'
import { Header } from './calendarPage.styles';
import MyFooter from '../../components/footer'
import Calendar from '../../components/calendar';
import ReminderView from '../../components/reminders';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue
    },
});

const CalendarPage = () => {
    return (
        <main>
            <ThemeProvider theme={theme}>
                <Header>
                    <Typography component="h1">
                        Calendar Reminder Demo
                    </Typography>
                </Header>
                <Calendar />
                <ReminderView />
                <MyFooter />
            </ThemeProvider>
        </main>
    )
}

export default CalendarPage;
