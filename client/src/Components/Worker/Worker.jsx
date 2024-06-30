import React from "react";
import style from "./worker.module.css";
const Worker = ({ img, name, bgColor, width }) => {
  return (
    <div className={style.workerCard}>
      <div className={style.workerImg} style={{ backgroundColor: bgColor }}>
        <img src={img} alt="" style={{ width: width }}/>
      </div>
      <div className={style.workerNames}>
        <h2 className={style.workerName}>{name}</h2>
      </div>
    </div>
  );
};

export default Worker;
