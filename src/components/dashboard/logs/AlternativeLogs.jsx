import React, { useState } from "react";
import Card from "../../alternatives/common/Card";

import Beans from "../../../assets/crop-images/beans.png";
import Brinjal from "../../../assets/crop-images/brinjal.png";
import Carrot from "../../../assets/crop-images/carrot.png";
import Cabbage from "../../../assets/crop-images/cabbage.png";
import GreenChilli from "../../../assets/crop-images/green-chilli.png";
import Lime from "../../../assets/crop-images/lime.png";
import Potato from "../../../assets/crop-images/potato.png";
import Pumpkin from "../../../assets/crop-images/pumpkin.png";
import SnakeGourd from "../../../assets/crop-images/snake-gourd.png";
import Tomato from "../../../assets/crop-images/tomato.png";

import Avoid from "../../alternatives/recommendations/Avoid";
import Best from "../../alternatives/recommendations/Best";

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

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const AlternativeLogs = ({ alternatives }) => {
  const [selectedSession, setSelectedSession] = useState([]);
  const avoid = selectedSession.slice(-3);
  const best = selectedSession.slice(0, 3);
  console.log(selectedSession);

  console.log(alternatives);
  return (
    <div className="grid gap-4 pl-4 pt-4 grid-cols-12 h-full">
      <div className="col-span-4 gap-4 grid overflow-y-scroll pr-2 h-full">
        {alternatives.map((alternative, index) => (
          <div
            key={index}
            className="grid grid-cols-12 p-0 h-fit bg-white rounded-2xl"
            rounded="rounded-2xl"
            onClick={() => setSelectedSession(alternative.recommendations)}
          >
            <div className="col-span-6 p-4">
              <div className="text-xs text-gray-400">
                {new Date(alternative.timestamp).toLocaleString()}
              </div>
              <div className="mt-4 text-sm">
                <div>Previous Crop : {alternative.previousCrop}</div>
                <div>
                  Planting Month : {months[alternative.plantingMonth - 1]}
                </div>
                <div>
                  Harvesting Month : {months[alternative.harvestMonth - 1]}
                </div>
              </div>{" "}
            </div>
            <div className="col-span-6 overflow-hidden m-1 rounded-lg h-fit">
              <img
                className="h-32"
                src={
                  images[
                    alternative.previousCrop
                      .toLowerCase()
                      .trim()
                      .replace(/\s/g, "")
                  ]
                }
                alt={alternative.previousCrop}
              />
            </div>
          </div>
        ))}
      </div>
      {selectedSession.length > 0 ? (
        <div className="col-span-8 flex flex-col relative z-0">
          <div className="absolute top-[-12%]">
            <Best images={images} crops={avoid} />
          </div>
          <div className="absolute bottom-[12%]">
            {" "}
            <Avoid images={images} crops={avoid} />
          </div>
        </div>
      ) : (
        <div className="col-span-8 flex items-center justify-center">
          <p className="text-gray-500">
            Select a session from the right to view recommendations
          </p>
        </div>
      )}
    </div>
  );
};

export default AlternativeLogs;
