import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailComp from "../../Components/DetailComp";
import { getDetailUser } from "../../Redux/userSlice";

const Userdetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userDetail, userDetailStatus } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getDetailUser(id));
  }, [dispatch, id]);

  return (
    <div>
      {userDetailStatus === "loading" && <p>Loading...</p>}
      {userDetailStatus === "success" && <DetailComp type="user" data={userDetail} />}
      {userDetailStatus === "fail" && <p>Failed to load user details.</p>}
    </div>
  );
};

export default Userdetail;
