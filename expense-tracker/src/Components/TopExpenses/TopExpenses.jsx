import React from 'react'

import useChartData from '../CustomHookss/useGraphData'
import './TopExpenses.css'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const TopExpenses = () => {

    const graphData = useChartData([
        { name: 'food', value: 0 },
            { name: 'entertainment', value: 0 },
            { name: 'travel', value: 0 },
    ]);

    const sortGraphData =()=>{
        return graphData.sort((a,b)=>b.value-a.value);
    }

  return (
    <div className='topExpenses__body'  onClick={sortGraphData}>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart data={sortGraphData()} layout="vertical" barSize={30}>
                    <XAxis type='number' hide/>
                    <YAxis type="category" width={120} dataKey="name"/>
                    <Bar dataKey="value" fill="#8784D2" />
                </BarChart>
            </ResponsiveContainer>
        </div>
  )
}

export default TopExpenses