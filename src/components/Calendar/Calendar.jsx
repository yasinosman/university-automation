import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calendar = () =>{
  const [value, setValue] = React.useState(new Date());
  

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker 
        sx={{
         bgcolor:"#fafafa",
         marginTop:"20px",
         marginLeft:"103px",
         maxWidth:"500px",
         width:"470px",
         paddingRight:"143px",
           }}
        orientation="landscape"
        openTo="day"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        
      />
    </LocalizationProvider>
    
  );
    }
    export default Calendar;

