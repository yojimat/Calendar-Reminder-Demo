import React from 'react'
import { ColCenter } from "../../calendar.styles";
import { DaysRow } from "./days.styles";

const Days = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const daysList = days.map((el, index) =>
      <ColCenter className="col col-center" key={index}>
        {el}
      </ColCenter>
    );

    return <DaysRow className="days row">{daysList}</DaysRow>;
}

export default Days
