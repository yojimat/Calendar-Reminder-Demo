import { getMonth, getHours, getMinutes, getDate, getYear } from "date-fns";

const sortByTime = (a, b) => {
    if (a.fullDate < b.fullDate)
        return -1;
    if (a.fullDate > b.fullDate)
        return 1;
    return 0;
};

const filterReminderListByDate = (fullDate, allDaysReminderList) => {
    const filteredList = allDaysReminderList
        .filter(el => getDate(el.fullDate) === getDate(fullDate) &&
            getMonth(el.fullDate) === getMonth(fullDate));

    return filteredList;
};

const getFullDateByDayAndTime = (selectedDate, day, time) => {
    const timeArray = time.split(":"),
        hours = timeArray[0], minutes = timeArray[1];

    const fullDate = new Date(
        getYear(selectedDate),
        getMonth(selectedDate),
        parseInt(day),
        hours,
        minutes
    );

    return fullDate;
}

const getTimeByFullDate = (fullDate) => {
    const hours = getHours(fullDate).toString().padStart(2, "0"),
        minutes = getMinutes(fullDate).toString().padStart(2, "0"),
        time = hours.concat(":", minutes);

    return time;
}

export {
    sortByTime, filterReminderListByDate,
    getFullDateByDayAndTime, getTimeByFullDate
};