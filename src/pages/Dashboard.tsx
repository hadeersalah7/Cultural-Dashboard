import { useEffect, useRef} from "react";
import {
  CulutralInsights,
  DigitalArchives,
  Events,
  Feedback,
  TeamValues,
} from ".";
import { Footer } from "../components";
import { BiChevronUp } from "react-icons/bi";
const Dashboard = () => {
  // const [showBtn, setShowBtn] = useState<boolean>(false);
  const btnScrollToTop = useRef<HTMLButtonElement | null>(null);

  // window.onscroll = () => {
  //   if (scrollY >= 300) {
  //     setShowBtn(true);
  //   } else {
  //     setShowBtn(false)
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        btnScrollToTop.current?.classList.remove("scrollBtnHidden");
        btnScrollToTop.current?.classList.add("scrollBtn");
      } else {
        btnScrollToTop.current?.classList.remove("scrollBtn");
        btnScrollToTop.current?.classList.add("scrollBtnHidden");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleScrollToTopClick = () => {
    document.querySelector("nav")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
      <button
        ref={btnScrollToTop}
        className="scrollBtnHidden fixed w-20 h-20 bottom-4 right-4 flex justify-center items-center bg-[#6b21a8] dark:bg-[#28264f] text-white p-3 rounded-full shadow-lg hover:bg-[#b58cd7] transition"
        onClick={handleScrollToTopClick}>
        <BiChevronUp className="text-7xl" />
      </button>
      <Footer />
    </>
  );
};

export default Dashboard;
