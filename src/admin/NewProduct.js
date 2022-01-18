import * as React from 'react';
import Box from '@mui/material/Box';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import axios from 'axios';

export default function BasicTrapFocus() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const jsonData = {
      productId : data.get("coilId"),
      thickness : data.get("coilThickness"),
      width : data.get("coilWigth"),
      length : data.get("coilLength"),
    }

    axios.post('/user-service/admin/products', jsonData)
    .then(response => {      
      alert('등록완료');

    }).catch(error => {
    // ... 에러 처리
    alert(error);      
  });
    
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Button variant="contained" type="button" onClick={() => setOpen(true)}>
        새로운 코일 등록
      </Button>
      {open && (
        <TrapFocus open>
          <Box tabIndex={-1} sx={{ mt: 1, p: 1 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="coilId" name="coilId" label="코일번호" variant="standard" />
            <TextField id="coilLength" name="coilLength" label="길이" variant="standard" />
            <TextField id="coilWigth" name="coilWigth" label="폭" variant="standard" />
            <TextField id="coilThickness" name="coilThickness" label="두께" variant="standard" />
        

            <br />
            <Button variant="outlined" type="submit" >
              등록
            </Button>
            <Button variant="outlined" type="button" onClick={() => setOpen(false)}>
              취소
            </Button>
            </Box>
          </Box>
        </TrapFocus>
      )}
    </Box>
  );
}
