import React, { useState } from 'react'
import EventIcon from '@material-ui/icons/Event';
import {
    Box,
    Button, Grid, TextField,
    Typography
} from '@material-ui/core';

const Save = () => {
    const [color, setColor] = useState({});

    return (
        <>
            <Typography component="h1" variant="h6">
                <EventIcon color="primary" />
                {" "}Reminder
            </Typography>
            <form>
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
                />
                <Grid container>
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
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant="standard"
                            margin="normal"
                            label="City"
                            name="city"
                            id="city"
                            autoComplete="city"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Box id="boxColorPicker">
                            <Typography component="label" id="labelColorPickr" variant="subtitle1">
                                Color:{" "}
                            </Typography>
                            <input
                                type="color"
                                value={color.hex}
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