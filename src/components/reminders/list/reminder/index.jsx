import React, { useContext, useEffect } from 'react'
import { Typography, Grid } from '@material-ui/core';
import { getTimeByFullDate } from '../../../../utility';
import WeatherForecast from './weatherForecast';
import { CalendarPageContext } from '../../../../pages/CalendarPage/calendarPageProvider';

const paintReminder = (hexColor, uuidValue) => {
    const reminderContainerList = document.querySelectorAll(`.text-${uuidValue}`),
        cssValueBorderImage = `linear-gradient(45deg, ${hexColor}, 0%, ${hexColor} 40%)`;

    if (!reminderContainerList)
        return console.error("The element was not found");

    reminderContainerList.forEach(el => {
        el.style.borderImage = cssValueBorderImage;
        el.style.borderImageSlice = 1;
    });
};

const Reminder = ({ reminder }) => {
    const { setSaveView } = useContext(CalendarPageContext);
    const { uuid, text, city, fullDate, color } = reminder;

    useEffect(() => {
        paintReminder(color, uuid);
    }, [color, uuid]);

    return (
        <>
            <Grid container onClick={() => setSaveView(reminder)}
                justify="center" className={`borderItemReminder text-${uuid}`}>
                <Grid item xs={6}>
                    <Typography component="h3" className="textDescription" variant="body1">
                        {text || "No description"}
                    </Typography>
                    <Typography component="span" variant="body1">
                        <strong>City:</strong> {city || "No city registred"}{" "}
                    </Typography>
                    <Typography component="span" variant="body1">
                        <strong>Time:</strong> {getTimeByFullDate(fullDate)}{" "}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <WeatherForecast city={city} />
                </Grid>
            </Grid>
        </>
    );
}

export default Reminder;
