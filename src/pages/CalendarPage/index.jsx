import React, { useContext } from 'react'
import { Header } from './calendarPage.styles';
import MyFooter from '../../components/footer'
import Calendar from '../../components/calendar';
import ReminderView from '../../components/reminders';
import Typography from '@material-ui/core/Typography';
import { Backdrop, createMuiTheme, Fade, makeStyles, Modal, ThemeProvider } from '@material-ui/core';
import { blue, lightBlue } from '@material-ui/core/colors';
import { CalendarPageContext } from './calendarPageProvider';
import { RemindersProvider } from '../../components/reminders/remindersProvider';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: lightBlue
    },
});

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const CalendarPage = () => {
    const classes = useStyles(),
        [open, setOpen] = useContext(CalendarPageContext);

    return (
        <main>
            <ThemeProvider theme={theme}>
                <Header>
                    <Typography component="h1">
                        Calendar Reminder Demo
                    </Typography>
                </Header>
                <RemindersProvider>
                    <Calendar />
                        <Modal open={open}
                            onClose={() => setOpen(false)}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            className={classes.modal}
                        >
                        <Fade in={open}>
                            <ReminderView />
                        </Fade>
                    </Modal>
                </RemindersProvider>
                <MyFooter />
            </ThemeProvider>
        </main >
    )
}

export default CalendarPage;
