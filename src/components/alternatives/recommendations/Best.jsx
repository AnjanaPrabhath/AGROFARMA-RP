import React from "react";
import Card from "../common/Card";

const best_crops = [
  {
    name: "Beans",
    img: "/crops/beans.jpg",
    rank: 1,
  },
  {
    name: "Cabbage",
    img: "/crops/cabbage.jpg",
    rank: 2,
  },
  {
    name: "Tomato",
    img: "/crops/tomato.jpg",
    rank: 3,
  },
];

const Best = () => {
  return (
    <div className="pt-24 px-16 grid gap-2">
      <Card
        className="text-center text-lg font-bold"
        rounded="rounded-3xl"
        padding={"p-0 py-2"}
      >
        Best Alternatives
      </Card>
      <Card
        className="grid grid-cols-2 gap-2"
        rounded="rounded-3xl"
        padding="p-2"
      >
        {best_crops.map((crop, index) => (
          <Card
            key={index}
            className="col-span-2 flex items-center h-20"
            rounded="rounded-3xl"
            bgColor="bg-[#ffe2e2]"
          >
            <img src={crop.img} />
            <div className="w-full flex justify-between">
              <div>{crop.name}</div>
              <div>{crop.rank}</div>
            </div>
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default Best;
