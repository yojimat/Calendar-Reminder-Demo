import { Grid, Typography, Divider, GridList, GridListTile, IconButton } from '@material-ui/core';
import React, { useContext } from 'react'
import Reminder from './reminder';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { CalendarPageContext } from '../../../pages/CalendarPage/calendarPageProvider';
import { filterReminderListByDate, sortByTime } from '../../../utility';
import { getDate } from 'date-fns';

const List = () => {
    const { selectedDate, setSaveView, allDaysReminderList } = useContext(CalendarPageContext);

    const setList = (reminder) => {
        return (
            <GridListTile key={reminder.uuid} cols={1} >
                <Reminder reminder={reminder} />
            </GridListTile>
        )
    }

    return (
        <>
            <Grid container
                spacing={2}
                direction="column">
                <Grid item
                    direction="row" container
                    justify="space-between">
                    <Typography component="h3" variant="h6">
                        Reminder List for day {getDate(selectedDate)}
                    </Typography>
                    <IconButton color="primary"
                        size="small"
                        component="span"
                        onClick={() => setSaveView()}>
                        <NoteAddIcon />
                    </IconButton>
                </Grid>
                <Divider variant="middle" component="hr" />
                <Grid item>
                    <GridList cols={1} cellHeight={'auto'} id="gridListReminder">
                        {allDaysReminderList.length > 0 ?
                            filterReminderListByDate(selectedDate, allDaysReminderList)
                                .sort(sortByTime)
                                .map(setList) :
                            <Typography component="h4" variant="h6">
                                There are no reminders in this day.
                            </Typography>}
                    </GridList>
                </Grid>
            </Grid>
        </>
    );
}

export default List
