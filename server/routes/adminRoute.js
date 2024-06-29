const express = require("express");
const router = express.Router();
const {
    getNumbers,
    getUsers,
    getVacancies,
    getUser,
    deleteUser,
    getVacancy,
    updateVacancy,
    deleteVacancy
} = require("../controllers/adminController");
const { authenticateTokenForAdmin } = require("../middlewares/authMiddleWare");

router.route("/numbers")
    .get(authenticateTokenForAdmin, getNumbers);

router.route("/users")
    .get(authenticateTokenForAdmin, getUsers);

router.route("/vacancies")
    .get(authenticateTokenForAdmin, getVacancies);

router.route("/user/:id")
    .get(authenticateTokenForAdmin, getUser)
    .delete(authenticateTokenForAdmin, deleteUser);

router.route("/vacancy/:id")
    .get(authenticateTokenForAdmin, getVacancy)
    .put(authenticateTokenForAdmin, updateVacancy)
    .delete(authenticateTokenForAdmin, deleteVacancy);

module.exports = { router };