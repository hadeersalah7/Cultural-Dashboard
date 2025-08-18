import { LiaAngleRightSolid } from "react-icons/lia";
import { WatchDashboardVideos } from "../components";
import { useState } from "react";

function CulutralInsights() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <div className="card bg-base-100 dark:bg-[#28264f] min-[285px]:w-full lg:w-96 shadow-sm px-7 rounded-xl">
        <figure>
          <figcaption className="py-3 flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-600 dark:text-white">
              Cultural Insights
            </h1>
            <span className="text-gray-500 cursor-pointer dark:text-white">
              <LiaAngleRightSolid />
            </span>
          </figcaption>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body py-5">
          <h2 className="card-title text-xl">Promoting Cultural Hertiage</h2>
          <p className="pt-3">
            A powerful message about how sharing cultural heritage connects
            humanity
          </p>
          <div className="card-actions justify-start pt-2">
            <button
              className="btn loginBtn text-white w-[120px] h-[40px] rounded-lg cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              Watch
            </button>
          </div>
        </div>
      </div>

      <WatchDashboardVideos
        isModalOpen={isModalOpen}
        setIsModalopen={setIsModalOpen}
      />
    </>
  );
}

export default CulutralInsights;
