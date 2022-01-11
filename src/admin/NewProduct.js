import * as React from 'react';
import Box from '@mui/material/Box';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export default function BasicTrapFocus() {
  const [open, setOpen] = React.useState(false);

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
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="coilId" label="코일번호" variant="standard" />
            <TextField id="coilLength" label="길이" variant="standard" />
            <TextField id="coilWigth" label="폭" variant="standard" />
            <TextField id="coilThickness" label="두께" variant="standard" />
        </Box>

            <br />
            <Button variant="outlined" type="button" onClick={() => setOpen(false)}>
              등록
            </Button>
            <Button variant="outlined" type="button" onClick={() => setOpen(false)}>
              취소
            </Button>
          </Box>
        </TrapFocus>
      )}
    </Box>
  );
}
