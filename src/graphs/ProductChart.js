import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#87ff42'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#101012" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ProductChart() {
  const [rows ,setRows] = React.useState([]);

  const statsLogFunc = async () => {
    const jsonData = await axios.get("/stats-service/product_log");
    setRows(jsonData.data);
  }  

  React.useEffect(()=>{
    statsLogFunc();
  }, []);

  function anotherReaf() {
    let cnts = [0, 0, 0, 0, 0];
    let ids =["HAY106290", "HAY106291", "HAY106292", "HAY106293", "HAY106294"]
    let array = []

    // eslint-disable-next-line array-callback-return
    rows.map((row) => {
      if (row.productId === "HAY106290" && row.productStatus === "불량") {
        cnts[0] += 1;
      }
      else if (row.productId === "HAY106291" && row.productStatus === "불량") {
        cnts[1] += 1;
      }
      else if (row.productId === "HAY106292" && row.productStatus === "불량") {
        cnts[2] += 1;
      }
      else if (row.productId === "HAY106293" && row.productStatus === "불량") {
        cnts[3] += 1;
      }
      else if (row.productId === "HAY106294" && row.productStatus === "불량") {
        cnts[4] += 1;
      }
    });

    for (let i = 0; i < 5; i++) {
      array.push({
        name: ids[i],
        value: cnts[i],
      })
    }

    return array
  }

  const data = anotherReaf();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={600} height={600}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={125}
          fill="#101012"
          dataKey="value"
        >
          <LabelList 
            dataKey="name"
            fill="#101012"
            position="outside"
            angle="0"
            style={{
              fontSize: '1.2rem',
              fontWeight: 'bold' 
            }}
          />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
