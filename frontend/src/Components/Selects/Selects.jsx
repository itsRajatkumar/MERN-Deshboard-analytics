import React, { useEffect, useState } from "react";
import SelectComponent from "./SelectComponent";
import { Months, Days, Year } from "../../data";
import Button from "@mui/material/Button";
const Selects = ({ range, type,year,setYear,month, setMonth,date, setDate,ClickSubmit }) => {
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
                <input value={date} onChange={(e)=>{ console.log(e.target.value); setDate(e.target.value)}} type="date" name="date" id="date" />
              ) : (
                ""
              )}
              {range === "month" && range !== "day" ? (
                <SelectComponent type="Month" options={Months} />
              ) : (
                ""
              )}
              {range !== "day" ?<SelectComponent type="Year" options={Year} /> :""}
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
