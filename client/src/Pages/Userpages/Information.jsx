import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";

const Information = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "man",
    birthday: "",
    country: "",
    city: "",
    phone: "",
    email: "",
    workarea: "",
    description:"",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:7999/api/user/freelancer/update", {
        method: "PUT",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(await response.json());

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Something went wrong!");
      }
      setSuccess("Data updated successfully");
    } catch (error) {
      setError(`Error updating data: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <div className="min-h-10 p-6">
        <div className="flex items-center gap-2 text-blue-700 font-semibold">
          <FaUserEdit />
          <h1>Fərdi məlumatlar</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6">
        <div className="px-6">
          <h5 className="py-3">Ad</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Adınızı girin"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Cinsi</h5>
          <select
            name="gender"
            className="border p-2 rounded-sm w-full"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="man">Kişi</option>
            <option value="woman">Qadın</option>
          </select>
        </div>
        <div className="px-6">
          <h5 className="py-3">Doğum tarixi</h5>
          <input
            className="border p-2 rounded-sm w-full"
            name="birthday"
            type="date"
            value={formData.birthday}
            onChange={handleChange}
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Ölkə</h5>
          <select
            name="country"
            className="border p-2 rounded-sm w-full"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Seçilməyib</option>
            <option value="azerbaycan">Azərbaycan</option>
            <option value="rusiya">Rusiya</option>
            <option value="almanya">Almaniya</option>
            <option value="turkiye">Türkiyə</option>
          </select>
        </div>
        <div className="px-6">
          <h5 className="py-3">Şəhər</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Şəhərinizi girin"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Mobil telefon</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Mobil telefon nömrənizi girin"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">E-mail</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="email"
            placeholder="E-mail adresinizi girin"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">İşləmək istədiyim sahə</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="İşləmək istədiyim sahəni girin"
            name="workarea"
            value={formData.workarea}
            onChange={handleChange}
          />
        </div>
        <div className="px-6">
          <h5 className="py-3">Haqqında</h5>
          <textarea
            className="border h-28 p-2 rounded-sm w-full resize-none"
            placeholder="Haqqında bura yazı.."
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </div>
        <div className="w-full flex justify-end items-center p-6 h-36">
          <button
            type="submit"
            className="w-36 h-12 rounded-md text-white bg-gray-800"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Yüklenir..." : "Yadda saxla"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default Information;

