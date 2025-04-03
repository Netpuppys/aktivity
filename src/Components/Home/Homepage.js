import React from "react";
import Banner from "./Components/Banner";
import Challenge from "./Components/Challenge";
import ActivityWorks from "./Components/ActivityWorks";

function Homepage() {
  return (
    <div className="pt-[2%]">
      <Banner />
      <Challenge />
      <ActivityWorks />
    </div>
  );
}

export default Homepage;
