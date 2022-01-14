import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import axios from 'axios';

export default function StockChart() {
  const [rows ,setRows] = React.useState([]);

  const statsLogFunc = async () => {
    const jsonData = await axios.get("/stats-service/stock_stats_log");
    setRows(jsonData.data);
  }  

  React.useEffect(()=>{
    statsLogFunc();
  }, []);

  function anotherReaf() {
    let array = [];

    rows.map((row) => (
      array.push({
        name: row.productId,
        생산수량: row.makingStock,
        재고: row.stock,
      })
    ));

    return array;
  }

  const data = anotherReaf();
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" >
          <Label value="코일 번호" offset={-8} position="insideBottomRight" />
        </XAxis>
        <YAxis label={{ value: '수량', angle: -90, offset: 5, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="재고" stackId="a" fill="#82ca9d" />
        <Bar dataKey="생산수량" stackId="a" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
