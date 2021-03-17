import React from "react";

const Button = ({ onClick, color, teks }) => {
  return (
    <div className="flex-none">
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="text-white font-bold py-2 px-4 rounded"
      >
        {teks}
      </button>
    </div>
  );
};

export default Button;
