import React from "react";
import AlternativeForm from "../../components/alternatives/alternatives/AlternativeForm";
import TipsSection from "../../components/alternatives/alternatives/TipsSection";

const Alternatives = () => {
  return (
    <div className="bg-gradient-to-l from-[#a0fbc1] to-white grid grid-cols-2">
      <div className="col-span-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute bg-[#4baf47] w-[100vh] h-[150vh] rounded-3xl rotate-[20deg] left-[-48%] top-[-2%] z-0" />
        <AlternativeForm />
      </div>
      <div className="col-span-1">
        <TipsSection />
      </div>
    </div>
  );
};

export default Alternatives;
