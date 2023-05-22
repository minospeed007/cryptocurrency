import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectAutoWidth=({time,setTimePeriod})=> {
  const [age ]=React.useState(time)
 const handleChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="demo-simple-select-autowidth-label" >Time</InputLabel>

        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
          placeholder='time period'
        >
        {time?.map((date)=> <MenuItem value="">{date}</MenuItem>)}
          
          

        </Select>
      </FormControl>
    </div>
  );
}

export default SelectAutoWidth;