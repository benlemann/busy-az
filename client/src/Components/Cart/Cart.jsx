import React from "react";
import style from "./cart.module.css";

const Cart = ({img,text}) => {
  return (
    <div className={style.cartMenu}>
      <div className={style.cartImgs}>
        <img className={style.blogImg} src={img} alt="" />
      </div>
      <div className={style.cartMenuAbout}>
        <p className={style.cartAbout}>{text}</p>
      </div>
    </div>
  );
};

export default Cart;
