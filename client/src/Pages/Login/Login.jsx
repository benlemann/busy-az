
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import styles from './Login.module.css';
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
const initialValues = {
    email: "",
    password: "",
};

const Login = () => {
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
        };

        fetchUsers();
    }, [isPosting]);

    const handleSubmit = async (values, actions) => {
        try {
            setIsPosting(true);

            const user = users.find(user => user.email === values.email && user.password === values.password);
            if (user) {
                alert("Giriş yapıldı!");
                actions.resetForm();
            } else {
                alert("Email or password is incorrect!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while logging in. Please try again later.");
        } finally {
            setIsPosting(false);
            actions.setSubmitting(false);
        }
    };

    return (
        <div className={styles.formBox}>
            <div className={styles.textbox}>
                <h1 className={styles.title}>Daxil ol</h1>
                <div className={styles.subtitle}>
                    <h3 className={styles.subtitletext}>Səni saytımızda görmək xoşdur.</h3>
                    <p><span>Hesabın yoxdur?</span> <span className={styles.signup}>  <NavLink to="/signup">Qeydiyyatdan keç!</NavLink> </span></p>
                </div>
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email address').required('Please Enter Email'),
                    password: Yup.string().required('Please Enter Password'),
                })}
                onSubmit={handleSubmit}
            >
                {({ errors, isSubmitting }) => (
                    <Form className={styles.form}>
                        <div className={styles.inpbox}>
                            <div className={styles.iconbox}>
                                <CiMail />
                            </div>
                            <Field className={styles.inp} type="email" name="email" placeholder="e-poçt ünvanı" />

                        </div>

                        {errors.email && <small className={styles.error}>{errors.email}</small>}
                        <br />
                        <div className={styles.inpbox}>
                            <div className={styles.iconbox}>
                            <CiLock />  
                            </div>
                            <Field className={styles.inp} type="password" placeholder="parol" name="password" />
                        </div>

                        {errors.password && <small className={styles.error}>{errors.password}</small>}
                        <div>
                        <span className={styles.forgetpsw}>Parolun yaddan çıxıb?</span>

                        </div>
                        <br />
                        <button className={styles.submitBtn} type='submit' disabled={isSubmitting || isPosting}>Daxil ol</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;