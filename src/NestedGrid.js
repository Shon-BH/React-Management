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

import ComboBoxCompany from './comboboxes/ComboBoxCompany';
import ComboBoxProduct from './comboboxes/ComboBoxProduct';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WebAssetIcon from '@mui/icons-material/WebAsset';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function BasicDatePicker(props) {
    const [value, setValue] = React.useState(null);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            props.setPlanData({value});
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
}

function FirstFormRow(props) {
  return (
    <React.Fragment>
      <Grid item xs={2}>
          <Item><ComboBoxCompany/></Item>
        </Grid>
          
        <Grid item xs={2}>
          <Item><BasicDatePicker setPlanData= {props.setPlanData} /></Item>
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

  function ThirdFormRow() {
    return (
      <React.Fragment>
        
          <Grid item xs={2}>
            <Item><BasicDatePicker/></Item>
          </Grid>
          <Grid item xs={2}>
            <Item><BasicDatePicker/></Item>
          </Grid>
          <Grid item xs={2}>
            <Item><ComboBoxProduct/></Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <TextField id="outlined-basic" 
                          label="수량" 
                          variant="outlined" 
                />
             </Item>
          {/* <Item>Item</Item> */}
        </Grid>
  
      </React.Fragment>
    );
  }

export default function NestedGrid() {

    const [planData, setPlanData] = React.useState("");

    return (
        <Box sx={{ flexGrow: 1 }}>
          <form>
              <h1><WebAssetIcon />생산계획등록</h1>
              
              <Grid container spacing={1}>
                  <Grid container item spacing={3}>
                      <FirstFormRow setPlanData={setPlanData} />
                  </Grid>
                  <Grid container item spacing={3}>
                      <SecondFormRow />
                  </Grid>
                  <HorizonLine />
              </Grid>

              <input type="text" value={planData}/>

              <Grid container spacing={1}>
              <h1><WebAssetIcon />상세정보</h1>
                  <Grid container item spacing={3}>
                      <ThirdFormRow />
                  </Grid>
                  <HorizonLine />
              </Grid>
                
            </form>
            <h1><FormatListBulletedIcon />주문내역</h1>
                <Table1 />
            <h1><FormatListBulletedIcon />코일정보</h1>
                <Table2 />

        </Box>
    );
}