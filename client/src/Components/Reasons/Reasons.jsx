import React from "react";
import style from "./reasons.module.css";
const Reasons = ({ numberBg, reasonAbout, result }) => {
  return (
    <div className={style.reasonsBox}>
      <div className={style.numberBg}>
        <span className={style.numberBlue}>{numberBg}</span>
      </div>
      <div className={style.reasonsAbout}>
        <h1 className={style.reasonAbout}>{reasonAbout}</h1>
        <p className={style.result}>{result}</p>
      </div>
    </div>
  );
};

export default Reasons;
