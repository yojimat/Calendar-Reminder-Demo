import React, { useContext, useEffect, useState } from 'react'
import CloudIcon from '@material-ui/icons/Cloud';
import CircularProgress from '@material-ui/core/CircularProgress';
import Axios from 'axios';
import { Typography } from '@material-ui/core';
import { CalendarPageContext } from '../../../../../pages/CalendarPage/calendarPageProvider';
import { isToday } from 'date-fns';

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

const WeatherForecast = ({ city }) => {
    const { selectedDate } = useContext(CalendarPageContext)

    const [weatherForecast, setWeatherForecast] = useState(null),
        [isLoading, setIsLoading] = useState(true),
        [statusMessage, setStatusMessage] = useState("Weather forecast are only available for the present day.");

    const fetchData = async () => {
        let result = null;

        try {
            const response = await Axios.get(getUrlWeatherForecastAPI(city));
            result = await response.data;
        } catch (error) {
            if (isToday(selectedDate))
                setStatusMessage("No weather forecast today...");
            console.log(error);
        }

        const weatherObject = createWeatherObject(result);
        setWeatherForecast(weatherObject);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    });

    if (isLoading)
        return <CircularProgress color="secondary" />;

    if (!weatherForecast)
        return (
            <>
                <Typography component="span" variant="body1">
                    {statusMessage}
                </Typography>
            </>
        );

    return (
        <>
            <Typography component="h3" variant="body2" className="textDescription">
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

export default WeatherForecast;
