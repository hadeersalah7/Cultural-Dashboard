import { useContext } from "react";
import {
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DashboardContext } from "../components/DashboardContext";

const TeamValues = () => {
  const { isDark } = useContext(DashboardContext);
  const data = [
    { value: "Trust", score: 80 },
    { value: "Integrity", score: 70 },
    { value: "Empathy", score: 90 },
    { value: "Creativity", score: 65 },
    { value: "Discipline", score: 75 },
  ];
  const isTeamValuesPage = window.location.href.includes("team-values");
  return (
    <section className={`${isTeamValuesPage ? "lg:w-[90%]" : ""} card bg-base-100 shadow-sm dark:bg-[#28264f]  min-[285px]:w-xs min-[500px]:w-md min-[600px]:w-lg min-[285px]:mx-auto lg:w-120 rounded-xl py-5`}>
      <div className="card-body px-7">
        <h2 className="card-title text-xl dark:text-white text-gray-600">
          Team Values
        </h2>
        <hr className="py-5 text-gray-300" />
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
      </div>
    </section>
  );
};

export default TeamValues;
