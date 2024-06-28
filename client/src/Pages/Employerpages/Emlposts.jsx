// import React, { useState, useEffect } from "react";
// import EBookmarkcard from "../../Components/Employerpagecomponents/Bookmarkcard";

// const Emlposts = () => {
//   const [marks, setMarks] = useState([]);

//   useEffect(() => {
//     const fetchMarks = async () => {
//       try {
//         const response = await fetch("http://localhost:7999/api/user/vacancies", {
//           method: "GET",
//           credentials: "include"
//         });
//         if (response.ok) {
//           const data = await response.json();
//           setMarks(data.marks);
//           console.log(data);
//         } else {
//           console.error("Failed to fetch marks");
//         }
//       } catch (error) {
//         console.error("Error fetching marks:", error);
//       }
//     };

//     fetchMarks();
//   }, []);

//   return (
//     <div className="flex justify-center w-full">
//       <div className="w-11/12">
//         <h1 className="py-10 text-2xl font-normal">Elanlarım</h1>
//         <div className="w-full shadow-custom mb-10">
//           {marks.map((item) => (
//             <EBookmarkcard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Emlposts;


import React, { useState, useEffect } from "react";
import EBookmarkcard from "../../Components/Employerpagecomponents/Bookmarkcard";

const Emlposts = () => {
  const [marks, setMarks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await fetch("http://localhost:7999/api/user/vacancies", {
          method: "GET",
          credentials: "include"
        });
        if (response.ok) {
          const data = await response.json();
          setMarks(data.marks);
          console.log("Fetched marks:", data.marks);
        } else {
          setError("Failed to fetch marks");
          console.error("Failed to fetch marks:", response.statusText);
        }
      } catch (error) {
        setError("Error fetching marks");
        console.error("Error fetching marks:", error);
      }
    };

    fetchMarks();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-11/12">
        <h1 className="py-10 text-2xl font-normal">Elanlarım</h1>
        <div className="w-full shadow-custom mb-10">
          {marks.map((item) => (
            <EBookmarkcard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emlposts;
