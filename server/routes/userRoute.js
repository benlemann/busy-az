const express = require("express");
const router = express.Router();
const {
    createUser,
    loginUser,
    updateUser,
    updateFreelancer,
    getCurrentUser,
    getFreelancers,
    getFreelancer,
    getEmployerVacancies,
    logOutUser
} = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/authMiddleWare");

router.route("/signup")
    .post(createUser);

router.route("/login")
    .post(loginUser);

router.route("/update")
    .put(authenticateToken, updateUser);

router.route("/freelancer/update")
    .get(updateFreelancer);

router.route("/")
    .get(authenticateToken, getCurrentUser);

router.route("/freelancers")
    .get(getFreelancers);

router.route("/freelancer/:id")
    .get(getFreelancer);

router.route("/vacancies")
    .get(getEmployerVacancies);

router.route("/logout")
    .get(logOutUser);

module.exports = { router };