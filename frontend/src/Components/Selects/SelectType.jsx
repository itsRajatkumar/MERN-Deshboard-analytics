import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function SelectType({setRange,range,type,setType}) {
  return (
    <div style={{width:"40vw", display:"flex", flexDirection: "row" ,justifyContent:"space-between"}}>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Select Type</FormLabel>
      <RadioGroup
        row
        value={type}
        onChange={(e)=>setType(e.target.value)}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="normal" control={<Radio />} label="Normal" />
        <FormControlLabel value="comparison" control={<Radio />} label="Comparison" />
      </RadioGroup>
    </FormControl>


    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Select Range</FormLabel>
      <RadioGroup
        row
        value={range}
        onChange={(e)=>setRange(e.target.value)}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="year" control={<Radio />} label="Year" />
        <FormControlLabel value="month" control={<Radio />} label="Month" />
        <FormControlLabel value="day" control={<Radio />} label="Day" />
        <FormControlLabel value="last7" control={<Radio />} label="Last 7 Days" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}