import React, { useState, useEffect, useContext } from 'react'
import EventIcon from '@material-ui/icons/Event';
import {
    Box,
    Button, Grid, TextField,
    Typography
} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';
import { maxLengthValidation, dayValidation } from './validation';
import { CalendarPageContext } from '../../../pages/CalendarPage/calendarPageProvider';
import { getFullDateByDayAndTime, getTimeByFullDate } from '../../../utility';
import { getDate } from 'date-fns';

const Save = ({ reminder = null }) => {
    const [color, setColor] = useState("#0fb5e9"),
        [text, setText] = useState(""),
        [day, setDay] = useState(""),
        [time, setTime] = useState(""),
        [city, setCity] = useState(""),
        [uuid, setUuid] = useState("");

    const { selectedDate, setSelectedDate,
        setListView, setAllDaysReminderList, setOpen } = useContext(CalendarPageContext);

    const handleSubmit = event => {
        event.preventDefault();
            
        const reminder = {
            color,
            fullDate: getFullDateByDayAndTime(selectedDate, day, time),
            city,
            uuid: uuidv4(),
            text
        };

        setAllDaysReminderList(prev => {
            const element = prev.find(element => element.uuid === uuid);

            if (!element)
                return [...prev, reminder];

            const index = prev.indexOf(element),
                newArray = [...prev];

            reminder.uuid = uuid;
            newArray[index] = reminder;
            return newArray;
        });

        setSelectedDate(parseInt(day));
        // setListView("list");
        setOpen(false);
    };

    useEffect(() => {
        if (!reminder)
            return;

        const { color, text, city, uuid, fullDate } = reminder;

        const time = getTimeByFullDate(fullDate),
            day = getDate(fullDate);

        setColor(color);
        setText(text);
        setCity(city);
        setDay(day);
        setTime(time);
        setUuid(uuid);

    }, [reminder])

    return (
        <>
            <Typography component="h1" variant="h6">
                <EventIcon color="primary" />
                {" "}Reminder
            </Typography>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    variant="standard"
                    margin="normal"
                    fullWidth
                    required
                    label="Reminder description"
                    name="text"
                    id="text"
                    autoComplete="text"
                    autoFocus
                    placeholder="Max 30 characters"
                    onChange={e =>
                        setText(maxLengthValidation(e.target.value), text)}
                    value={text}
                />
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <TextField
                            variant="standard"
                            required
                            margin="dense"
                            label="Day"
                            name="day"
                            id="day"
                            autoComplete="day"
                            type="number"
                            onChange={e =>
                                setDay(dayValidation(e.target.value, day))}
                            value={day}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            variant="standard"
                            required
                            margin="normal"
                            name="time"
                            id="time"
                            autoComplete="time"
                            type="time"
                            onChange={e => setTime(e.target.value)}
                            value={time}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            label="City"
                            name="city"
                            id="city"
                            autoComplete="city"
                            onChange={e => setCity(e.target.value)}
                            value={city}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box id="boxColorPicker">
                            <Typography component="label" id="labelColorPickr" variant="subtitle1">
                                Color:{" "}
                            </Typography>
                            <input
                                type="color"
                                value={color}
                                onChange={e => setColor(e.target.value)}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Save
                </Button>
            </form>
        </>
    )
}

export default Save