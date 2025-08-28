import { LiaAngleRightSolid } from "react-icons/lia";
import { WatchDashboardVideos } from "../components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function CulutralInsights() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [video, setVideo] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    generateCulturalVideos();
  }, []);

  const generateCulturalVideos = async (): Promise<void> => {
    try {
      const response = await axios.get(
        "https://pixabay.com/api/videos/?key=51844135-d87b70ce49b8a1466f0e9c805&q=culture&per_page=10"
      );
      const hits = response.data.hits;
      console.log("response.data: ",response.data)
      setVideo(hits);
      setCurrentIndex(0);
    } catch (error) {
      toast.error("Could not fetch videos");
    }
  };

  const currentVideo = video[currentIndex];
  const thumbnail = currentVideo?.videos?.medium?.thumbnail;
  const videoUrl = currentVideo?.videos?.large?.url;
  const videoTags = currentVideo?.tags
  const handleNextVideo = (): void => {
    setCurrentIndex((prev) => (prev + 1) % video.length);
  };
  const isCulturalInsightsPage = window.location.href.includes("cultural-insights")
  return (
    <>
      <div className={`${isCulturalInsightsPage ? "xl:w-xl mt-15" : ""} card dark:bg-[#28264f] min-[285px]:w-xs min-[285px]:mx-auto min-[523px]:w-lg lg:w-96 shadow-sm px-7 rounded-xl`}>
        <figure>
          <figcaption className="py-3 flex items-center justify-between">
            <h1 className="text-lg font-bold text-gray-600 dark:text-white">
              Cultural Insights
            </h1>
            <span
              className="text-gray-500 cursor-pointer dark:text-white"
              title="next video"
              onClick={handleNextVideo}
            >
              <LiaAngleRightSolid />
            </span>
          </figcaption>
          <img src={thumbnail} alt="cultural-content" loading="lazy"/>
        </figure>
        <div className="card-body py-5">
          <h2 className="card-title text-xl">Promoting Cultural Hertiage</h2>
          <p className="pt-3 pb-1">
            {videoTags}.
          </p>
          <div className="card-actions justify-start pt-2">
            <button
              className="btn loginBtn text-white w-[120px] h-[40px] rounded-lg cursor-pointer dark:from-[#1e3a8a] dark:to-[#6b21a8]"
              onClick={() => {
                setIsModalOpen(true);
              }}
              title="Watch"
            >
              Watch
            </button>
          </div>
        </div>
      </div>

      <WatchDashboardVideos
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        videos={videoUrl}
      />
    </>
  );
}

export default CulutralInsights;
