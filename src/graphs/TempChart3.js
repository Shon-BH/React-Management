import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import axios from 'axios';

export default function TempChart3() {
  const [rows ,setRows] = React.useState([]);

  const statsLogFunc = async () => {
    const jsonData = await axios.get("/stats-service/temperature_stats_log");
    setRows(jsonData.data);
  }  

  React.useEffect(()=>{
    statsLogFunc();
  }, []);

  function anotherReaf() {
    let array = [];

    // eslint-disable-next-line array-callback-return
    rows.map((row) => {
      if (row.heatingFurnanceId==="hotRolling3") {
        array.push({
          name: row.heatingFurnanceUpdate,
          예열대: row.preheatingZoneTemp,
          가열대: row.heatingZoneTemp,
          균열대: row.soakingZoneTemp
        })
      }
    });

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
        <Line type="monotone" dataKey="예열대" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="가열대" stroke="#82ca9d" />
        <Line type="monotone" dataKey="균열대" stroke="#ca8293" />
      </LineChart>
    </div>
  );
}
