import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#185835] to-[#03cfc5]">
      <div className="absolute top-5 left-10 text-white text-3xl font-bold flex items-center">
       
      </div>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between px-8">
        {/* Left Section */}
        <div className="text-white text-center md:text-left max-w-md">
          <h1 className="text-4xl font-bold">AGROFARMA</h1>
          <p className="mt-4 text-lg opacity-80">
            Elevate your workspace with Galileo’s sleek and intuitive login
            page! Designed with simplicity, security, and speed in mind.
          </p>
        </div>

        {/* Login Box */}
        <div className="bg-green-200 bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-md mt-10 md:mt-0">
          <h2 className="text-white text-center text-xl font-semibold py-6">
            WELCOME BACK
          </h2>
          
          {/* Email Input */}
          <div className="mb-4">
            <label className="text-white block mb-2">Email Address</label>
            <input
              type="email"
              placeholder="yourname@example.com"
              className="w-full p-3 bg-white placeholder-green-200 bg-opacity-20 text-white rounded-lg focus:ring focus:ring-green-500 outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="text-white block mb-2">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full p-3 bg-white placeholder-green-200 bg-opacity-20 text-white rounded-lg focus:ring focus:ring-green-500 outline-none"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-400 transition">
            Proceed to my Account
          </button>

          {/* Forgot Password */}
          <p className="text-white text-center text-sm mt-4 cursor-pointer hover:text-white">
            Having trouble with your password?
          </p>

        </div>
      </div>
    </div>
  );
}
