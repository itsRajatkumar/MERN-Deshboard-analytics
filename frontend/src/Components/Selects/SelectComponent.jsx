import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';
import { useState } from 'react';

export default function SelectComponent({options,type,value,onChange}) {
  // const [data, setData] = React.useState('');
  // const handleChange = (event) => {
  //   setData(event.target.value);
  // };

  return (
    <div>
      
      { <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>         
          {options?.map(option => {
            // if(option.id>)
            return ( 
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
        })}
        </Select>
      </FormControl>}
    </div>
  );
}