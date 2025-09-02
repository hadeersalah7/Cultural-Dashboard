import {
  CulutralInsights,
  DigitalArchives,
  Events,
  Feedback,
  TeamValues,
} from ".";
import { Footer } from "../components";

const Dashboard = () => {
  return (
    <>
      <div
        className={`min-[285]:px-1 pt-10 grid min-[285px]:grid-cols-1 lg:grid-cols-2 xl:px-21 gap-5 `}
      >
        <CulutralInsights />
        <TeamValues />
        <Events />
        <Feedback />
        <DigitalArchives />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
