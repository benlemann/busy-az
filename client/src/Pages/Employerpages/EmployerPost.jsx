import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";


const EPost = () => {
  return (
    <div className="p-4">
      <div className="min-h-10 p-6">
        <div className="flex items-center gap-2 text-blue-700 font-semibold">
          <RiPagesLine  />
          <h1> Elan məlumatları</h1>
        </div>
      </div>
      <div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6">
      <div className="px-6">
          <h5 className="py-3">Elan başığı</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Elan başığı adını daxil edin"
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Son müraciət tarixi</h5>
          <input className="border p-2 rounded-sm w-full" type="date" />
        </div>
        <div className="px-6">
          <h5 className="py-3">Məkan</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Şəhər adını daxil edin"
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Təklif olunan maaş</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="tel"
            placeholder="Maaş miqdarı - AZN ilə"
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Iş haqqında bilgi</h5>
          <textarea
          
            className="border h-28 p-2 rounded-sm w-full resize-none"
            type="text"
            placeholder="Tələblər və öhtəliklər barədə bura yazın.."
          />
        </div>
       
      </div>
      <div className="w-full flex justify-end items-center p-6 h-36">
        <button className="w-36 h-12 rounded-md text-white bg-gray-800">
          Yadda saxla
        </button>
      </div>
    </div>
  );
};

export default EPost;
