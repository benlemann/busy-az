import React from 'react'
import styles from './Vacancies.module.css'
const Vacancies = () => {
  return (
    <div className={styles.vacancies}>
      <div className='container'>
        <div className={styles.category}>
          <div className={styles.radioinps}>
            <label className={styles.radioLabel}>
              <input type="radio" name="userrole" value="1" className={styles.radioInput} />
              <span className={styles.radioLabel}>Son vakansiyalar</span>
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="userrole" value="2" className={styles.radioInput} />
              <span className={styles.radioLabel}>Premium</span>
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="userrole" value="3" className={styles.radioInput} />
              <span className={styles.radioLabel}>Yüksək maaşlı</span>
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="userrole" value="4" className={styles.radioInput} />
              <span className={styles.radioLabel}>Könüllü (volontyor)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vacancies
