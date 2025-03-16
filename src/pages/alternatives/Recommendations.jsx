import React from "react";
import Avoid from "../../components/alternatives/recommendations/Avoid";
import Best from "../../components/alternatives/recommendations/Best";

const Recommendations = () => {
  return (
    <div className="bg-gradient-to-r from-[#a0fbc1] to-white grid grid-cols-2 h-lvh">
      <div className="col-span-1">
        <Avoid />
      </div>
      <div className="col-span-1">
        <Best />
      </div>
    </div>
  );
};

export default Recommendations;
