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

import OrderTable from './tables/OrderTable';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
          <Item>
            <Paper>
            <InputBase
              sx={{ ml: 10, flex: 1, p:'12px'}}
              placeholder="회사"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{p:'1px'}} aria-label="search">
              <SearchIcon />
            </IconButton>
            </Paper>
          </Item>
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
            <Paper>
            <InputBase
              sx={{ ml: 10, flex: 1, p:'12px' }}
              placeholder="담당자"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{ p: '1px' }} aria-label="search">
              <SearchIcon />
              </IconButton>
            </Paper>
          </Item>
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
                <OrderTable/>
        </Box>
    );
}