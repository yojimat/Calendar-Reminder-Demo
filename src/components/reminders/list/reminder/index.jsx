import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import Axios from 'axios';
import { Typography, Grid } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';

const getUrlWeatherForecastAPI = (city = "") => {
    const apiKey = "49ecebebfc446f3f4e75add377736897",
        urlWeatherForecastAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    return urlWeatherForecastAPI;
}

const createWeatherObject = (data) => {
    if (!data)
        return null;

    const {
        temp,
        feels_like,
        temp_min,
        temp_max
    } = data.main,
        { description } = data.weather[0];

    return {
        temp,
        feels_like,
        temp_min,
        temp_max,
        description
    }
};

const paintReminder = (hexColor, uuidValue) => {
    const reminderContainerList = document.querySelectorAll(`.text-${uuidValue}`),
        cssValueBorderImage = `linear-gradient(45deg, ${hexColor}, 0%, ${hexColor} 40%)`;
        
    if(!reminderContainerList)
        return console.error("The element was not found");
        
    reminderContainerList.forEach(el => {
        el.style.borderImage = cssValueBorderImage;
        el.style.borderImageSlice = 1;
    });
};

const WeatherForecast = ({ weatherForecast }) => {
    return (
        <>
            <Typography component="h3" variant="body2"  className="textDescription">
                <CloudIcon />
                {" "}{weatherForecast.description || "No description"}
            </Typography>
            <Typography component="span" variant="body2">
                <strong>Temperature:</strong>{Math.round(weatherForecast.temp) || "No temperature"}°C/ <strong>Min:</strong> {Math.round(weatherForecast.temp_min) || 0}°C / <strong>Max:</strong>{Math.round(weatherForecast.temp_max) || 0}°C {" "}
                <strong>Feeling:</strong>{Math.round(weatherForecast.feels_like) || 0}°C
            </Typography>
        </>
    );
};

const Reminder = ({ textValue, colorValue, timeValue, cityValue, uuidValue, setEdit }) => {
    const [weatherForecast, setWeatherForecast] = useState(null),
        [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        let result = null;

        try {
            const response = await Axios.get(getUrlWeatherForecastAPI(cityValue));
            result = await response.data;
        } catch (error) {
            console.log(error);
        }

        const weatherObject = createWeatherObject(result);
        setWeatherForecast(weatherObject);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();     
    }, []);

    useEffect(() => {
        paintReminder(colorValue, uuidValue);
    });

    if (isLoading)
        return <CircularProgress color="secondary" />

    return (
        <>
            <Grid container onClick={() => setEdit(uuidValue)}
                justify="space-between" className={`borderItemReminder text-${uuidValue}`}>
                <Grid item xs={6}>
                    <Typography component="h3" className="textDescription" variant="body1">
                        {textValue || "No description"}
                    </Typography>
                    <Typography component="span" variant="body1">
                        <strong>City:</strong> {cityValue || "No city registred"}{" "}
                    </Typography>
                    <Typography component="span" variant="body1">
                        <strong>Time:</strong> {timeValue || "--:--"}{" "}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    {weatherForecast ? <WeatherForecast weatherForecast={weatherForecast} />
                        :
                        <Typography component="span" variant="body1">
                            Weather forecast are only available for the present day.
                        </Typography>
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default Reminder
