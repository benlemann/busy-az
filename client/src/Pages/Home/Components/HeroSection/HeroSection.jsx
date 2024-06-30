import React from 'react'
import styles from "./HeroSection.module.css"
import { useNavigate } from 'react-router-dom'
const HeroSection = () => {
  const navigate = useNavigate()
  return (

    <div className='justify-center flex py-16  px-2'>
        <div  className="container">
        <div>
            <h2  className={styles.title}>Bizi işlə dost edir</h2>
            <h3 className={styles.subtitle}>Azərbaycanın #1 iş axtarma saytı</h3>
            <span className={styles.inptext}>istədiyin işin adını axtarışa ver</span>
            <div className={styles.inpBox}>
                <input className={styles.inp}  placeholder="vakansiyanın adı yaxud açar-söz" type="text" name="" id="" /> <button onClick={()=>{navigate("/vacancies")}} className={styles.searchbtn}>axtar</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default HeroSection
