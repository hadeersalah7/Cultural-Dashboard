import { CulutralInsights, DigitalArchives, Events, Feedback, TeamValues } from "."

const Dashboard = () => {
  return (
    <div className="px-21 pt-10 grid min-[285px]:grid-cols-1 md:grid-cols-2">
      <CulutralInsights />
      <TeamValues />
      <Events />
      <Feedback />
      <DigitalArchives />
    </div>
  )
}

export default Dashboard