import React from "react";
import { MdDelete } from "react-icons/md";


const Bookmarkcard = ({ item }) => {
  return (
    <div className="border-b border-gray-300 min-h-10 p-6 flex justify-between">
      <div>
        <h1 className="font-medium">{item.title}</h1>
        <p className="text-sm opacity-85">{item.time}</p>
      </div>
      <div>
        <button className="border-none p-0 m-0 flex items-center justify-center text-white bg-red-400 rounded-full w-10 h-10">
          <MdDelete  size={22} />
        </button>
      </div>
    </div>
  );
};

export default Bookmarkcard;
