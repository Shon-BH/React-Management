import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import HorizonLine from './HorizontalLine';
import Table2 from './tables/Table2';
import ComboBoxCompany from './comboboxes/ComboBoxCompany';
import ComboBoxProduct from './comboboxes/ComboBoxProduct';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import axios from 'axios';
import BasicDatePicker from './date/BasicDatePicker';
import { store } from './store/store';

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
                required
                id="outlined-required"
                label="등록일"
                InputProps={{
                  readOnly: true,
                }} 
                //value={regDate}
                defaultValue={regDate}
            />
            {/* <TextField 
                  id="filled-read-only-input" 
                  label="등록일"
                  InputProps={{
                      readOnly: true,
                  }} 
                  variant="filled"
                  value={regDate} 
              /> */}
          </Item>
        </Grid>

    </React.Fragment>
  );
}

function SecondFormRow({resUser}) {
    return (
      <React.Fragment>
        <Grid item xs={2}>
         <Item>
              <TextField                
                id="outlined-required"
                label="담당자"                
                InputProps={{
                  readOnly: true,
                }}
                defaultValue={resUser.name} 
                value = {resUser.name} 
              />
            {/* <TextField 
                id="filled-read-only-input" 
                label="담당자"
                InputProps={{
                    readOnly: true,
                }} 
                variant="filled"
                value = {resUser.name} 
            /> */}
          </Item>
          {/* <Item>Item</Item> */}
        </Grid>
        <Grid item xs={2}>
            <Item>
              <TextField
                  id="outlined-read-only-input"
                  label="연락처"
                  defaultValue={resUser.phone}
                  InputProps={{
                    readOnly: true,
                  }}
                  value = {resUser.phone}
                />

                {/* <TextField
                  required
                  id="outlined-required"
                  label="연락처"
                  value={resUser.phone}
                  // defaultValue="value" 
                /> */}
                {/* <TextField 
                    id="filled-read-only-input" 
                    label="연락처"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value={resUser.phone}
                /> */}
            </Item>
        </Grid>
        <Grid item xs={2}>
            <Item>
                <TextField
                  id="outlined-read-only-input"
                  label="이메일"
                  defaultValue="email"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={resUser.userId}
                />
                {/* <TextField
                  required
                  id="outlined-required"
                  label="이메일"
                  value={resUser.userId}
                  // defaultValue="value" 
                /> */}
                {/* <TextField 
                    id="filled-read-only-input" 
                    label="이메일"
                    InputProps={{
                        readOnly: true,
                    }} 
                    variant="filled"
                    value = {resUser.userId}
                /> */}
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

    const [state,dispatch] = React.useContext(store);
    const date = NewFormatDate(new Date());
    const [regDate, setRegDate] = React.useState(date);

    const [processStart, setProcessStart] = React.useState(date);
    const [processEnd, setProcessEnd] = React.useState(date);
    const [productId, setProductId] = React.useState("");
    const [companyId, setCompany] = React.useState("");

    const [stockPlan, setStockPlan] = React.useState(0);
    const [productList, setProductList] = React.useState([]);
    const [companyList, setCompanyList] = React.useState([]);
    const [resUser, setResUser] = React.useState({name:"", phone:"", userId:""});
    
    

    const ProductPlanAPI = async() => {
      const jsonData =  await axios.get(`/process-service/${state.userId}/plans`);
      //const jsonData =  await APICall();
      let tempCompanylist = [];
      let tempProductlist = [];
      const responseUser =jsonData.data.responseUser;

      const clist = jsonData.data.companyList;
      const plist = jsonData.data.productList;

      clist.map((c) => {
        const temp = {
          label : c.name,
          companyId : c.companyId,
        }
       tempCompanylist.push(temp);
      });

      plist.map( (p) => {
        const temp = {
          label: p.productId,
          productId : p.productId
        }
         tempProductlist.push(temp);
      });

      setCompanyList(tempCompanylist);
      setProductList(tempProductlist);
      setResUser(responseUser);
    }

    React.useEffect(()=> {
        // ProductAPI();
        // CompanyAPI();
        ProductPlanAPI();
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
        const planData = {
          userId : resUser.userId,
          productId : productId,
          companyId : companyId,
          processStart: processStart,
          processEnd: processEnd,
          stockPlan: stockPlan,
        }

        axios.post('/process-service/orders', JSON.stringify(planData) ,{
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(
          (res) =>{console.log(res.data);}
        ).catch(error => {
          // ... 에러 처리
          alert("error");      
        });

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
                    <SecondFormRow resUser={resUser} />
                </Grid>
                {/* <Grid container item spacing={3}>
                    <SecondFormRow resUser={resUser}/>
                </Grid> */}
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
              
            <h1><FormatListBulletedIcon />코일정보</h1>
                <Table2 />
                
            </form>
        </Box>
    );
}