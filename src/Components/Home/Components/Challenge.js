import React from "react";
import challengeImage from "../../../assets/Challenge.png";
function Challenge() {
  return (
    <div className="flex w-[80%] mx-auto py-[3%] justify-between items-center">
      <img
        src={challengeImage}
        alt="challenge"
        title="Challenge Image"
        className="rounded-3xl w-[47%]"
      />
      <div className="w-[47%]">
        <h5 className="text-[#4D4D4D] font-light">
          <span className="bg-gradient-to-r font-medium from-[#F6AB12] via-[#F12D0B] to-[#800437] text-transparent bg-clip-text">
            The Challenge
          </span>{" "}
          - Why Traditional Training Falls
        </h5>

        <h2 className="text-[#121212] mt-[1%] font-light">
          We Invest In training, but where’s the{" "}
          <strong className="font-semibold">ROI?</strong>
        </h2>
        <ul className="text-[#121212] ml-[30px] list-image-tick flex flex-col mt-[3%]  gap-[12px] font-light">
          <li>
            <strong className="text-[#4D4D4D]">Engagement Tracking</strong>
            <br />
            Traditional Training lacks engagement tracking , making ROI unclear
          </li>
          <li>
            <strong className="text-[#4D4D4D]">Quantify Learning Impact</strong>
            <br />
            Organisations struggle to quantify learning impact beyond attendance
          </li>
          <li>
            <strong className="text-[#4D4D4D]">Real Time Feedback</strong>
            <br />
            Trainers don’t have real-time feedback to improve effectiveness
          </li>
          <li>
            <strong className="text-[#4D4D4D]">90% Content</strong>
            <br />
            Participants forget 90% of content within a week without interaction
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Challenge;
