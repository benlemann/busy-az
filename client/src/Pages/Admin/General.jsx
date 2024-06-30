import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/userSlice";
import { getVacancies } from "../../Redux/vacanciesSlice";

const General = () => {
  const { users } = useSelector((state) => state.users);
  const { vacancies } = useSelector((state) => state.vacancies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers())
    dispatch(getVacancies())
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center w-full h-[40vh] gap-4">
        <div className="bg-blue-400 w-52 h-32 flex flex-col items-center justify-center text-white font-bold text-2xl rounded-md">
          <p>Total users</p>
          {users.length}
        </div>
        <div className="bg-orange-400  w-52 h-32 flex flex-col items-center justify-center text-white font-bold text-2xl rounded-md">
          <p>Total vacancies</p>
          {vacancies.length}
        </div>
        <div className="bg-red-500 w-52 h-32 flex flex-col items-center justify-center text-white font-bold text-2xl rounded-md">
          <p>Total messages</p>
          {/* {messages.length} */}
        </div>
      </div>
    </div>
  );
};

export default General;
