import React from "react";
import { MdDelete } from "react-icons/md";
import { FaPen, FaEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../Redux/userSlice";
import { deleteVacancy } from "../../Redux/vacanciesSlice";


const Rendercomponent = ({ id, name, email, title, company, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (type === "user") {
      navigate(`/admin/users/${id}`);
    } else if (type === "job") {
      navigate(`/admin/vacancies/${id}`);
    }
  };

  const handleEdit = () => {
    if (type === "job") {
      navigate(`/admin/vacancies/${id}/edit`);
    }
  };

  const handleDelete = () => {
    if (type === "user") {
      dispatch(deleteUser(id));
    } else if (type === "job") {
      dispatch(deleteVacancy(id));
    }
  };

  return (
    <tr className="border border-b-blue-300">
      <td className="text-center border border-r-blue-300 border-b-blue-300 p-2">
        {id}
      </td>
      <td className="border border-r-blue-300 border-b-blue-300 p-2">
        {type === "user" ? name : company}
      </td>
      <td className="border border-r-blue-300 border-b-blue-300 p-2">
        {type === "user" ? email : title}
      </td>
      <td className="flex gap-1 justify-center items-center w-40 p-2">
        <button
          onClick={handleNavigate}
          className="bg-purple-200 p-2 rounded-sm"
        >
          <FaEye color="purple" />
        </button>
        {type === "job" && (
          <button
            onClick={handleEdit}
            className="bg-blue-200 p-2 rounded-sm"
          >
            <FaPen color="blue" />
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-200 p-2 rounded-sm"
        >
          <MdDelete color="red" />
        </button>
      </td>
    </tr>
  );
};

export default Rendercomponent;
