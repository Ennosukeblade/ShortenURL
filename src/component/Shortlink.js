import React from "react";

import { toast } from "tailwind-toast";

export default function Shortlink({ Short }) {
  //const [isCopied, setisCopied] = useState(false);

  const copyLink = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(Short);
    //setisCopied(true);
    notifCopy();
  };

  const notifCopy = () => {
    //isCopied === true ? (
      toast()
        .warning("Hey!", "Link copied!")
        .with({
          shape: "square",
          duration: 3000,
          speed: 500,
          positionX: "center",
          positionY: "top",
          color: "bg-gray-800",
          fontColor: "blue",
          fontTone: 100,
        })
        .show()
    //) : (
      
    //);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <h3 className="text-lg font-poppins font-bold">{Short}</h3>
      <button
        className="bg-transparent text-gray-900 font-poppins font-semibold py-2 px-4 border-2 border-gray-900 hover:bg-white rounded"
        onClick={copyLink}
      >
        Copy
      </button>
    </div>
  );
}
