import React, { useEffect } from "react";
import Rendercomponent from "../../Components/Admin/Rendercomponent";
import { useDispatch, useSelector } from "react-redux";
import { getVacancies } from "../../Redux/vacanciesSlice";

const Vacancies = () => {
  const dispatch = useDispatch();
  const { vacancies } = useSelector((state) => state.vacancies);
  useEffect(() => {
    dispatch(getVacancies());
  }, [dispatch]);

  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="bg-blue-500 w-full">
          <tr className="w-full h-9 text-white">
            <th className="border-x border-x-white">UID</th>
            <th className="border-x border-x-white">COMPANY</th>
            <th className="border-x border-x-white">TITLE</th>
            <th className="border-x border-x-white w-40">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {vacancies.map((item) => (
            <Rendercomponent key={item.id} {...item} type="job" />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vacancies;
