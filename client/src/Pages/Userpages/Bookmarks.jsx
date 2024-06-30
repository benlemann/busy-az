// import React from "react";
// import Bookmarkcard from "../../Components/Userpagecomps/Bookmarkcard";

// const Bookmarks = () => {
//   const [myVacancies, setMyVacancies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const fetchVacancies = async () => {
//     try {
//       const response = await fetch("http://localhost:7999/api/user/looks", {
//         method: "GET",
//         credentials: "include"
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log("Fetched data:", data.vacancies); // Gelen yanıtı 
//       setMyVacancies(data.vacancies);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchVacancies();
// }, []);

// return (
//   <div className="flex justify-center w-full">
//     <div className="w-11/12">
//       <h1 className="py-10 text-2xl font-normal">Gözaltılar</h1>
//       <div className="w-full shadow-custom mb-10">
//         {
//           myVacancies.map((item) => {
//             return <Bookmarkcard key={item.id} item={item} />
//           })
//         }
//       </div>
//     </div>
//   </div>
// );
// };

// export default Bookmarks;



import React, { useState, useEffect } from "react";
import Bookmarkcard from "../../Components/Userpagecomps/Bookmarkcard";

const Bookmarks = () => {
  const [myVacancies, setMyVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVacancies = async () => {
    try {
      const response = await fetch("http://localhost:7999/api/user/looks", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched data:", data.vacancies); // Log fetched data
      setMyVacancies(data.vacancies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12">
        <h1 className="py-10 text-2xl font-normal">Gözaltılar</h1>
        <div className="w-full shadow-custom mb-10">
          {myVacancies.map((item) => (
            <Bookmarkcard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
