import { useState } from "react";
import { toast } from "react-toastify";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (feedback.trim() === "") {
      toast.error("Please enter your feedback before submitting.");
      return;
    }
    if (feedback.trim() !== "") {
      toast.success("Thank you for your feedback!");
      setFeedback("");
    }
  }
  const isFeedbackPage = window.location.href.includes("feedback")
  return (
    <div className={`${isFeedbackPage ? "mt-15 xl:w-xl" : ""} dark:bg-[#28264f] rounded-lg p-4 shadow-md  mx-auto min-[285px]:w-xs min-[523px]:w-lg lg:w-120`}>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">We'd love your feedback</h3>
      <textarea
        className="w-full h-24 p-2 rounded border outline-none border-gray-300 dark:border-gray-600 dark:bg-[#1f1b3a] dark:text-white resize-none"
        placeholder="Share your thoughts, ideas, or suggestions..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm text-gray-500 dark:text-gray-300">Your feedback helps us grow 🌱</span>
        <button
          className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-[#1e3a8a] dark:to-[#6b21a8] text-white px-4 py-1.5 rounded hover:opacity-90 transition cursor-pointer"
          title="Submit Feedback"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>

  )
}

export default Feedback