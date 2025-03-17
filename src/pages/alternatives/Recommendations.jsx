import React from "react";
import Avoid from "../../components/alternatives/recommendations/Avoid";
import Best from "../../components/alternatives/recommendations/Best";
import Card from "../../components/alternatives/common/Card";
import Beans from "../../assets/crop-images/beans.png";
import Brinjal from "../../assets/crop-images/brinjal.png";
import Carrot from "../../assets/crop-images/carrot.png";
import Cabbage from "../../assets/crop-images/cabbage.png";
import GreenChilli from "../../assets/crop-images/green-chilli.png";
import Lime from "../../assets/crop-images/lime.png";
import Potato from "../../assets/crop-images/potato.png";
import Pumpkin from "../../assets/crop-images/pumpkin.png";
import SnakeGourd from "../../assets/crop-images/snake-gourd.png";
import Tomato from "../../assets/crop-images/tomato.png";

const months = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

const images = {
  beans: Beans,
  brinjal: Brinjal,
  carrot: Carrot,
  cabbage: Cabbage,
  greenchilli: GreenChilli,
  lime: Lime,
  potato: Potato,
  pumpkin: Pumpkin,
  snakegourd: SnakeGourd,
  tomato: Tomato,
};

const Recommendations = ({ recommendations }) => {
  console.log(recommendations);

  const previousCrop = recommendations.previousCrop;
  const plantingMonth = recommendations.plantingMonth;
  const harvestMonth = recommendations.harvestMonth;
  const recs = recommendations.recommendations;
  const sortedRecommendations = recs.sort(
    (a, b) => b.finalScore - a.finalScore
  );

  const best = sortedRecommendations.slice(0, 3);
  const avoid = sortedRecommendations.slice(-3);

  return (
    <div className="h-lvh bg-gradient-to-r from-[#a0fbc1] to-white px-40">
      <div className="pt-20 px-16">
        <Card rounded="rounded-3xl" padding="p-0" className="overflow-hidden">
          <div className="grid grid-cols-4 max-h-44">
            <div className="col-span-1 p-6">
              <h2 className="font-semibold text-xl pb-4">Your Query</h2>
              <span>Previous Crop : {previousCrop}</span>
              <br />
              <span>Month Planted : {plantingMonth}</span>
              <br />
              <span>Harvesting Month : {harvestMonth}</span>
            </div>
            <div className="col-span-3 m-1 rounded-2xl max-h-40 overflow-y-hidden">
              <img
                src={
                  images[previousCrop.toLowerCase().trim().replace(/\s/g, "")]
                }
                alt={previousCrop}
                className=""
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-[-40px] grid grid-cols-2">
        <div className="col-span-1">
          <Avoid crops={avoid} images={images} />
        </div>
        <div className="col-span-1">
          <Best crops={best} images={images} />
        </div>
      </div>
      <div className="text-center mt-20">
        *Hover over a specific crop to see more information.
      </div>
    </div>
  );
};

export default Recommendations;
