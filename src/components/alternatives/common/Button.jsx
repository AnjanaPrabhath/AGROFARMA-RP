import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#f7c35f] font-semibold text-xl px-4 py-4 rounded-lg w-full">
      {children}
    </button>
  );
};

export default Button;
