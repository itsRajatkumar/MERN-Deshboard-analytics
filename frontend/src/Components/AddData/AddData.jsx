import {  Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const AddData = () => {
    const [textValue, setTextValue] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [date, setDate] = useState(new Date());
    console.log(textValue)
    console.log(quantity)
    console.log(date)
    const submitform = (e)=>{
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API}/add`,{
            product_name:textValue,
            date:date, 
            quantity:quantity
        }).then((response) => {
            console.log("data saved")
            console.log(response)
          });

    }
    return (
        <>
            <div style={{ marginTop: "50px", textAlign: "center" }}>
                <Typography variant="h3" gutterBottom>Search</Typography>
                <form onSubmit={submitform} style={{display:"flex",flexDirection:"column", margin:"auto", height:"60vh", width:"40%",alignItems:"center" , justifyContent:"space-evenly"}}>
                    <select value={textValue} onChange={(e)=>setTextValue(e.target.value)} name="text">
                        <option value="none" hidden>Select Product</option>
                        <option value="A">Product A</option>
                        <option value="B">Product B</option>
                        <option value="C">Product C</option>
                        <option value="D">Product D</option>
                    </select>
                    <input value={date} onChange={(e)=>{setDate(e.target.value)}} type="date" name="date"/>
                    <input value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} type="number" name="quantity" />
                    <input type="submit" value="submit" />
                </form>

            </div>
        </>
    );
};

export default AddData