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
    const jsonData = await axios.get("/stats-service/stats_log");
    setRows(jsonData.data);
  }  

  React.useEffect(()=>{
    statsLogFunc();
  }, []);
  
  return (
    <React.Fragment>
      <h1>통계</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>코일 번호</TableCell>
            <TableCell>코일 두께</TableCell>
            <TableCell>코일 넓이</TableCell>
            <TableCell>코일 길이</TableCell>
            <TableCell>공정 현황</TableCell>
            <TableCell>공정완료 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.statsId}</TableCell>
              <TableCell>{row.thickness}</TableCell>
              <TableCell>{row.width}</TableCell>
              <TableCell>{row.length}</TableCell>
              <TableCell>{row.statsStatus}</TableCell>
              <TableCell> {row.statsUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
