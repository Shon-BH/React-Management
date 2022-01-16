import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';


export default function ComboBoxProduct({setProductId, productList}) {
  
  // const [productList, setProductList] = useState([]);
  
  // useEffect(()=> {

  //   const event = async() => {
  //     const jsonData = await axios.get("/process-service/products");
  //     //console.log(jsonData.data);
  //     let tempList = [];
  //     jsonData.data.map( (v) =>{
  //       tempList.push(v.productId);
  //     });
  //     setProductList(tempList);
  //   }
    
  //   event(); 
    
  // },[]);

  return (
    
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={productList}
        sx={{ width: 165, display: 'inline'}}
        renderInput={(params) => 
        <TextField {...params} label="상품정보" />}
        onChange={ (e, val) => {          
            setProductId(val.productId);
          } 
        }
      />
    
  );
}

// Combobox : 회사 이름 넣기
const top100Films = [
  'id1','id2','id3'
];