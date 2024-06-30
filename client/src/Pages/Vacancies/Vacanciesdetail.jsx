// import React, {  useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import Loading from "../../Components/Loading";
// import { getDetailVacancy } from "../../Redux/vacanciesSlice";
// import DetailComp from "../../Components/DetailComp";

// const Vacanciesdetail = () => {




//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { vacancyDetail, vacancyDetailStatus } = useSelector((state) => state.vacancies);

//   useMemo(() => {
//     dispatch(getDetailVacancy(id));
//   }, [dispatch, id]);

//   console.log(vacancyDetail);


//   return (
//     <div>
//       {vacancyDetailStatus == "loading" ? (
//         <Loading />
//       ) : (
//         <DetailComp type="job" data={vacancyDetail} />
//       )}
//     </div>
//   );
// };

// export default Vacanciesdetail;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { getDetailVacancy } from "../../Redux/vacanciesSlice";
import DetailComp from "../../Components/DetailComp";

const VacanciesDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { vacancyDetail, vacancyDetailStatus } = useSelector((state) => state.vacancies);

  useEffect(() => {
    dispatch(getDetailVacancy(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log(id);
    if (vacancyDetail) {
      const updateVacancyDetail = async () => {
        try {
          const response = await fetch(`http://localhost:7999/api/user/look/${id}`, {
            method: "PUT",
            credentials:"include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(vacancyDetail),
          });
          const data = await response.json();
          console.log("Vacancy updated:", data);
        } catch (error) {
          console.error("Error updating vacancy:", error);
        }
      };

      updateVacancyDetail();
    }
  }, [vacancyDetail, id]);

  if (!vacancyDetail) {
    return <Loading />;
  }

  return (
    <div>
      {vacancyDetailStatus === "loading" ? (
        <Loading />
      ) : (
        <DetailComp type="job" data={vacancyDetail.vacancy} />
      )}
    </div>
  );
};

export default VacanciesDetail;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import Loading from "../../Components/Loading";
// import { getDetailVacancy } from "../../Redux/vacanciesSlice";
// import DetailComp from "../../Components/DetailComp";

// const VacanciesDetail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { vacancyDetail, vacancyDetailStatus } = useSelector((state) => state.vacancies);

//   useEffect(() => {
//     dispatch(getDetailVacancy(id));
//   }, [dispatch, id]);

//   useEffect(() => {
//     if (vacancyDetail) {
//       const updateVacancyDetail = async () => {
//         try {
//           const response = await fetch(`/api/user/look/${id}`, {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             credentials:"include",
//             body: JSON.stringify(vacancyDetail),
//           });
//           const data = await response.json();
//           console.log("Vacancy updated:", data);
//         } catch (error) {
//           console.error("Error updating vacancy:", error);
//         }
//       };

//       updateVacancyDetail();
//     }
//   }, [vacancyDetail, id]);

//   console.log(vacancyDetail, vacancyDetailStatus);

//   return (
//     <div>
//       {vacancyDetailStatus === "loading" ? (
//         <Loading />
//       ) : (
//         <DetailComp type="job" data={vacancyDetail} />
//       )}
//     </div>
//   );
// };

// export default VacanciesDetail;
