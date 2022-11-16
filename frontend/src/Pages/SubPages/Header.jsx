import { Typography } from '@mui/material';
import * as React from 'react';
import Selects from '../../Components/Selects/Selects';
import SelectType from "../../Components/Selects/SelectType";

export default function Header({range,setRange,type,setType,year,setYear,month, setMonth,date, setDate,ClickSubmit}) {

    console.log(type);
    console.log(range);
    return (
        <>
            <div style={{ marginTop: "50px", textAlign: "center" }}>
                <Typography variant="h3" gutterBottom>Search</Typography>
                <div style={{ marginTop: "50px", width: "95%", display: "flex", flexDirection: "row", justifyContent: "spaceAround" }}>
                    <SelectType range={range} setRange={setRange} type={type} setType={setType} />
                    {range !== "last7" ? <Selects range={range} type={type} year={year} setYear={setYear} month={month} setMonth={setMonth} date={date} setDate={setDate} ClickSubmit={ClickSubmit}/> : ""}
                </div>
            </div>
        </>

    );
}