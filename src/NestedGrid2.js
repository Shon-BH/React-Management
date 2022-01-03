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

import Table5 from './tables/Table5';

import Combobox from './Combobox';

// 아이콘 사용=============================================
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
      </React.Fragment>
    );
  }

export default function NestedGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    <FirstFormRow />
                </Grid>
            
                <Grid container item spacing={3}>
                    <SecondFormRow />
                </Grid>
                <HorizonLine />
            </Grid>

            <h1><FormatListBulletedIcon />상세정보</h1>
                <Table5 />
        </Box>
        
    );
}