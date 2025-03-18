import { useState } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(""); // Track selected option

  const options = {
    option1: <p>Week 1 – Planting Seeds <br />
    |--- Prepare nutrient-rich, well-drained <br />
    |--- Plant 2 seeds per hole for better germination. <br />
    |--- Keep a 2-foot distance between holes for proper spacing. <br />
    |--- Water lightly but consistently to keep the soil moist. <br />
    Week 1 – Planting Seeds <br />
    |--- Prepare nutrient-rich, well-drained <br />
    |--- Plant 2 seeds per hole for better germination. <br />
    |--- Keep a 2-foot distance between holes for proper spacing. <br />
    |--- Water lightly but consistently to keep the soil moist. <br />
    <br />
    Week 2 – Germination & Early Growth <br />
    |--- Seeds start sprouting (typically in 5–10 days). <br />
    |--- Ensure full sun exposure (6–8 hours daily). <br />
    |--- Keep soil moist but not soggy. <br />
    |--- If both seeds sprout, thin out the weaker one.</p>,
    option2: "Details about option 2...",
    option3: "Details about option 3...",
  };

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Open camera (for mobile/tablet)
  const handleCameraOpen = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "environment";
    input.onchange = handleImageChange;
    input.click();
  };

  // Reset image
  const handleReset = () => {
    setImage(null);
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gradient-to-r h-[600px] from-[#D1FFD6] to-[#ACFFF5] rounded-3xl p-6 pt-10 max-w-[1340px] mx-auto ">
      
      {/* Left Box - Dropdown + Details */}
      <div className="w-1/3 h-[500px] border-2 border-green-500 rounded-2xl p-6">
        <h2 className="py-2 font-poppins text-[20px] font-semibold">Roadmap</h2>
        <select
          className="w-full p-2 text-[16px] rounded-lg text-lg font-poppins font-medium"
          onChange={(e) => setSelectedOption(e.target.value)}
          value={selectedOption}
        >
          <option value="">Select Plant</option>
          <option value="option1">Tomato</option>
          <option value="option2">Betal</option>
          <option value="option3">Potato</option>
        </select>

        {/* Display details when an option is selected */}
        {selectedOption && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-lg text-[14px] h-[350px] overflow-y-auto">
            <p className="font-bold">Details:</p>
            <p>{options[selectedOption]}</p>
          </div>
        )}
      </div>

      {/* Image Upload Section */}
      <div className="flex h-[500px] justify-center px-6 pt-0">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-96 flex flex-col items-center">
          
          {/* Image Preview */}
          <div className="w-full h-40 flex items-center justify-center bg-gray-200 rounded-lg mb-4">
            {image ? (
              <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="text-gray-600 font-semibold">Upload Image</div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col w-full space-y-3">
            <label className="bg-green-600 text-white py-2 rounded-lg text-center cursor-pointer">
              Select Image
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
            <button onClick={handleCameraOpen} className="bg-blue-500 text-white py-2 rounded-lg">
              Camera
            </button>
            <button className="bg-teal-500 text-white py-2 rounded-lg">Proceed</button>
            {image && (
              <button onClick={handleReset} className="bg-red-500 text-white py-2 rounded-lg">
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="w-1/3 h-[500px] border-2 border-green-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-black">
        Text Box
      </div>
    </div>
  );
}
