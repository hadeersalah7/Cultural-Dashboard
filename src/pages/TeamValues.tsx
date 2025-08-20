import { lazy, Suspense } from "react";
import { LoadingSpiner } from "../components";


const TeamValues = () => {
  const TeamValuesChart = lazy(() => import("../components/TeamValuesChart"))
  const isTeamValuesPage = window.location.href.includes("team-values");
  return (
    <section className={`${isTeamValuesPage ? "lg:w-[80%] mt-20" : ""} card bg-base-100 shadow-sm dark:bg-[#28264f]  min-[285px]:w-xs min-[500px]:w-md min-[600px]:w-lg min-[285px]:mx-auto lg:w-120 rounded-xl py-5`}>
      <div className="card-body px-7">
        <h2 className="card-title text-xl dark:text-white text-gray-600">
          Team Values
        </h2>
        <hr className="py-5 text-gray-300" />
        <Suspense fallback={<LoadingSpiner />}>
          <TeamValuesChart />
        </Suspense>
      </div>
    </section>
  );
};

export default TeamValues;
