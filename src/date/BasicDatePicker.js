import * as React from 'react';
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { TextField } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (let i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
}


function compDate(newDate){
    let now = new Date();
    now = leadingZeros(now.getFullYear(), 4) + '-' +
          leadingZeros(now.getMonth() + 1, 2) + '-' +
          leadingZeros(now.getDate(), 2);

    if(now > newDate){
        return false;
    } 

    return true;
}


function BasicDatePicker({setDate}) {
    const [value, setValue] = React.useState(new Date());
    
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {

            newValue = leadingZeros(newValue.getFullYear(), 4) + '-' +
            leadingZeros(newValue.getMonth() + 1, 2) + '-' +
            leadingZeros(newValue.getDate(), 2);

            if(compDate(newValue)){
                setValue(newValue);
                setDate(newValue);    
            }else{
                alert("날짜 선택이 잘못 되었습니다.");
                setValue(new Date());
            }  
            
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
}

export default BasicDatePicker;