import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Label } from 'recharts';
import axios from 'axios';

export default function TempChart1() {
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
      if (row.heatingFurnanceId==="hotRolling1") {
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
      <LineChart caption={"hotRolling1"} width={500} height={280} data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval="preserveEnd" >
          <Label value="날짜" offset={-5} position="insideBottomRight" />
        </XAxis>
        <YAxis interval="preserveEnd" label={{ value: '온도', angle: -90, offset: 5, position: 'insideLeft' }} />
        <Legend />
        <Line type="monotone" dataKey="예열대" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="가열대" stroke="#82ca9d" />2
        <Line type="monotone" dataKey="균열대" stroke="#ca8293" />
      </LineChart>
    </div>
  );
}
