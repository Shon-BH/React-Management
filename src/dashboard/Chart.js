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

/* 원본
const data = [
  {
    name: 0,
    uv: 3000,
    pv: 3000,
    amt: 2400,
  },
  {
    name: 10,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 20,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 30,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 40,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 50,
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 60,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default class Example extends React.PureComponent {
  render() {
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
}
*/