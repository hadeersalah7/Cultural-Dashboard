import  { useContext } from 'react'
import { DashboardContext } from './DashboardContext';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const TeamValuesChart = () => {
    const { isDark } = useContext(DashboardContext);
    const data = [
        { value: "Trust", score: 80 },
        { value: "Integrity", score: 70 },
        { value: "Empathy", score: 90 },
        { value: "Creativity", score: 65 },
        { value: "Discipline", score: 75 },
    ];
    return (
        <div className="h-[300px] -translate-x-5">
            <ResponsiveContainer className="w-full h-full">
                <LineChart data={data}>
                    <CartesianGrid stroke={isDark ? "#fff" : "#ccc"} />
                    <Line
                        type="monotone"
                        dataKey="score"
                        stroke={isDark ? "#ffff" : "#8a2cf6"}
                        dot={{ stroke: "#8a2cf6" }}
                    />
                    <XAxis
                        dataKey="value"
                        stroke={isDark ? "#fff" : "#333"}
                        tick={{ fill: isDark ? "#fff" : "#333", fontSize: 12 }}
                    />
                    <YAxis
                        stroke={isDark ? "#fff" : "#333"}
                        tick={{ fill: isDark ? "#fff" : "#333", fontSize: 12 }}
                    />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TeamValuesChart