import React from "react";
import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

const inputFields = [
  { name: "harvested_crop", placeholder: "I just harvested" },
  { name: "crop_to_plant", placeholder: "I am going to plant" },
  { name: "harvest_month", placeholder: "Expected harvesting month" },
  { name: "soil_comp", placeholder: "Soil acidity" },
];

const AlternativeForm = () => {
  return (
    <div className="grid w-full grid-cols-4 items-center justify-center z-50">
      <div className="col-start-2 col-span-2 grid gap-8">
        <Card>
          <h1 className="text-2xl text-center font-semibold">
            Crop Recommendations
          </h1>
        </Card>
        <Card className="flex gap-4 flex-col">
          <div className="grid grid-flow-row gap-4">
            {inputFields.map((field, index) => (
              <Input
                placeholder={field.placeholder}
                name={field.name}
                key={index}
              />
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" />
            Skip Soil Acidity*
          </div>
          <div>
            <Button>Get Recommendations</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AlternativeForm;
