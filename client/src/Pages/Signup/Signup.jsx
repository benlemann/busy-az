import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import Validation from './Validation';
import styles from './Signup.module.css';
import { CiMail } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { PiBagFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
const initialValues = {
  name: "",
  email: "",
  password: "",
  phone: "",
  role: ""
};

const Signup = () => {
  const [users, setUsers] = useState([]);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://6569b50bde53105b0dd78115.mockapi.io/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, [isPosting]);

  const handleSubmit = async (values, actions) => {
    try {
      setIsPosting(true);

      const userWithEmail = users.find(user => user.email === values.email);
      if (userWithEmail) {
        alert("This email is already in use!");
      } else {
        await axios.post("https://6569b50bde53105b0dd78115.mockapi.io/users", values);
        alert("Registration successful!");
        actions.resetForm();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering. Please try again later.");
    } finally {
      setIsPosting(false);
      actions.setSubmitting(false);
    }
  };

  return (
    <div className={styles.formBox}>
      <div className={styles.textbox}>
        <h1 className={styles.title}>Qeydiyyatdan keç</h1>
        <div className={styles.subtitle}>
          <h3 className={styles.subtitletext}>gəl yeni hesab yaradaq!</h3>
          <p><span>Artıq hesabı yaratmısan?</span> <span className={styles.signup}>  <NavLink to="/login">Daxil ol!</NavLink> </span></p>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={Validation}
        onSubmit={handleSubmit}
      >
        {({ errors, isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.radioinps}>
              <label className={styles.radioLabel}>
                <Field type="radio" name="userrole" value="freelancer" className={styles.radioInput} />
                <span className={styles.radioLabel}>   <IoPersonCircleOutline className={styles.icon} />İşaxtaran</span>
              </label>
              <label className={styles.radioLabel}>
                <Field type="radio" name="userrole" value="employer" className={styles.radioInput} />
                <span className={styles.radioLabel}><PiBagFill className={styles.icon} />İşəgötürən</span>
              </label>
            </div>
            <div className={styles.inpbox}>
              <div className={styles.iconbox}>
                <IoPersonCircleOutline />
              </div>
              <Field className={styles.inp} type="text" name="name" placeholder="ad" />

            </div>
            {errors.name && <small className={styles.error}>{errors.name}</small>}
            <div className={styles.inpbox}>
              <div className={styles.iconbox}>
                <CiMail />
              </div>
              <Field className={styles.inp} type="email" name="email" placeholder="e-poçt" />

            </div>
            {errors.email && <small className={styles.error}>{errors.email}</small>}
            <div className={styles.inpbox}>
              <div className={styles.iconbox}>
                <LuPhone />
              </div>
              <Field className={styles.inp} type="number" name="phone" placeholder="Telefon" />

            </div>
            {errors.phone && <small className={styles.error}>{errors.phone}</small>}
            <div className={styles.inpbox}>
              <div className={styles.iconbox}>
                <CiLock />
              </div>
              <Field className={styles.inp} type="password" name="password" placeholder="parol" />

            </div>
            {errors.password && <small className={styles.error}>{errors.password}</small>}

            <br />
            <button className={styles.submitBtn} type='submit' disabled={isSubmitting || isPosting}>Qeydiyyatdan keç</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;