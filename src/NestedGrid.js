import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import HorizonLine from './HorizontalLine';

import Table1 from './tables/Table1';
import Table2 from './tables/Table2';

import Combobox from './Combobox';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WebAssetIcon from '@mui/icons-material/WebAsset';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicDatePicker() {
    const [value, setValue] = React.useState(null);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
}

function FirstFormRow() {
  return (
    <React.Fragment>
        <Grid item xs={2}>
            <Item><Combobox/></Item>
        </Grid>
          
        <Grid item xs={2}>
          <Item><BasicDatePicker/></Item>
        </Grid>

    </React.Fragment>
  );
}

function SecondFormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
         <Item>
            <TextField 
                id="filled-read-only-input" 
                label="담당자"
                InputProps={{
                    readOnly: true,
                }} 
                variant="filled"
                value="손준우" 
            />
          </Item>
          {/* <Item>Item</Item> */}
        </Grid>
        <Grid item xs={2}>
            <Item>
                <TextField 
                    id="filled-read-only-input" 
                    label="연락처"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value="010-1234-4567" 
                />
            </Item>
        </Grid>
        <Grid item xs={2}>
            <Item>
                <TextField 
                    id="filled-read-only-input" 
                    label="이메일"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value="sjw3957@gmail.com" 
                />
            </Item>
        </Grid>
      </React.Fragment>
    );
  }

export default function NestedGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <h1><WebAssetIcon />생산계획등록</h1>
            
            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    <FirstFormRow />
                </Grid>
                
                {/* <Grid container item spacing={3}>
                    <FormRow />
                </Grid> */}
            
                <Grid container item spacing={3}>
                    <SecondFormRow />
                </Grid>
                <HorizonLine />
            </Grid>

            <h1><FormatListBulletedIcon />상세정보</h1>
                <Table1 />
            <h1><FormatListBulletedIcon />코일정보</h1>
                <Table2 />
        </Box>
        
    );
}