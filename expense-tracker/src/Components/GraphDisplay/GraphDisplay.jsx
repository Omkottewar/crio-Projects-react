import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import useChartData from "../CustomHookss/useGraphData";
import GraphLabel from "../GraphLabel/GraphLabel";
import './GraphDisplay.css';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function GraphDisplay() {
  const data = useChartData([
    { name: 'Entertainment', value: 0 },
    { name: 'Food', value: 0 },
    { name: 'Travel', value: 0 },
  ]);

  return (
    <div className="graphDisplay__body">
      <div className="graph__container">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="GraphChart__label">
        <GraphLabel name="Food" color="#00C49F" />
        <GraphLabel name="Entertainment" color="#0088FE" />
        <GraphLabel name="Travel" color="#FFBB28" />
      </div>
    </div>
  );
}

export default GraphDisplay;
