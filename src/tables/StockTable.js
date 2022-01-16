import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

export default function Orders() {
  const [rows ,setRows] = React.useState([]);

  const statsLogFunc = async () => {
    const jsonData = await axios.get("/stats-service/stock_stats_log");
    setRows(jsonData.data);
  }  

  React.useEffect(()=>{
    statsLogFunc();
  }, []);
  
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>코일 번호</TableCell>
            <TableCell>계획 수량</TableCell>
            <TableCell>재고</TableCell>
            <TableCell>생산 수량</TableCell>
            <TableCell>공정 현황</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.productId}</TableCell>
              <TableCell>{row.stockPlan}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.makingStock}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
