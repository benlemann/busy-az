const express = require("express");
const router = express.Router();
const {
    getVacancy,
    lookVacancy,
    getVacancies,
    createVacancy
} = require("../controllers/vacancyController");
const { authenticateToken } = require("../middlewares/authMiddleWare");

router.route("/:id")
    .get(getVacancy);

router.route("/look/:id")
    .put(authenticateToken, lookVacancy);

router.route("/")
    .get(getVacancies)
    .post(authenticateToken, createVacancy);

module.exports = { router };