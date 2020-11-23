import React, { useState, useEffect } from 'react'
import EventIcon from '@material-ui/icons/Event';
import {
    Box,
    Button, Grid, TextField,
    Typography
} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';

const Save = ({ setView, setReminderList, setDayListValue, reminder=null }) => {
    const [color, setColor] = useState("#0fb5e9"),
        [text, setText] = useState(""),
        [day, setDay] = useState(""),
        [time, setTime] = useState(""),
        [city, setCity] = useState(""),
        [uuid, setUuid] = useState("");

    const maxLengthValidation = value => {
        if(value.length > 30)
            return;
        setText(value);
    };

    const dayValidation = value => {
        const number = parseInt(value)
        if(number < 1 || number > 31)
            return;
        setDay(number)
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        const reminder = {color, 
            text, 
            day: parseInt(day) , 
            time, 
            city, 
            uuid: uuidv4()};
        setReminderList(prev => {
            const element = prev.find(element => element.uuid === uuid);
            if(element){
                const index = prev.indexOf(element),
                    newArray = [...prev];
                    
                reminder.uuid = uuid;
                newArray[index] = reminder;
                return newArray;
            }
            else
                return [...prev, reminder]
        })
        setDayListValue(parseInt(day));
        setView("list");
    };

    useEffect(() => {
        if(!reminder)
            return;
        const {color, text, city, day, time, uuid} = reminder;
        setColor(color)
        setText(text)
        setCity(city)
        setDay(day)
        setTime(time)
        setUuid(uuid)
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
                    onChange={e => maxLengthValidation(e.target.value)}
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
                            onChange={e => dayValidation(e.target.value)}
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