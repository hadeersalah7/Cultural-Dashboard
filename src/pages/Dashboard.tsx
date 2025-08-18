import { useContext } from "react"
import { CulutralInsights, DigitalArchives, Events, Feedback, TeamValues } from "."
import { DashboardContext } from "../components/DashboardContext"

const Dashboard = () => {
  const {toggleSidebar} = useContext(DashboardContext)
  return (
    <div className={`${toggleSidebar ? "xl:px-30" : ""} min-[285]:px-1 pt-10 grid min-[285px]:grid-cols-1 md:grid-cols-2 xl:px-21`}>
      <CulutralInsights />
      <TeamValues />
      <Events />
      <Feedback />
      <DigitalArchives />
    </div>
  )
}

export default Dashboard