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
      companyId : data.get("companyId"),
      name : data.get("companyName"),
      email : data.get("companyEmail"),
      phone : data.get("companyPhone"),
    }
    
    axios.post('/user-service/admin/companies', jsonData)
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
        새로운 고객사 등록
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
            <TextField id="companyId" name="companyId"  label="회사ID" variant="standard" />
            <TextField id="companyName" name="companyName" label="회사명" variant="standard" />
            <TextField id="companyEmail" name="companyEmail" label="회사 이메일" variant="standard" />
            <TextField id="companyPhone" name="companyPhone" label="회사 번호" variant="standard" />
        

            <br />
            <Button variant="outlined" type="submit">
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
