import { Calendar } from "antd"
import { useContext } from "react"
import { DashboardContext } from "../components/DashboardContext"
import { AddEvent } from "../components"


const Events = () => {
  const { isDark } = useContext(DashboardContext)
  const isEventsPage = window.location.href.includes("events")
  return (
    <div className={`${isEventsPage ? "lg:w-[60%] mt-10 " : ""} light-calender min-[285px]:mx-auto min-[285px]:w-xs min-[523px]:w-lg lg:w-95 ${isDark ? "dark-calendar" : ""}`}>
      <Calendar fullscreen={false}
      
        headerRender={({ value, type, onChange, onTypeChange }) => {
          return (
            <div className="flex justify-between items-center px-4 py-2">
              <h2 className="text-xl font-bold dark:text-white text-gray-800">Events</h2>
              <div className="flex gap-2 items-center">
                <select
                  value={type}
                  // onChange={(e) => onTypeChange(e.target.value)}
                  className="border rounded px-2 py-1 text-sm dark:bg-[#6b21a8] dark:text-white"
                >
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
                <select
                  value={value.month()}
                  onChange={(e) => {
                    const newValue = value.clone().month(Number(e.target.value));
                    onChange(newValue);
                  }}
                  className="border rounded px-2 py-1 dark:bg-[#6b21a8] dark:text-white text-sm"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>
                      {value.clone().month(i).format("MMM")}
                    </option>
                  ))}
                </select>

                <select
                  value={value.year()}
                  onChange={(e) => {
                    const newValue = value.clone().year(Number(e.target.value));
                    onChange(newValue);
                  }}
                  className="border rounded px-2 py-1 dark:bg-[#6b21a8] dark:text-white text-sm"
                >
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = new Date().getFullYear() - 5 + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          );
        }}
      />
      {isEventsPage && (<AddEvent />)}
    </div>
  )
}

export default Events