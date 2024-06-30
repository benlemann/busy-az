import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rendercomponent from "../../Components/Admin/Rendercomponent";
import { getUsers } from "../../Redux/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { users, userStatus } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="bg-blue-500 w-full">
          <tr className="w-full h-9 text-white">
            <th className="border-x border-x-white">UID</th>
            <th className="border-x border-x-white">USER</th>
            <th className="border-x border-x-white">EMAIL</th>
            <th className="border-x border-x-white w-40">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <Rendercomponent key={item.id} {...item} type="user" />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
