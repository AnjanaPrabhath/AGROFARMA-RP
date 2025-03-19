import React, { useState, useEffect, useCallback } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import moment from "moment";
import axios from "axios"; // Import axios

const SoilStatus = () => {
  const [predictionResult, setPredictionResult] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // New State variables for Phosphorus, Potassium, and PH Value
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [phValue, setPhValue] = useState("");
  const [cropType, setCropType] = useState("");
  const [soilType, setSoilType] = useState("");

  const latitude = 6.9271;
  const longitude = 79.8612;
  const backendURL = "http://127.0.0.1:5000"; // Corrected: Base URL
  const weatherEndpoint = "/get_weather_data"; // Added
  const predictEndpoint = "/predict"; // Added

  const fetchWeatherData = useCallback(
    async (date) => {
      try {
        const formattedDate = moment(date).format("YYYY-MM-DD");
        const url = `${backendURL}${weatherEndpoint}?latitude=${latitude}&longitude=${longitude}&date=${formattedDate}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data.weather_data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      }
    },
    [backendURL, latitude, longitude, weatherEndpoint]
  ); // Include weatherEndpoint

  useEffect(() => {
    fetchWeatherData(selectedDate);
  }, [selectedDate, fetchWeatherData]);

  const handleDateChange = (dates) => {
    if (dates && dates.length > 0) {
      setSelectedDate(dates[0]);
    }
  };

  // Handlers for input changes
  const handlePhosphorusChange = (e) => {
    setPhosphorus(e.target.value);
  };

  const handlePotassiumChange = (e) => {
    setPotassium(e.target.value);
  };

  const handlePhValueChange = (e) => {
    setPhValue(e.target.value);
  };

  const handleCropTypeChange = (e) => {
    setCropType(e.target.value);
  };

  const handleSoilTypeChange = (e) => {
    setSoilType(e.target.value);
  };

  const handleAnalyzeClick = async () => {
    // Construct your request body with all input values
    const requestBody = {
      "Crop type": cropType,
      "PH Value": phValue, // Ensure it's a number
      "Potassium (ppm)": potassium, // Ensure it's a number
      "Phosphorus (ppm)": phosphorus, // Ensure it's a number
      "Soil Type": soilType,
      // "Sunlight Hours": weatherData ? weatherData.sunlight_hours : null, // Ensure weather data is available
      "Sunlight Hours": 7, // Ensure weather data is available
      "Temperature (°C)": 24, // Ensure weather data is available
      "Humidity (%)": 45, // Ensure weather data is available
      // "Humidity (%)": weatherData ? weatherData.humidity : null, // Ensure weather data is available
    };

    try {
      console.log("Request Body:", requestBody); // Log request body

      // Use axios for the POST request
      const response = await axios.put(
        `${backendURL}${predictEndpoint}`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from the server : ", response); // Log the full response
      console.log("Response data : ", response.data); // Log the data

      setPredictionResult(response.data); // Access response data with .data
      console.log("predictionResult state:", predictionResult); // Log after setting state
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setPredictionResult({ predicted_class: "Error", error: error.message });
    }
  };

  // Fertilizer Recommendations
  const fertilizerRecommendations = {
    Tomato: { Urea: 65, TSP: 325, MOP: 65 },
    Bean: { Urea: 110, TSP: 270, MOP: 75 },
    Brinjal: { Urea: 75, TSP: 325, MOP: 85 },
    Cabbage: { Urea: 110, TSP: 270, MOP: 75 },
    Capsicum: { Urea: 100, TSP: 215, MOP: 65 },
  };
  return (
    <div className="flex items-center justify-center w-full h-[96vh] bg-gradient-to-br from-[#a0fbc1] to-white rounded-xl">
      <div className="">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-left">
              {/* <div className="flex items-center">
                <img
                  src="/logo.png"
                  alt="AgroFarma Logo"
                  className="h-8 mr-2"
                />
                <h1 className="text-xl font-bold text-green-700">AGROFARMA</h1>
              </div> */}
            </div>
            <div className="">
              <h2 className="text-2xl font-bold text-gray-800">
                Plant Growth Analysis
              </h2>
              <p className="mt-2 text-gray-600">
                Important! Lorem Ipsum Is Simply Dummy Text Of The Printing And
                Typesetting Industry. Lorem Ipsum Has Been The Industry's
                Standard Dummy Text Ever Since The 1500s, When An Unknown
                Printer Took A Galley Of Type And Scrambled It To Make A Type
                Specimen Book.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Input Form */}
              <div className="space-y-4">
                {/* Date Picker */}
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Date:
                  </label>
                  <Flatpickr
                    id="date"
                    className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    options={{ dateFormat: "Y-m-d", defaultDate: selectedDate }}
                    onChange={handleDateChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="cropType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Your Crop Type
                  </label>
                  <div className="mt-1">
                    <select
                      id="cropType"
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      value={cropType}
                      onChange={handleCropTypeChange}
                    >
                      <option value="">Select Crop Type</option>
                      <option value="Bean">Bean </option>
                      <option value="Brinjal">Brinjal</option>
                      <option value="Cabbage">Cabbage</option>
                      <option value="Capsicum">Capsicum</option>
                      <option value="Tomato">Tomato</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="soilType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Your Soil Type
                  </label>
                  <div className="mt-1">
                    <select
                      id="soilType"
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      value={soilType}
                      onChange={handleSoilTypeChange}
                    >
                      <option value="">Select Soil Type</option>
                      <option value="Clay">Clay</option>
                      <option value="Clay Loam">Clay Loam</option>
                      <option value="Clay Soil">Clay Soil</option>
                      <option value="Clay Loam">Clay Loam</option>
                      <option value="Loamy Soil">Loamy Soil</option>
                      <option value="Sand Clay Loam">Sandy Clay Loam</option>
                      <option value="Well-drained">Well-drained</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phValue"
                      className="block text-sm font-medium text-gray-700"
                    >
                      PH Value
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        id="phValue"
                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={phValue}
                        onChange={handlePhValueChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="potassium"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Potassium (PPM)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        id="potassium"
                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={potassium}
                        onChange={handlePotassiumChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phosphorous"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phosphorous (PPM)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        id="phosphorous"
                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        value={phosphorus}
                        onChange={handlePhosphorusChange}
                      />
                    </div>
                  </div>
                  <div>
                    {/* Sunlight Hours (Read-only) */}
                    <label
                      htmlFor="sunlightHours"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sunlight Hours
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        id="sunlightHours"
                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
                        value={weatherData ? weatherData.sunlight_hours : ""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="temperature"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Temperature Difference
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        id="temperature"
                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
                        value={
                          weatherData ? weatherData.temperature_difference : ""
                        }
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="humidity"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Humidity (%)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        id="humidity"
                        className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
                        value={weatherData ? weatherData.humidity : ""}
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleAnalyzeClick}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Start Growth Analysis
                  </button>
                </div>
              </div>

              {/* Result */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 pb-2">
                  Result
                </h3>
                <div className="bg-gray-50 rounded-md p-4 h-fit overflow-y-auto">
                  {predictionResult ? (
                    <>
                      {predictionResult.error ? (
                        <p className="text-red-500">
                          Error: {predictionResult.error}
                        </p>
                      ) : (
                        <>
                          <p className="text-gray-600">
                            Predicted Status: {predictionResult.predicted_class}
                          </p>
                          {/* Check if probability_growth is a number before calling toFixed */}
                          {typeof predictionResult.probability_growth ===
                          "number" ? (
                            <p className="text-gray-600">
                              Prediction Growth Rate:{" "}
                              {(
                                predictionResult.probability_growth * 100
                              ).toFixed(0)}
                              %
                            </p>
                          ) : (
                            <p className="text-gray-600">
                              Prediction Growth Rate: N/A
                            </p>
                          )}

                          {/* Fertilizer Recommendations */}
                          {predictionResult.predicted_class === "Growth" &&
                            fertilizerRecommendations[cropType] && (
                              <>
                                <h4 className="text-md font-semibold text-green-700 mt-4 mb-2">
                                  Recommended Fertilizer
                                </h4>
                                <p className="text-gray-600">
                                  Urea:{" "}
                                  {fertilizerRecommendations[cropType].Urea}{" "}
                                  kg/ha
                                </p>
                                <p className="text-gray-600">
                                  TSP: {fertilizerRecommendations[cropType].TSP}{" "}
                                  kg/ha
                                </p>
                                <p className="text-gray-600">
                                  MOP: {fertilizerRecommendations[cropType].MOP}{" "}
                                  kg/ha
                                </p>
                              </>
                            )}
                        </>
                      )}
                    </>
                  ) : (
                    <p className="text-gray-600">No analysis performed yet.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilStatus;
