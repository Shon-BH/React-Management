import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboboxCompany({setCompany}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 165, display: 'inline'}}
      renderInput={(params) => <TextField {...params} label="회사" />}
      onChange={(e,val)=>{          
          console.log(val);
          setCompany(val);
      }}
    />
  );
}

// Combobox : 회사 이름 넣기
// const top100Films = [
//     { label: 'The Shawshank Redemption', year: 1994 },
//     { label: 'The Godfather', year: 1972 },
//     { label: 'The Godfather: Part II', year: 1974 },
//     { label: 'The Dark Knight', year: 2008 },
//     { label: '12 Angry Men', year: 1957 },
//     { label: "Schindler's List", year: 1993 },
//     { label: 'Pulp Fiction', year: 1994 },
// ];

const top100Films = [
    { label: 'The Shawshank Redemption', companyId: 1994 },
    { label: 'The Godfather', companyId: 1972 },
    { label: 'The Godfather: Part II', companyId: 1974 },
    { label: 'The Dark Knight', companyId: 2008 },
];