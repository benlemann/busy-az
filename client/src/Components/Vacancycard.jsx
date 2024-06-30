import React from "react";
import { useNavigate } from "react-router-dom";

const Vacancycard = ({ props, backgroundColor }) => {
  const navigate = useNavigate();

  
  // /api/user/look/_id  include   put

  return (
    <div
      onClick={() => {
        navigate(`vacancy/${props._id}`);
      }}
      className={`flex items-center justify-between w-full min-h-20 border-l-4 border-transparent hover:border-blue-500 p-5 cursor-pointer group ${backgroundColor}`}
    >
      <div>
        <h1 className="text-lg">{props.title}</h1>
        <div className="text-gray-400 text-sm">
          <span>{props.company}</span>
          <span>{props.location}</span>
          {/* <span>{props.time}</span> */}
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 items-center">
        <button
          className={
            props.premium
              ? "block bg-lime-400 rounded-sm le:h-10 h-9 w-24 text-black font-semibold hover:bg-blue-700 hover:text-white transition duration-300"
              : "hidden"
          }
        >
          Premium
        </button>
        <button className="bg-gray-400 text-gray-50 le:h-10 h-9 py-2 px-7 rounded-sm transition duration-300 hover:bg-blue-700 hover:text-white font-serif group-hover:bg-blue-700 group-hover:text-white">
          Ətraflı
        </button>
      </div>
    </div>
  );
};

export default Vacancycard;
