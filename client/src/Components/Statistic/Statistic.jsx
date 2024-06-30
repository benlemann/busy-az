import React from "react";
import style from "./statistic.module.css";
const Statistic = ({ number, submissive}) => {
  return (
    <div className={style.statisticBox}>
      <h3 className={style.numberSymbol}>{number}</h3>
      <div className={style.line}></div>
      <p className={style.submissive}>{submissive}</p>
    </div>
  );
};

export default Statistic;
