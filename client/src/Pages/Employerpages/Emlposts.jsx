// // import React from "react";
// // import EBookmarkcard from "../../Components/Employerpagecomponents/Bookmarkcard";

// // const Emlposts = () => {
// //   const myvacancies = [
// //     {
// //       id: 1,
// //       title: "Yük maşını atego sürücüsü",
// //       time: " 22 saat əvvəl",
// //     },
// //     {
// //       id: 2,
// //       title: "Uçuşların təhlükəsizliyi və Keyfiyyətə Nəzarət üzrə Mütəxəssis (Lənkəran BHL)",
// //       time: " 22 saat əvvəl",
// //     },
// //   ];

// //   return (
// //     <div className="flex justify-center w-full">
// //       <div className="w-11/12">
// //         <h1 className="py-10 text-2xl font-normal">Elanlarım</h1>
// //         <div className="w-full shadow-custom mb-10">
// //           {
// //            myvacancies?.map((item) => {
// //              return <EBookmarkcard key={item.id} item={item} />
// //             })
// //           }
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Emlposts;



// import React, { useEffect, useState } from "react";
// import EBookmarkcard from "../../Components/Employerpagecomponents/Bookmarkcard";

// const Emlposts = () => {
//   const [myVacancies, setMyVacancies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchVacancies = async () => {
//       try {
//         const response = await fetch("http://localhost:7999/api/user/vacancies");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setMyVacancies(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVacancies();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="flex justify-center w-full">
//       <div className="w-11/12">
//         <h1 className="py-10 text-2xl font-normal">Elanlarım</h1>
//         <div className="w-full shadow-custom mb-10">
//           {myVacancies.length > 0 ? (
//             myVacancies.map((item) => (
//               <EBookmarkcard key={item.id} item={item} />
//             ))
//           ) : (
//             <div>No vacancies found.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Emlposts;

import React, { useEffect, useState } from "react";
import EBookmarkcard from "../../Components/Employerpagecomponents/Bookmarkcard";

const Emlposts = () => {
  const [myVacancies, setMyVacancies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch("http://localhost:7999/api/user/vacancies", {
          method: "GET",
          credentials: "include"
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data.vacancies); // Gelen yanıtı 
        setMyVacancies(data.vacancies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  const handleDelete = (id) => {
    setMyVacancies((prevVacancies) => prevVacancies.filter((vacancy) => vacancy.id !== id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12">
        <h1 className="py-10 text-2xl font-normal">Elanlarım</h1>
        <div className="w-full shadow-custom mb-10">
          {myVacancies.length > 0 ? (
            myVacancies.map((item) => (
              <EBookmarkcard key={item.id} item={item} onDelete={handleDelete}  />
            ))
          ) : (
            <div>No vacancies found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Emlposts;

