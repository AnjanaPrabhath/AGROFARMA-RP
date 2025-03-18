import { useState } from "react";

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const [selectedPlant, setSelectedPlant] = useState(""); // State for left box
  const [selectedDisease, setSelectedDisease] = useState("Select the Disease"); // State for right box

  // Plant details for left box
  const plantInfo = {
    "Tomato": (
      <p>
        Week 1 – Planting Seeds <br />
        |--- Prepare nutrient-rich, well-drained soil. <br />
        |--- Plant 2 seeds per hole for better germination. <br />
        |--- Keep a 2-foot distance between holes for proper spacing. <br />
        |--- Water lightly but consistently to keep the soil moist. <br />
        <br />
        Week 2 – Germination & Early Growth <br />
        |--- Seeds start sprouting (typically in 5–10 days). <br />
        |--- Ensure full sun exposure (6–8 hours daily). <br />
        |--- Keep soil moist but not soggy. <br />
        |--- If both seeds sprout, thin out the weaker one.
      </p>
    ),
    "Betal": "Betal plant needs well-drained soil and high humidity. Regular watering is essential. Avoid waterlogging.",
    "Potato": "Potatoes require loose, well-drained soil. Plant tubers 3 inches deep and water regularly. Harvest in 90-120 days.",
  };

  // Disease details for right box
  const diseaseInfo = {
    "Tomato - Spider Mites": "Spider mites cause tiny yellow spots on leaves, leading to defoliation if left untreated. They thrive in hot, dry conditions.",
    "Tomato - Septoria Leaf Spot": "This fungal disease creates small, circular spots with dark borders on leaves, leading to premature leaf drop.",
    "Tomato - Leaf Mold": "Leaf mold appears as yellowish spots on upper leaves and olive-green mold on the undersides, reducing plant vigor.",
    "Tomato - Late Blight": "A serious disease causing dark, water-soaked lesions on leaves and fruit. It spreads rapidly in humid conditions.",
    "Tomato - Healthy": "The plant is in good condition with no visible diseases. Keep up with proper watering and nutrient supply.",
    "Tomato - Early Blight": "Characterized by brown concentric rings on lower leaves, this fungal disease weakens plants and affects yield.",
    "Tomato - Bacterial Spot": "Bacterial spot appears as small, dark lesions on leaves and fruit, often leading to leaf drop and reduced harvest.",
    "Tomato - Yellow Leaf Curl": "A viral disease causing curled leaves, stunted growth, and yellowing. Spread by whiteflies.",
    "Tomato - Mosaic Virus": "Leads to mottled, distorted leaves and reduced fruit production. It spreads through sap and infected tools.",
    "Tomato - Target Spot": "Dark, circular spots with concentric rings appear on leaves and fruit, leading to premature leaf drop.",
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

      {/* Left Box - Plant Roadmap (NOW UPDATES AUTOMATICALLY) */}
      <div className="w-1/3 h-[500px] border-2 border-green-500 rounded-2xl p-6">
        <h2 className="py-2 font-poppins text-[20px] font-semibold">Roadmap</h2>
        <select
          className="w-full p-2 text-[16px] rounded-lg text-md font-bold font-poppins"
          onChange={(e) => setSelectedPlant(e.target.value)}
          value={selectedPlant}
        >
          <option value="">Select Plant</option>
          <option value="Tomato">Tomato</option>
          <option value="Betal">Betal</option>
          <option value="Potato">Potato</option>
        </select>

        {/* Display details when an option is selected */}
        <div className="mt-4 p-4 bg-white rounded-lg shadow-lg text-[14px] h-[350px] overflow-y-auto">
          <p className="font-bold">Details:</p>
          <p>{selectedPlant ? plantInfo[selectedPlant] : "Select a plant to view details."}</p>
        </div>
      </div>

      {/* Image Upload Section (NO CHANGES) */}
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

      {/* Right Box - Disease Info (NOW UPDATES AUTOMATICALLY) */}
      <div className="w-1/3 h-[500px] border-2 border-green-500 rounded-2xl p-6">
        {/* Dropdown for Disease Selection */}
        <select
          className="w-full p-2 text-md font-medium rounded-lg"
          onChange={(e) => setSelectedDisease(e.target.value)}
          value={selectedDisease}
        >
          <option value="Select the Disease">Select the Disease</option>
          {Object.keys(diseaseInfo).map((disease) => (
            <option key={disease} value={disease}>
              {disease}
            </option>
          ))}
        </select>

        {/* Dynamic Text Box Updates for Disease Info */}
        <div className="mt-4 p-4 text-md bg-white rounded-lg shadow-md h-[390px]">
          <p className="font-semibold">
            {selectedDisease === "Select the Disease"
              ? "Select a disease from the dropdown to see details."
              : diseaseInfo[selectedDisease]}
          </p>
        </div>
      </div>
    </div>
  );
}
