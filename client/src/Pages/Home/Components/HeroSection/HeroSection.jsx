import React from 'react'
import styles from "./HeroSection.module.css"
const HeroSection = () => {
  return (

    <div className=' justify-center flex'>
        <div  className="container">
        <div className={styles.title}>
            <h2>Bizi işlə dost edir</h2>
            <h3>Azərbaycanın #1 iş axtarma saytı</h3>
            <span>istədiyin işin adını axtarışa ver</span>
            <div className={styles.inpBox}>
                <input  placeholder="vakansiyanın adı yaxud açar-söz" type="text" name="" id="" /> <button>axtar</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default HeroSection
