import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import HorizonLine from './HorizontalLine';

import Table1 from './tables/Table1';
import Table2 from './tables/Table2';

import ComboBoxCompany from './comboboxes/ComboBoxCompany';
import ComboBoxProduct from './comboboxes/ComboBoxProduct';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import axios from 'axios';
import BasicDatePicker from './date/BasicDatePicker';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function NewFormatDate(newDate){
  newDate = leadingZeros(newDate.getFullYear(), 4) + '-' +
          leadingZeros(newDate.getMonth() + 1, 2) + '-' +
          leadingZeros(newDate.getDate(), 2);
  return newDate;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
      for (let i = 0; i < digits - n.length; i++)
          zero += '0';
  }
  return zero + n;
}

function FirstFormRow({setCompany, regDate, companyList}) {
  return (
    <React.Fragment>
      <Grid item xs={2}>
          <Item><ComboBoxCompany setCompany={setCompany} companyList={companyList}/></Item>
        </Grid>
          
        <Grid item xs={2}>
          <Item>
            <TextField 
                  id="filled-read-only-input" 
                  label="등록일"
                  InputProps={{
                      readOnly: true,
                  }} 
                  variant="filled"
                  value={regDate} 
              />
          </Item>
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
                    value = "sjw3957@gmail.com"
                />
            </Item>
        </Grid>
      </React.Fragment>
    );
  }

  function ThirdFormRow({setProcessStart, setProcessEnd, setProductId, setStockPlan, productList}) {
    return (
      <React.Fragment>
          
          <Grid item xs={2}>
            <Item><BasicDatePicker setDate={setProcessStart}/></Item>
          </Grid>
          <Grid item xs={2}>
            <Item><BasicDatePicker setDate={setProcessEnd}/></Item>
          </Grid>
          <Grid item xs={2}>
            <Item><ComboBoxProduct setProductId={setProductId} productList={productList} /></Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
                <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                    onChange={(e)=>{
                      setStockPlan(e.target.value);
                    }}
              />
             </Item>
          {/* <Item>Item</Item> */}
        </Grid>
  
      </React.Fragment>
    );
  }

export default function NestedGrid() {

    const [company, setCompany] = React.useState({
      label: '',
      companyId: '',      
    });

    const date = NewFormatDate(new Date());
    const [regDate, setRegDate] = React.useState(date);
//    const [officer, setOfficer] = React.useState("");
//    const [email, setEmail] = React.useState("");
//    const [phoneNum, setphoneNum] = React.useState("");
    const [processStart, setProcessStart] = React.useState(date);
    const [processEnd, setProcessEnd] = React.useState(date);
    const [productId, setProductId] = React.useState("");
   
    const [stockPlan, setStockPlan] = React.useState(0);
    const [productList, setProductList] = React.useState([]);
    const [companyList, setCompanyList] = React.useState([]);

    const ProductAPI = async() => {
      const jsonData = await axios.get("/process-service/products");
      //console.log(jsonData.data);
      let tempList = [];
      jsonData.data.map( (v) => {
        tempList.push(v.productId);
      });
      setProductList(tempList);
    }

    const CompanyAPI = async() => {
      const jsonData = await axios.get("/process-service/companies");
      //console.log(jsonData.data);
      let tempList = [];
      jsonData.data.map( (v) =>{
        tempList.push({
          label : v.name,
          companyId : v.companyId,
        });
      });
      setCompanyList(tempList);
    }

    React.useEffect(()=> {
        ProductAPI();
        CompanyAPI();
    },[]);
    const f1 = () => {

      const check = /\d/;
      
      if(processStart > processEnd){
         alert("시작일이 더 큽니다."); 
         setProcessStart(date);
         setProcessEnd(date);
      } else if(!check.test(stockPlan)){
        alert("수량이 숫자가 아닙니다.");
        setStockPlan(0);
      }
      else{
        // axios.post('/process-service/orders', JSON.stringify(jsonData) ,{
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // })
        // .then(
        //   (res) =>{console.log(res.data);}
        // )         
      }      
    }
 

    return (
          
        <Box sx={{ flexGrow: 1 }}>
          <button onClick={f1}> 버튼</button>
          <form>
              
              <h1><WebAssetIcon />생산계획등록</h1>
              
              <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    <FirstFormRow setCompany={setCompany} regDate={regDate} companyList={companyList} />
                </Grid>
                <Grid container item spacing={3}>
                    <SecondFormRow />
                </Grid>
                <HorizonLine />
              </Grid>

              {/* <input type="text" value={planData}/> */}

              <Grid container spacing={1}>
                <h1><WebAssetIcon />상세정보</h1>
                <Grid container item spacing={3}>
                    <ThirdFormRow setProcessStart={setProcessStart} setProcessEnd={setProcessEnd} setProductId={setProductId} setStockPlan={setStockPlan} productList={productList} />
                </Grid>
                <HorizonLine />
              </Grid>
                
            
            <h1><FormatListBulletedIcon />주문내역</h1>
                <Table1 />
            <h1><FormatListBulletedIcon />코일정보</h1>
                <Table2 />
                
            </form>
        </Box>
    );
}