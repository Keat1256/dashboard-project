import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page B",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page C",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page D",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page E",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "Page F",
    uv: 0,
    pv: 0,
    amt: 899,
  },
  {
    name: "Page G",
    uv: 0,
    pv: 0,
    amt: 949,
  },
];

const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Last 6 Months (Revenue)</div>
            <ResponsiveContainer width="100%" aspect={ 2 / 1}>
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
                    <XAxis dataKey="name" stroke="gray" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8" />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d" />
                    <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart