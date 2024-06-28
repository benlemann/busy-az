import React from "react";
import Sidebarelement from "./Sidebarelement";
import { IoPeopleSharp, IoPower } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { RiUserSettingsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdOutlineCreate } from "react-icons/md";
import { PiCardsThree } from "react-icons/pi";


const Sidebar = () => {
  const navigate = useNavigate();


  const handleLogout = async () => {
    const response = await fetch("http://localhost:7999/api/user/logout", {
      method: "GET",
      credentials: "include"
    });

    const data = await response.json();
    console.log(data);
    navigate("/")
  };

  return (
    <div className="md:w-72 w-20 h-full bg-slate-200 ">
      <div className="py-4">
        {/* <h1 className="text-blue-600 font-bold text-xl md:ml-8 ml-2 mb-2 ">
          Profil
        </h1> */}
        {/* <Sidebarelement
          icon={<IoPeopleSharp size={16} />}
          text=""
          to="/dashboard/employer/profile/"
        /> */}
      </div>
      <div className="py-4">
        <h1 className="text-blue-600 font-bold text-xl md:ml-8 ml-2 mb-2 ">
          Elan
        </h1>
        <Sidebarelement
          icon={<MdOutlineCreate size={16} />}
          text="Vakansiya yarat"
          to="post"
        />
        <Sidebarelement
          icon={<PiCardsThree  size={16} />}
          text="Elanlarım"
          to=""
        />
      </div>

      <div className="py-4">
        <h1 className="text-blue-600 font-bold text-xl md:ml-8 ml-2 mb-2">
          Hesab
        </h1>
        <Sidebarelement
          icon={<RiUserSettingsLine size={16} />}
          text="Profil ayarları"
          to="settings"
        />
        <Sidebarelement
          icon={<IoPower size={16} />}
          text="Çıxış"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

export default Sidebar;
