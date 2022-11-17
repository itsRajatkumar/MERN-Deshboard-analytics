import React, { useEffect, useState } from "react";
import SelectComponent from "./SelectComponent";
import { Months, Days, Year } from "../../data";
import Button from "@mui/material/Button";
const Selects = ({ range, type,year,setYear,month, setMonth,date, setDate,year2,setYear2,month2, setMonth2,date2, setDate2,ClickSubmit }) => {
  const handleYearChange = (e) => {
    e.preventDefault();
    setYear(e.target.value)
    // console.log(year)
  };
  const handleMonthChange = (e) => {
    e.preventDefault();
    setMonth(e.target.value)
    // console.log(month)
  };
  const handleYearChange2 = (e) => {
    e.preventDefault();
    setYear2(e.target.value)
    // console.log(year)
  };
  const handleMonthChange2 = (e) => {
    e.preventDefault();
    setMonth2(e.target.value)
    // console.log(month)
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {range === "day" ? (
              <input value={date} onChange={(e)=>{ console.log(e.target.value); setDate(e.target.value)}} type="date" name="date" id="date" />
            ) : (
              ""
            )}
            {range === "month" && range !== "day" ? (
              <SelectComponent  value={month} onChange={handleMonthChange} type="Month" options={Months} />
            ) : (
              ""
            )}
            {range !== "day" ? <SelectComponent value={year} onChange={handleYearChange} type="Year" options={Year} />:""}
          </div>
          {type === "comparison" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {range === "day" ? (
                <input value={date2} onChange={(e)=>{ console.log(e.target.value); setDate2(e.target.value)}} type="date" name="date" id="date" />
              ) : (
                ""
              )}
              {range === "month" && range !== "day" ? (
                <SelectComponent value={month2} onChange={handleMonthChange2} type="Month" options={Months} />
              ) : (
                ""
              )}
              {range !== "day" ?<SelectComponent value={year} onChange={handleYearChange} type="Year" options={Year} /> :""}
            </div>
          ) : (
            ""
          )}
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Button onClick={ClickSubmit} variant="outlined">Get Data</Button>
        </div>
      </div>
    </>
  );
};

export default Selects;
