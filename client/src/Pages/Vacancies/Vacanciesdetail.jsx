import React, {  useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import { getDetailVacancy } from "../../Redux/vacanciesSlice";
import DetailComp from "../../Components/DetailComp";

const Vacanciesdetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { vacancyDetail, vacancyDetailStatus } = useSelector((state) => state.vacancies);

  useMemo(() => {
    dispatch(getDetailVacancy(id));
  }, [dispatch, id]);

  console.log(vacancyDetail, vacancyDetailStatus );


  return (
    <div>
      {vacancyDetailStatus == "loading" ? (
        <Loading />
      ) : (
        <DetailComp type="job" data={vacancyDetail} />
      )}
    </div>
  );
};

export default Vacanciesdetail;
