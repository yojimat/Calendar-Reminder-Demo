import { Grid, Typography, Divider, GridList, GridListTile, IconButton } from '@material-ui/core';
import React from 'react'
import Reminder from './reminder';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const List = ({ setEdit, reminderList, dayListValue = "1", setView }) => {
    const setList = ({text, color, time, city, uuid}, index) => {
        return (
            <GridListTile key={index} cols={1} >
                <Reminder textValue={text} 
                    colorValue={color} 
                    timeValue={time} 
                    cityValue={city} 
                    uuidValue={uuid}
                    setEdit={setEdit}/>
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
                        Reminder List for day {dayListValue}
                    </Typography>
                    <IconButton color="primary"
                        size="small"
                        component="span"
                        onClick={() => setView("save")}>
                        <NoteAddIcon />
                    </IconButton>
                </Grid>
                <Divider variant="middle" component="hr" />
                <Grid item
                    id="gridListReminderContainer">
                    <GridList cols={1} cellHeight={'auto'} id="gridListReminder">
                        {reminderList.length > 0 ? reminderList.map(setList) :
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
