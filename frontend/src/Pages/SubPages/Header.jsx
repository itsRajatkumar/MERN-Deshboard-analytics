import { Typography } from '@mui/material';
import * as React from 'react';
import Selects from '../../Components/Selects/Selects';
import SelectType from "../../Components/Selects/SelectType";

export default function Header({range,setRange,type,setType,year,setYear,month, setMonth,date, setDate,year2,setYear2,month2, setMonth2,date2, setDate2,ClickSubmit}) {

    console.log(type);
    console.log(range);
    return (
        <>
            <div style={{ marginTop: "50px", textAlign: "center" }}>
                <Typography variant="h3" gutterBottom>Search</Typography>
                <div style={{ marginTop: "50px", width: "95%", display: "flex", flexDirection: "row", justifyContent: "spaceAround" }}>
                    <SelectType range={range} setRange={setRange} type={type} setType={setType} onClick={ClickSubmit} />
                    {range !== "last7" ? <Selects range={range} type={type} year={year} setYear={setYear} month={month} setMonth={setMonth} date={date} setDate={setDate} year2 = {year2} setYear2={setYear2} month2={month2} setMonth2={setMonth2} date2={date2} setDate2={setDate2} ClickSubmit={ClickSubmit}/> : <Selects range={range} type={type} year={year} setYear={setYear} month={month} setMonth={setMonth} date={date} setDate={setDate} year2 = {year2} setYear2={setYear2} month2={month2} setMonth2={setMonth2} date2={date2} setDate2={setDate2} ClickSubmit={ClickSubmit}/>}
                </div>
            </div>
        </>

    );
}