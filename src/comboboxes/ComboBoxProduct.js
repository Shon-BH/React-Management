import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBoxProduct({setProductId}) {
   
  return (
    
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 165, display: 'inline'}}
        renderInput={(params) => 
        <TextField {...params} label="상품정보" />}
        onChange={ (e, val) => {          
          setProductId(val);
        }
        }
      />
    
  );
}

// Combobox : 회사 이름 넣기
const top100Films = [
  'id1','id2','id3'
];