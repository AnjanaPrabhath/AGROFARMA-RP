import React from "react";
import Card from "../common/Card";

const avoid_crops = ["Carrot", "Brinjal", "Tomato", "Cabbage", "Leeks"];

const Avoid = () => {
  return (
    <div className="pt-24 px-16 grid gap-2">
      <Card
        className="text-center text-lg font-bold"
        rounded="rounded-3xl"
        padding={"p-0 py-2"}
      >
        Crops to Avoid
      </Card>
      <Card
        className="grid grid-cols-2 gap-2"
        rounded="rounded-3xl"
        padding="p-2"
      >
        {avoid_crops.map((crop, index) => (
          <Card
            key={index}
            className="col-span-1 h-20"
            rounded="rounded-3xl"
            bgColor="bg-[#ffe2e2]"
          >
            {crop}
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default Avoid;
