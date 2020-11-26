import React, { useState, useEffect, useContext } from 'react'
import EventIcon from '@material-ui/icons/Event';
import {
    Box,
    Button, Grid, TextField,
    Typography
} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';
import { maxLengthValidation, dayValidation, alphaOnly } from './validation';
import { CalendarPageContext } from '../../../pages/CalendarPage/calendarPageProvider';
import { getFullDateByDayAndTime, getRandomHexColor, getTimeByFullDate } from '../../../utility';
import { getDate } from 'date-fns';

const reminderObject = selectedDate => {
    return {
        text: "",
        day: getDate(selectedDate),
        time: "",
        city: "",
        color: getRandomHexColor()
    }
}

const insertReminder = (prevState, reminderToSet) => {
    return [...prevState, reminderToSet];
};

const updateReminder = (prevState, foundElement, reminderToSet) => {
    const index = prevState.indexOf(foundElement),
        newArray = [...prevState];

    reminderToSet.uuid = foundElement.uuid;
    newArray[index] = reminderToSet;
    return newArray;
};

const formReminderToReminder = (formReminder, selectedDate) => {
    const { color, day, time, city, text } = formReminder;
    const reminder = {
        color,
        fullDate: getFullDateByDayAndTime(selectedDate, day, time),
        city,
        uuid: uuidv4(),
        text,
    };
    return reminder;
}

const Save = ({ reminder = null }) => {
    const { selectedDate, setSelectedDate,
        setListView, setAllDaysReminderList, setOpen } = useContext(CalendarPageContext);

    const [formReminder, setFormReminder] = useState(reminderObject(selectedDate));

    const handleChange = (e, validationFunction, oldValue) => {
        const name = e.target.name;
        let value = e.target.value;

        if(validationFunction)
            value = validationFunction(value, oldValue);

        setFormReminder({ ...formReminder, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setAllDaysReminderList(prevState => {
            let uuidToFind = null;
            if (reminder)
                uuidToFind = reminder.uuid;

            const foundElement = prevState.find(element => element.uuid === uuidToFind)
                , reminderToSet = formReminderToReminder(formReminder, selectedDate);

            if (!foundElement)
                return insertReminder(prevState, reminderToSet);

            return updateReminder(prevState, foundElement, reminderToSet);
        });
        const fullDate = getFullDateByDayAndTime(selectedDate, formReminder.day, formReminder.time);
        
        setSelectedDate(fullDate);
        setListView("list");
        setOpen(true);
    };

    useEffect(() => {
        if (!reminder)
            return;

        const { fullDate, text, color, city } = reminder;

        const time = getTimeByFullDate(fullDate),
            day = getDate(fullDate);

        setFormReminder({ text, color, city, time, day });
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
                    onChange={(e) => handleChange(e, maxLengthValidation, formReminder.text)}
                    value={formReminder.text}
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
                            onChange={(e) => handleChange(e, dayValidation, formReminder.day)}
                            value={formReminder.day}
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
                            onChange={handleChange}
                            value={formReminder.time}
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
                            onChange={(e) => handleChange(e, alphaOnly, formReminder.city)}
                            value={formReminder.city}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box id="boxColorPicker">
                            <Typography component="label" id="labelColorPickr" variant="subtitle1">
                                Color:{" "}
                            </Typography>
                            <input
                                type="color"
                                name="color"
                                value={formReminder.color}
                                onChange={handleChange}
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