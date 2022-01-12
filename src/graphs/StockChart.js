import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
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

  function anotherReaf() {
    let array = [];

    rows.map((row) => (
      array.push({
        name: row.statsId,
        uv: row.thickness,
        pv: row.length,
        amt: 2400,
      })
    ));

    return array;
  }

  const data = anotherReaf();

  return (
    <div>      
      <LineChart width={500} height={280} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval="preserveEnd" />
        <YAxis interval="preserveEnd" />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
