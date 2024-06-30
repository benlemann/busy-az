import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditVacancy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editedVacancy, setEditedVacancy] = useState({
    title: "",
    company: "",
    location: "",
    time: "",
    jobtype: "",
    age: "",
    salary: "",
    content: "",
    premium: false,
    number: "",
    email: "",
  });

  useEffect(() => {
    fetch(`https://6676bd0c145714a1bd72a309.mockapi.io/vacancies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch vacancy details");
        }
        return response.json();
      })
      .then((data) => {
        setEditedVacancy(data);
      })
      .catch((error) => {
        console.error("Failed to fetch vacancy details", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setEditedVacancy((prevState) => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  const handleUpdateVacancy = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://6676bd0c145714a1bd72a309.mockapi.io/vacancies/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedVacancy),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update vacancy");
      }
      navigate("/admin/vacancies");
    } catch (error) {
      console.error("Failed to update vacancy", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6">Edit Vacancy</h2>
        <form onSubmit={handleUpdateVacancy}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="title">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedVacancy.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="company">
              Company:
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={editedVacancy.company}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="location">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={editedVacancy.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="time">
              Time:
            </label>
            <input
              type="text"
              id="time"
              name="time"
              value={editedVacancy.time}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="jobtype">
              Job Type:
            </label>
            <input
              type="text"
              id="jobtype"
              name="jobtype"
              value={editedVacancy.jobtype}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="age">
              Age:
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={editedVacancy.age}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="salary">
              Salary:
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={editedVacancy.salary}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="content">
              Content:
            </label>
            <textarea
              id="content"
              name="content"
              value={editedVacancy.content}
              onChange={handleInputChange}
              className="w-full h-40 px-3 py-2 border rounded-md"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="premium">
              Premium:
            </label>
            <input
              type="checkbox"
              id="premium"
              name="premium"
              checked={editedVacancy.premium}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="text-sm">Premium</span>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="number">
              Number:
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={editedVacancy.number}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedVacancy.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Update Vacancy
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditVacancy;
