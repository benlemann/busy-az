import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailComp from "../../Components/Admin/DetailComp";
import { getDetailVacancy } from "../../Redux/vacanciesSlice";

const Vacanciesdetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { vacancyDetail, vacancyDetailStatus } = useSelector((state) => state.vacancies);

  useEffect(() => {
    dispatch(getDetailVacancy(id));
  }, [dispatch, id]);

  return (
    <div>
      {vacancyDetailStatus === "loading" && <p>Loading...</p>}
      {vacancyDetailStatus === "success" && <DetailComp type="job" data={vacancyDetail} />}
      {vacancyDetailStatus === "fail" && <p>Failed to load user details.</p>}
    </div>
  );
};

export default Vacanciesdetail;
